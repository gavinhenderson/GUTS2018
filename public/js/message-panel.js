class MessagePanel {
  constructor(panelClassName) {
    this.panelElement = document.querySelector("." + panelClassName);
    this.timer = new Timer("time-left");
    this.messageList = new MessageList("messages");
  }

  startCall() {
    this.timer.start();
  }

  endCall() {
    this.timer.stop();
    this.timer.reset();
    this.messageList.clear();
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
