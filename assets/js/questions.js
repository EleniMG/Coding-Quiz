var startscreen = document.querySelector(".start");
var questionSection = document.querySelector("#questions");
var questionTitle = document.querySelector("#question-title");
var choices = document.querySelector("#choices");
var answerOptions = document.querySelector(".answer-option");
var feedbackSection = document.querySelector(".feedback");

// answer1.setAttribute("style", "class:answer-option; id:answer1; background-color: lightcoral; border:solid; border-radius: 7px; margin-top: 10px; padding: 10px");
// answer2.setAttribute("style", "class:answer-option; id:answer2; background-color: lightcoral; border:solid; border-radius: 7px; margin-top: 10px; padding: 10px");
// answer3.setAttribute("style", "class:answer-option; id:answer3; background-color: lightcoral; border:solid; border-radius: 7px; margin-top: 10px; padding: 10px");
// answer4.setAttribute("style", "class:answer-option; id:answer4; background-color: lightcoral; border:solid; border-radius: 7px; margin-top: 10px; padding: 10px");

// Creating array of questions for quiz
var questions = [
  {
    id: 0,
    question: "What does 'API' stand for?",
    answers: [
      {
        value: "Appropriate Programme Interface",
        correct: false,
      },
      {
        value: "Application Programme Integration",
        correct: false,
      },
      {
        value: "Application Programming Interface",
        correct: true,
      },
      {
        value: "A Party Igloo",
        correct: false,
      },
    ],
  },
  {
    id: 1,
    question: "What is a Web API?",
    answers: [
      {
        value:
          "An application programming interface built into the web browser",
        correct: true,
      },
      {
        value: "Insurance",
        correct: false,
      },
      {
        value: "Another name for a web browser",
        correct: false,
      },
      {
        value: "Club Penguin",
        correct: false,
      },
    ],
  },
  {
    id: 2,
    question: "What does 'DOM' stand for?",
    answers: [
      {
        value: "Document Organisation Model",
        correct: false,
      },
      {
        value: "Document Object Management",
        correct: false,
      },
      {
        value: "Document Operations Module",
        correct: false,
      },
      {
        value: "Document Object Model",
        correct: true,
      },
    ],
  },
  {
    id: 3,
    question: "What does 'CDN' stand for?",
    answers: [
      {
        value: "Content Development Network",
        correct: false,
      },
      {
        value: "Content Distribution Network",
        correct: false,
      },
      {
        value: "Content Delivery Network",
        correct: true,
      },
      {
        value: "Call Dominos Now",
        correct: false,
      },
    ],
  },
  {
    id: 4,
    question: "What are CDNs used for?",
    answers: [
      {
        value: "Delivering surprise code",
        correct: false,
      },
      {
        value: "Delivering frameworks and libraries like Bootstrap and jQuery",
        correct: true,
      },
      {
        value: "Delivering frameworks and libraries like Shoebuckle and kQuery",
        correct: false,
      },
      {
        value: "Delivering pizza",
        correct: false,
      },
    ],
  },
  {
    id: 5,
    question: "Which of the following is not a HTML semantic element?",
    answers: [
      {
        value: "form",
        correct: false,
      },
      {
        value: "span",
        correct: true,
      },
      {
        value: "table",
        correct: false,
      },
      {
        value: "section",
        correct: false,
      },
    ],
  },
  {
    id: 6,
    question: "Which of the following is the assignment operator?",
    answers: [
      {
        value: "%",
        correct: false,
      },
      {
        value: "==",
        correct: false,
      },
      {
        value: "=",
        correct: true,
      },
      {
        value: "++",
        correct: false,
      },
    ],
  },
  {
    id: 7,
    question: "Which of the following is not a data type?",
    answers: [
      {
        value: "string",
        correct: false,
      },
      {
        value: "symbol",
        correct: false,
      },
      {
        value: "undefined",
        correct: false,
      },
      {
        value: "form",
        correct: true,
      },
    ],
  },
  {
    id: 8,
    question:
      "Which of the following will move items to the start of the x-axis?",
    answers: [
      {
        value: "justify-content: flex-start",
        correct: true,
      },
      {
        value: "align-items: baseline",
        correct: false,
      },
      {
        value: "justify-content: flex-end",
        correct: false,
      },
      {
        value: "align-items: flex-start",
        correct: false,
      },
    ],
  },
  {
    id: 9,
    question:
      "Which of the following will add an element to the start of an array?",
    answers: [
      {
        value: "push",
        correct: false,
      },
      {
        value: "unshift",
        correct: true,
      },
      {
        value: "shift",
        correct: false,
      },
      {
        value: "pull",
        correct: false,
      },
    ],
  },
];

questionSection.setAttribute("data-question-id", questions[0].id);
var questionId = Number(questionSection.dataset.questionId);

function startQuestions() {
  // Once quiz starts, start screen needs to be removed
  startscreen.setAttribute("class", "hide");

  // Create container for question and answer options
  questionSection.setAttribute("class", "none");

  displayQandAs(questionId);
}

// Insert questions and answer options into container
// Screen will need to display the next question
// For loop/for each to assign the questions and answer options to their places, set their class to hide

function getQuestionOptions(id) {
  return questions.find((question) => question.id === id);
}

function displayQandAs(questionId) {
  var questionOptions = getQuestionOptions(questionId);

  questionTitle.textContent = questionOptions.question;
  questionOptions.answers.forEach((answer) => {
    var button = choices.appendChild(document.createElement("button"));
    button.textContent = answer.value;
    button.setAttribute("data-answer", answer.correct);
    button.classList.add("answer-option");
    button.addEventListener("click", userSelection);
  });
}

// Set an event listener to go through array and show one question at a time
// Add an event listener for when the user makes a selection
// Functions to deal with correct or incorrect answer consequences i.e. time reduction or not - maybe an animation?

function userSelection(event) {
  if (choices.event.correct === true) {
    console.log("this is true");
  }
}

// When questions run out, will need a congratulations screen, then allow user to save their name and score on highscores page
