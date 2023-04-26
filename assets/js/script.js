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
playAgainButton.addEventListener("click", resetQuiz);


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

// Function to handle click event on answer buttons
function answerClick(event) {
    let selectedAnswer = event.target.textContent;
    let currentQuizData = quizData[currentQuestion];

    if (selectedAnswer === currentQuizData.correctAnswer) {
        event.target.classList.add("correct-answer");

        incrementScore();
    } else {
        alert(`Incorrect. The correct answer is: ${currentQuizData.correctAnswer}`);
        event.target.classList.add("incorrect-answer")
    }

    setTimeout(function() {
        currentQuestion++;
        if (currentQuestion < quizData.length) {
            displayQuestion();
        } else {
            alert("Quiz completed!");
            displayResults();
        }
        }, 2000);
}

//Function to increment score by one when correct answer is given
function incrementScore() {
    let score = parseInt(document.getElementById('score-value').innerText);
    document.getElementById('score-value').innerText = ++score;
}

//Function to show user result when quiz finishes
function displayResults(){
    let results = document.getElementById('result-message');
    let scoreElement = document.getElementById('score-value');

    let score = parseInt(scoreElement.innerText);
    let percentage = Math.floor(100*(score / quizData.length));
    console.log(results)
    results.innerText = "Quiz completed! Your score: " + percentage + "%";
}

//Function to reset quiz when Play Again button is pressed
function resetQuiz(){
    currentQuestion = 0;
    let score = parseInt(document.getElementById('score-value').innerText);
    document.getElementById('score-value').innerText = score - score;

    let results = document.getElementById('result-message');
    results.innerText = " "; //Clear the result section when replaying


    displayQuestion();
}

// Start the quiz by displaying the first question
displayQuestion();