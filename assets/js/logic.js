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

    if (
      secondsLeft <= 0 ||
      questionSection.dataset.questionId >= questions.length
    ) {
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

// Need to retrieve the array of player details from storage so that it is not overwritten with an empty array
var playerDetailsFromStorage = localStorage.getItem("allPlayerDetails");
var allPlayerDetails = JSON.parse(playerDetailsFromStorage) || [];
var initialsEntered = document.querySelector("#initials");
var initialsSubmitButton = document
  .querySelector("#submit")
  .addEventListener("click", function (event) {
    event.preventDefault();
    var playerDetails = {
      initials: initialsEntered.value.trim(),
      score: secondsLeft,
    };

    if (playerDetails.initials === "") {
      alert("Please enter your intitials");
    } else {
      allPlayerDetails.push(playerDetails);
      localStorage.setItem(
        "allPlayerDetails",
        JSON.stringify(allPlayerDetails)
      );
      feedbackSection.setAttribute("class", "feedback");
      feedbackSection.textContent =
        "Submitted! Don't forget to check out your place on the leaderboard";
    }
  });
