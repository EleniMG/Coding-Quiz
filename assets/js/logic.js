var startButton = document.querySelector('#start');
var timerElement = document.querySelector('#time');

startButton.addEventListener('click', startQuiz)

var secondsLeft = 60;

function startQuiz(){
    // Timer will need to start
        startTimer();

    // Questions will need to appear on the page
        startQuestions();

}

function startTimer() {
    var timerInterval = setInterval(function() {
        secondsLeft--;
        timerElement.textContent = secondsLeft;

        if(secondsLeft === 0){
            clearInterval(timerInterval);
            timeRanOut();
        }
    }, 1000);
}


function timeRanOut(){
    alert("Uh oh! Time's up! Better luck next time 😊")
}