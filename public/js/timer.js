class Timer {
    constructor(timer) {
        this.timer = document.querySelector('.' + timer);

        this.counter = 0;
    }

    start() {
        this.interval = setInterval(() => {
            const minutes = Math.floor(this.counter / 60);
            const seconds = this.counter % 60;
            const timeGoing = `${String(minutes).padStart(2,0)}:${String(seconds).padStart(2,0)}`;

            this.timer.innerHTML = timeGoing

            this.counter++;
        }, 1000);
    }

    stop() {
        clearInvterval(this.interval)
    }
};