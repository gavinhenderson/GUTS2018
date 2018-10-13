class MessagePanel {
  constructor(panelClassName) {
    this.panelElement = document.querySelector("." + panelClassName);
    this.timer = new Timer("time-left");
    this.messageList = new MessageList("messages");
  }

  startCall() {
    const bottomButton = document.getElementById("bottom-button");
    this.messageList.clear();
    bottomButton.classList.remove("take-next-call-button");
    bottomButton.classList.add("hang-up-button");
    bottomButton.innerHTML = "Hang Up";
    this.timer.start();
  }

  endCall() {
    this.timer.stop();
    this.timer.reset();
    this.messageList.showGif();
    const bottomButton = document.getElementById("bottom-button");
    bottomButton.classList.add("take-next-call-button");
    bottomButton.classList.remove("hang-up-button");
    bottomButton.innerHTML = "Take Next Call";
  }

  setOperator(operator) {
    this.messageList.setOperator(operator);
  }

  setCaller(caller) {
    this.messageList.setCaller(caller);
  }

  addMessage(identifier, data) {
    this.messageList.addMessage(identifier, data);
  }
}