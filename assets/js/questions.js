var startscreen = document.querySelector(".start")
var questionSection = document.querySelector("#questions")
var questionTitle = document.querySelector('#question-title')
var choices = document.querySelector('#choices');
var answerOptions = document.querySelector(".answer-option")
// var answer1 = choices.appendChild(document.createElement("button"));
// var answer2 = choices.appendChild(document.createElement("button"));
// var answer3 = choices.appendChild(document.createElement("button"));
// var answer4 = choices.appendChild(document.createElement("button"));



answer1.setAttribute("style", "class:answer-option; id:answer1; background-color: lightcoral; border:solid; border-radius: 7px; margin-top: 10px; padding: 10px");
answer2.setAttribute("style", "class:answer-option; id:answer2; background-color: lightcoral; border:solid; border-radius: 7px; margin-top: 10px; padding: 10px");
answer3.setAttribute("style", "class:answer-option; id:answer3; background-color: lightcoral; border:solid; border-radius: 7px; margin-top: 10px; padding: 10px");
answer4.setAttribute("style", "class:answer-option; id:answer4; background-color: lightcoral; border:solid; border-radius: 7px; margin-top: 10px; padding: 10px");



// Creating array of questions for quiz
var questions = [
    {
        id: 1,
        question: "What does 'API' stand for?",
        answers: [{
            value:  "Appropriate Programme Interface", 
            correct: false
        }, {
            value:  "Application Programme Integration", 
            correct: false
        }, {
            value:  "Application Programming Interface", 
            correct: true
        }, {
            value:  "A Party Igloo", 
            correct: false
        }
        ]
    },
    {
        id: 2,
        question: "What is a Web API?",
        answers: [{
            value:  "An application programming interface built into the web browser", 
            correct: true
        }, {
            value:  "Insurance", 
            correct: false
        }, {
            value:  "Another name for a web browser", 
            correct: false
        }, {
            value:  "Club Penguin", 
            correct: false
        }]
    },
    {
        id: 3,
        question: "What does 'DOM' stand for?",
        answers: [{
            value:  "Document Organisation Model", 
            correct: false
        }, {
            value:  "Document Object Management", 
            correct: false
        }, {
            value:  "Document Operations Module", 
            correct: false
        }, {
            value:  "Document Object Model", 
            correct: true
        }]
    },
    {
        id: 4,
        question: "What does 'CDN' stand for?",
        answers: [{
            value:  "Content Development Network", 
            correct: false
        }, {
            value:  "Content Distribution Network", 
            correct: false
        }, {
            value:  "Content Delivery Network", 
            correct: true
        }, {
            value:  "Call Dominos Now", 
            correct: false
        }]
    },
    {
        id: 5,
        question: "What are CDNs used for?",
        answers: [{
            value:  "Delivering surprise code", 
            correct: false
        }, {
            value:  "Delivering frameworks and libraries like Bootstrap and jQuery", 
            correct: true
        }, {
            value:  "Delivering frameworks and libraries like Shoebuckle and kQuery", 
            correct: false
        }, {
            value:  "Delivering pizza", 
            correct: false
        }]
    },
    {
        id: 6,
        question: "Which of the following is not a HTML semantic element?",
        answers: [{
            value:  "form", 
            correct: false
        }, {
            value:  "span", 
            correct: true
        }, {
            value:  "table", 
            correct: false
        }, {
            value:  "section", 
            correct: false
        }]
    },
    {
        id: 7,
        question: "Which of the following is the assignment operator?",
        answers: [{
            value:  "%", 
            correct: false
        }, {
            value:  "==", 
            correct: false
        }, {
            value:  "=", 
            correct: true
        }, {
            value:  "++", 
            correct: false
        }]
    },
    {
        id: 8,
        question: "Which of the following is not a data type?",
        answers: [{
            value:  "string", 
            correct: false
        }, {
            value:  "symbol", 
            correct: false
        }, {
            value:  "undefined", 
            correct: false
        }, {
            value:  "form", 
            correct: true
        }]
    },
    {
        id: 9,
        question: "Which of the following will move items to the start of the x-axis?",
        answers: [{
            value:  "justify-content: flex-start", 
            correct: true
        }, {
            value:  "align-items: baseline", 
            correct: false
        }, {
            value:  "justify-content: flex-end", 
            correct: false
        }, {
            value:  "align-items: flex-start", 
            correct: false
        }]
    },
    {
        id: 10,
        question: "Which of the following will add an element to the start of an array?",
        answers: [{
            value:  "push", 
            correct: false
        }, {
            value:  "unshift", 
            correct: true
        }, {
            value:  "shift", 
            correct: false
        }, {
            value:  "pull", 
            correct: false
        }]
    }]
    
// questionSection.setAttribute('data-question-id', questions[0].id)
// var questionId = Number(questionSection.dataset.questionId)

// var firstQuestion = (id) => questions.find(question => question.id === id)

// console.log(firstQuestion(questionId))
// questionId++

// console.log(firstQuestion(questionId))



function startQuestions(){
    // Once quiz starts, start screen needs to be removed
    startscreen.setAttribute("class", "hide")

    // Create container for question and answer options
    questionSection.setAttribute("class", "none");

    // Insert questions and answer options into container
    // Screen will need to display the next question
    // For loop/for each to assign the questions and answer options to their places, set their class to hide

}


// questions.forEach(function placeQandA(element){
//     questionTitle.textContent = element.question;
//     answer1.textContent = element.answer1;
//     answer2.textContent = element.answer2;
//     answer3.textContent = element.answer3;
//     answer4.textContent = element.answer4;
// })



    // Set an event listener to go through array and show one question at a time


    
    // Set data attributes for the correct and incorrect answers
    // Add an event listener for when the user makes a selection
    // Functions to deal with correct or incorrect answer consequences i.e. time reduction or not - maybe an animation?
    


// When questions run out, will need a congratulations screen, then allow user to save their name and score on highscores page