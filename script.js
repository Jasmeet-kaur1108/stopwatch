let startTime, updatedTime, difference, tInterval;
let running = false;

const display = document.getElementById('display');
const startBtn = document.getElementById('startBtn');
const stopBtn = document.getElementById('stopBtn');
const resetBtn = document.getElementById('resetBtn');

function startTimer() {
  if (!running) {
    startTime = new Date().getTime() - (difference || 0);
    tInterval = setInterval(updateTime, 10);
    running = true;
  }
}

function stopTimer() {
  if (running) {
    clearInterval(tInterval);
    difference = new Date().getTime() - startTime;
    running = false;
  }
}

function resetTimer() {
  clearInterval(tInterval);
  difference = 0;
  running = false;
  display.textContent = "00:00:00.000";
}

function updateTime() {
  updatedTime = new Date().getTime();
  difference = updatedTime - startTime;

  let hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
  let minutes = Math.floor((difference / (1000 * 60)) % 60);
  let seconds = Math.floor((difference / 1000) % 60);
  let milliseconds = difference % 1000;

  display.textContent =
    `${pad(hours)}:${pad(minutes)}:${pad(seconds)}.${padMilliseconds(milliseconds)}`;
}

function pad(unit) {
  return ("0" + unit).slice(-2);
}

function padMilliseconds(ms) {
  return ("00" + ms).slice(-3);
}

startBtn.addEventListener('click', startTimer);
stopBtn.addEventListener('click', stopTimer);
resetBtn.addEventListener('click', resetTimer);
