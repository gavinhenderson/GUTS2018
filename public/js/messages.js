  class MessageList {
      constructor(listClassName) {
          this.listElement = document.querySelector("." + listClassName);

          console.log(listClassName);
      };

      setOperator(operator) {
          this.operator = operator;
      };

      setCaller(caller) {
          this.caller = caller;
      };

      addMessage(personIdentifier, message) {
          const newMessage = document.createElement("p");
          newMessage.innerHTML = message;
          this.listElement.appendChild(newMessage)
      };
  }