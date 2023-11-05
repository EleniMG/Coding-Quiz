var startButton = document.querySelector("#start");
var timerElement = document.querySelector("#time");
var endScreen = document.querySelector("#end-screen");

startButton.addEventListener("click", startQuiz);

var secondsLeft = 120;

function startQuiz() {
  // Timer will need to start
  startTimer();

  // Questions will need to appear on the page
  startQuestions();
}

function startTimer() {
  var timerInterval = setInterval(function () {
    secondsLeft--;
    timerElement.textContent = secondsLeft;

    if (secondsLeft <= 0) {
      clearInterval(timerInterval);
      gameOver();
    }
  }, 1000);
}

function gameOver() {
  questionSection.setAttribute("class", "hide");
  feedbackSection.setAttribute("class", "hide");
  endScreen.setAttribute("class", "none");
}

var allPlayerDetails = [];
var initialsEntered = document.querySelector("#initials");
var initialsSubmitButton = document
  .querySelector("#submit")
  .addEventListener("click", function (event) {
    event.preventDefault();
    var playerDetails = {
      initials: initialsEntered.value.trim(),
      score: secondsLeft,
    };

    allPlayerDetails.push(playerDetails);
    localStorage.setItem("allPlayerDetails", JSON.stringify(allPlayerDetails));
  });
