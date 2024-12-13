let startBtn = document.getElementById("start");

let stopBtn = document.getElementById("stop");

let displayTime = document.getElementById("displayTime");

let hour = 0;

let minute = 0;

let second = 0;

let time = null;

const watch = () => {

    second++;
    if (second == 60) {
        second = 0;
        minute++;
        if (minute == 60) {
            minute = 0;
            hour++;
            if (hour == 60) {
                hour = 0;
            }
        }
    }

    let h = hour;
    let m = minute;
    let s = second;

    if (second < 10) {
        s = `0${second}`;
    }

    if (minute < 10) {
        m = `0${minute}`;
    }

    if (hour < 10) {
        h = `0${hour}`;
    }

    displayTime.innerText = `${h} : ${m} : ${s}`;
}

const startTimer = () => {
    startBtn.style.display = "none";
    stopBtn.style.display = "inline";
    time = setInterval(watch, 1000);
}

const stopTimer = () => {
    startBtn.style.display = "inline";
    stopBtn.style.display = "none";
    clearInterval(time);
}

const resetTimer = () => {

    startBtn.style.display = "inline";
    stopBtn.style.display = "none";

    hour= 0;
    minute= 0
    second = 0

    displayTime.innerText = `00 : 00 : 00`;

    clearInterval(time);
}