var startscreen = document.querySelector(".start")
var questionSection = document.querySelector("questions")

// Creating array of questions for quiz
var questions = [
    {
        question: "What does 'API' stand for?",
        answer1: "Appropriate Programme Interface",
        answer2: "Application Programme Integration",
        answer3: "Application Programming Interface",  // correct
        answer4: "A Party Igloo"
    },
    {
        question: "What is a Web API?",
        answer1: "An application programming interface built into the web browser", // correct
        answer2: "Insurance",
        answer3: "Another name for a web browser", 
        answer4: "Club Penguin"
    },
    {
        question: "What does 'DOM' stand for?",
        answer1: "Document Organisation Model",
        answer2: "Document Object Management",
        answer3: "Document Operations Module", 
        answer4: "Document Object Model" // correct
    },
    {
        question: "What does 'CDN' stand for?",
        answer1: "Content Development Network",
        answer2: "Content Distribution Network",
        answer3: "Content Delivery Network", // correct
        answer4: "Call Dominos Now"
    },
    {
        question: "What are CDNs used for?",
        answer1: "Delivering surprise code",
        answer2: "Delivering frameworks and libraries like Bootstrap and jQuery", // correct
        answer3: "Delivering frameworks and libraries like Shoebuckle and kQuery", 
        answer4: "Delivering pizza"
    },
    {
        question: "Which of the following is not a HTML semantic element?",
        answer1: "form",
        answer2: "span", // correct
        answer3: "table", 
        answer4: "section"
    },
    {
        question: "Which of the following is the assignment operator?",
        answer1: "%",
        answer2: "==",
        answer3: "=", // correct
        answer4: "++"
    },
    {
        question: "Which of the following is not a data type?",
        answer1: "string",
        answer2: "symbol",
        answer3: "undefined", 
        answer4: "form" // correct
    },
    {
        question: "Which of the following will move items to the start of the x-axis?",
        answer1: "justify-content: flex-start", // correct
        answer2: "align-items: baseline",
        answer3: "justify-content: flex-end", 
        answer4: "align-items: flex-start"
    },
    {
        question: "Which of the following will add an element to the start of an array?",
        answer1: "push",
        answer2: "unshift", // correct
        answer3: "shift", 
        answer4: "pull"
    }]

function startQuestions(){
    // Once quiz starts, start screen needs to be removed
    startscreen.setAttribute("class", "hide")

    // Create container for question and answer options
    questionSection.setAttribute("class", "none");

    // Insert questions and answer options into container
    // Set data attributes for the correct and incorrect answers
    // Add an event listener for when the user makes a selection
    // Functions to deal with correct or incorrect answer consequences i.e. time reduction or not - maybe an animation?
    // Screen will need to display the next question
}

// When questions run out, will need a congratulations screen, then allow user to save their name and score on highscores page