let startBtn = document.getElementById("start");
let stopBtn = document.getElementById("stop");
let displayTime = document.getElementById("displayTime");

let userTime;
let hour = 0;
let minute = 0;
let second = 60;
let time = null;

const watch = () => {
    second--;
    if (second < 0) {
        second = 59;
        minute--;
        if (minute < 0) {
            clearInterval(time);
            displayTime.innerText = `00 : 00 : 00`;
            startBtn.style.display = "none";
            return;
        }
    }

    let h = hour < 10 ? `0${hour}` : hour;
    let m = minute < 10 ? `0${minute}` : minute;
    let s = second < 10 ? `0${second}` : second;

    displayTime.innerText = `${h} : ${m} : ${s}`;
};

const setTimer = () => {
    userTime = Math.round(Number(prompt("Enter Time in minutes:")));

    if (isNaN(userTime) || userTime < 1) {
        alert("Please enter a valid time (minimum 1 minute).");
        return;
    }

    if (userTime == 1) {
        minute = 0;
        displayTime.innerText = `${hour} : ${minute} : 00`;
    } else {
        minute = userTime;
    }


    second = 60;

    let h = hour < 10 ? `0${hour}` : hour;
    let m = minute < 10 ? `0${minute}` : minute;

    displayTime.innerText = `${h} : ${m} : 00`;
};

const startTimer = () => {
    startBtn.style.display = "none";
    stopBtn.style.display = "inline";
    time = setInterval(watch, 1000);
};

const stopTimer = () => {
    startBtn.style.display = "inline";
    stopBtn.style.display = "none";
    clearInterval(time);
};
