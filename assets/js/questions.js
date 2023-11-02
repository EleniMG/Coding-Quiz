var startscreen = document.querySelector(".start")

// Creating array of questions for quiz
var questions = [{}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}]

function startQuestions(){
    // Once quiz starts, start screen needs to be removed
    startscreen.textContent = ""

    // Create container for question and answer options
    // Insert questions and answer options into container
    // Set data attributes for the correct and incorrect answers
    // Add an event listener for when the user makes a selection
    // Functions to deal with correct or incorrect answer consequences i.e. time reduction or not - maybe an animation?
    // Screen will need to display the next question
}

// When questions run out, will need a congratulations screen, then allow user to save their name and score on highscores page