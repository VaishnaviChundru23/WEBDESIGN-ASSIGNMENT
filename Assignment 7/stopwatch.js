
const timeLabel = document.getElementById('time');
const startButton = document.getElementById('start');
const stopButton = document.getElementById('stop');
const resetButton = document.getElementById('reset');
const datePicker = document.getElementById('date-picker');

let startTime = 0; 
let intervalId;
let isRunning = false;


function formatTime(seconds) {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;
    return `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
}


function startStopwatch() {
    isRunning = true;
    intervalId = setInterval(updateTime, 1000);
    startButton.disabled = true;
    stopButton.disabled = false;
}


startButton.addEventListener('click', () => {
    if (!isRunning) {
        startStopwatch();
    }
});


stopButton.addEventListener('click', () => {
    if (isRunning) {
        clearInterval(intervalId);
        saveSecondsToLocalStorage(startTime);
        isRunning = false;
        startButton.disabled = false;
        stopButton.disabled = true;
    }
});


resetButton.addEventListener('click', () => {
    clearInterval(intervalId);
    startTime = 0;
    saveSecondsToLocalStorage(0);
    isRunning = false;
    startButton.disabled = false;
    stopButton.disabled = true;
    updateTime();
});


datePicker.addEventListener('change', () => {
    const selectedDate = new Date(datePicker.value);
    const currentDate = new Date();
    const secondsDifference = Math.floor((selectedDate - currentDate) / 1000);
    startTime = secondsDifference;
    updateTime();
});


function updateTime() {
    timeLabel.textContent = formatTime(startTime);
    startTime++;
}

function saveSecondsToLocalStorage(seconds) {
    localStorage.setItem('stopwatch_seconds', seconds);
}

async function getSecondsFromLocalStorage() {
    return parseInt(localStorage.getItem('stopwatch_seconds')) || 0;
}

const today = new Date();
const todayFormatted = today.toISOString().split('T')[0];
datePicker.value = todayFormatted;   


updateTime();


(async () => {
    startTime = await getSecondsFromLocalStorage();
    if (startTime > 0) {
        startStopwatch();
    }
})();
