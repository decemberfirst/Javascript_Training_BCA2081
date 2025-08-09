const hour = document.getElementById('hour');
const minute = document.getElementById('minute');
const second = document.getElementById('second');

const startBtn = document.getElementById('start');
const stopBtn = document.getElementById('stop');

let HOUR = 0;
let MINUTE = 0;
let SECOND = 0;

let intervalId;

startBtn.addEventListener('click', function () {
  if (intervalId) return; // prevent multiple intervals
  intervalId = setInterval(() => {
    SECOND += 1;

    if (SECOND >= 60) {
      MINUTE += 1;
      SECOND = 0;
    }

    if (MINUTE >= 60) {
      HOUR += 1;
      MINUTE = 0;
    }

    startUI();
  }, 1000); // Tick every second
});

stopBtn.addEventListener('click', function () {
  clearInterval(intervalId);
  intervalId = null;
});

function startUI() {
  hour.innerText = `${String(HOUR).padStart(2, '0')}:`;
  minute.innerText = `${String(MINUTE).padStart(2, '0')}:`;
  second.innerText = `${String(SECOND).padStart(2, '0')}`;
}
