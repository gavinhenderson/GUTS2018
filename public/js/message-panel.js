class MessagePanel {
  constructor(panelClassName) {
    this.panelElement = document.querySelector("." + panelClassName);
    this.timer = new Timer("time-left");
    this.messageList = new MessageList("messages");
  }

  startCall() {
    const takeNextCall = document.querySelector('.take-next-call-button');
    const endCall = document.querySelector('.hang-up-button');

    endCall.classList.remove('hide-button');
    takeNextCall.classList.add('hide-button');

    this.timer.start();
  }

  endCall() {
    this.timer.stop();
    this.timer.reset();
    this.messageList.showGif();
    
    const takeNextCall = document.querySelector('.take-next-call-button');
    const endCall = document.querySelector('.hang-up-button');

    takeNextCall.classList.remove('hide-button');
    endCall.classList.add('hide-button');
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
