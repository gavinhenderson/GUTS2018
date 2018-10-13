class MessageList {
  constructor(listClassName) {
    this.listElement = document.querySelector("." + listClassName);
  }

  setOperator(operator) {
    this.operator = operator;
  }

  setCaller(caller) {
    this.caller = caller;
  }

  clear() {
    this.listElement.innerHTML = "";
  }

  addMessage(personIdentifier, message) {
    const person = personIdentifier === "caller" ? this.caller : this.operator;
    const newMessage = document.createElement("div");
    newMessage.classList.add(`${personIdentifier}-message-container`);
    newMessage.innerHTML = `
            <p class="${personIdentifier}-message-name"><strong>${
      person.name
    }</strong> (${personIdentifier === "caller" ? "Customer" : "You"})</p>
            <div class="${personIdentifier}-message-content">
                <p class="message-text">${message}</p>
            </div>
          `;
    this.listElement.appendChild(newMessage);

    const parent = this.listElement.parentElement;
    parent.scrollTop += newMessage.offsetHeight;
  }
}
