const progressBar = document.getElementById("progress-bar");
const TotalTimeInput = document.getElementById("time-value");
const currentTotalTime = document.getElementById("current-time");
const startBtn = document.getElementById("start");
const pauseBtn = document.getElementById("pause");
const resetBtn = document.getElementById("reset");

currentTotalTime.textContent = "0";
progressBar.value = "0";

let TotalTime;
let currentTime = 0;
let intervalId;

function initTimer() {
  TotalTime = parseInt(TotalTimeInput.value) * 60;
  progressBar.setAttribute("max", TotalTime);
  currentTotalTime.textContent = TotalTime - currentTime;
}

function updateUi() {
  progressBar.value = currentTime;
  currentTotalTime.textContent = TotalTime - currentTime;
}

startBtn.addEventListener("click", () => {
  initTimer();
  intervalId = setInterval(() => {
    currentTime++;
    updateUi();
    if (currentTime == TotalTime) {
      clearInterval(intervalId);
      TotalTime = 0;
    }
  }, 1000);
});

pauseBtn.addEventListener("click", () => {
  clearInterval(intervalId);
});
