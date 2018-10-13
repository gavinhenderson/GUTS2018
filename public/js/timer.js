class Timer {
  constructor(timer) {
    this.timer = document.querySelector("." + timer);

    this.counter = 0;
  }

  start() {
    this.interval = setInterval(() => {
      const minutes = Math.floor(this.counter / 60);
      const seconds = this.counter % 60;
      const timeGoing = `${String(minutes).padStart(2, 0)}:${String(
        seconds,
      ).padStart(2, 0)}`;

      this.timer.innerHTML = timeGoing;

      this.counter++;
    }, 1000);
    document.querySelector(".timer").classList.remove("timer-disabled");
  }

  stop() {
    clearInterval(this.interval);
    document.querySelector(".timer").classList.add("timer-disabled");
  }

  reset() {
    this.counter = 0;
    this.timer.innerHTML = "00:00";
  }
}
