const progressBar = document.getElementById("progress-bar");
const TotalTimeInput = document.getElementById("time-value");
const TimeLeft = document.getElementById("current-time");
const startBtn = document.getElementById("start");
const pauseBtn = document.getElementById("pause");
const resetBtn = document.getElementById("reset");

TimeLeft.textContent = "0";
progressBar.value = "0";

let TotalTime;
let currentTime = 0;
let intervalId;

//Function used the initialize the timer values
function initTimer() {
  TotalTime = parseFloat(TotalTimeInput.value) * 60;
  progressBar.setAttribute("max", TotalTime);
  TimeLeft.textContent = TotalTime - currentTime;
}

//Function used to update ui
function updateUi() {
  progressBar.value = currentTime;
  TimeLeft.textContent = TotalTime - currentTime;
}

//function used to stop timer
function breakTimer() {
  clearInterval(intervalId);
}

//function used to make a fresh timer
function resetTimer() {
  clearInterval(intervalId);
  TotalTimeInput.value = "0";
  progressBar.value = "0";
  TimeLeft.textContent = "0";
}

startBtn.addEventListener("click", () => {
  //initialize the totalTime and progress bar max
  initTimer();
  intervalId = setInterval(() => {
    //increase current time at every second
    currentTime++;
    //update time text value and progress bar every second
    updateUi();
    //check if the current time equal to total time
    if (currentTime == TotalTime) {
      //stop the timer
      breakTimer();
    }
  }, 1000);
});

pauseBtn.addEventListener("click", () => {
  clearInterval(intervalId);
});

resetBtn.addEventListener("click", () => {
  resetTimer();
});
