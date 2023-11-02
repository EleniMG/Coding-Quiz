var startButton = document.querySelector('#start');
var timerElement = document.querySelector('#time');

startButton.addEventListener('click', function() {setInterval(function() {
    secondsLeft--;
    timerElement.textContent = secondsLeft;

    if(secondsLeft === 0){
        clearInterval(timerInterval);
        gameOver();
    }
}, 1000)})

var secondsLeft = 30;

function startQuiz(){
    // Timer will need to start
        startTimer();

    // Questions will need to appear on the page
}

function startTimer() {
    var timerInterval = setInterval(function() {
        secondsLeft--;
        timerElement.textContent = secondsLeft;

        if(secondsLeft === 0){
            clearInterval(timerInterval);
            gameOver();
        }
    }, 1000);
}


function gameOver(){
    alert("Uh oh! Time's up! Better luck next time 😊")
}