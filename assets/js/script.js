let quizData = 
    [ {
        question: 'What is the largest animal in the world?',
        answers: ['Blue Whale','African Elephant','Indian Elephant', 'Giant Sloth'],
        correctAnswer: 'Blue Whale'
    }, 
    {
        question: 'What is the Capital of the Isle of Man?',
        answers: ['Castletown',  'Douglas',  'St Helier', 'Peel'],
        correctAnswer: 'Douglas'
    },
    {
        question: 'What is the tallest mountain in the world?',
        answers: ['Mount Kilimanjaro', 'Mount Everest', 'Mount Fuji', 'Ben Nevis'],
        correctAnswer: 'Mount Everest'
    },
    {
        question: 'What is the largest planet in our solar system?',
        answers: ['Mars', 'Venus', 'Saturn', 'Jupiter'],
        correctAnswer: 'Jupiter'
    },
    {
        question: 'What is the square root of 144?',
        answers: ['14', '72', '12', '27'],
        correctAnswer: '12'
    }
    ];

let currentQuestion = 0; // Variable to keep track of current question index

const playAgainButton = document.getElementById("play-again-button");

// Function to display the current question
function displayQuestion() {
    let questionElement = document.getElementById("question");
    let answersElement = document.getElementById("answers");
    let currentQuizData = quizData[currentQuestion];

    questionElement.textContent = currentQuizData.question;
    answersElement.innerHTML = ""; // Clear previous answers

    // Create answer buttons for each answer in the current question
    currentQuizData.answers.forEach(answer => {
        let answerButton = document.createElement("button");
        answerButton.textContent = answer;
        answerButton.classList.add("answer");
        answerButton.addEventListener("click", answerClick);
        answersElement.appendChild(answerButton);
    });
}