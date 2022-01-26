
const start = document.querySelector('.start');
const stopt = document.querySelector('.stop');
const reset = document.querySelector('.reset');
const pause = document.querySelector('.pause');
const tim   = document.querySelector('.time');

let cron, hrs = 0, min = 0, sec = 0;
let INTERVAL_TIME = 1000;

start.addEventListener('click', () => {
    cron = setInterval(() => { timer() }, INTERVAL_TIME);
    start.disabled = true;
});

stopt.addEventListener('click', () => {
    clearInterval(cron);
    start.disabled = false;
    clean();
})

reset.addEventListener('click', () => {
    clean();
});

pause.addEventListener('click', () => {
    clearInterval(cron);
    start.disabled = false;
});

const clean = () => {
    hrs = 0; min = 0; sec = 0;
    tim.innerText = '00:00:00';
}

const timer = () => {
    sec++;
    if (sec >= 60) {
        sec = 0;
        min++;
        if (min >= 60) {
            min = 0;
            hrs++;
        }
    }
    timeUpdate();
}

const timeUpdate = () => {
    let format = (hrs < 10 ? '0' + hrs : hrs) +
                ':' + (min < 10 ? '0' + min : min) +
                ':' + (sec < 10 ? '0' + sec : sec);

    tim.innerText = format;
}



