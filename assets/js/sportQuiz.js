let quizData = [
    {
        question: 'Which country hosted the 2022 FIFA World Cup?',
        answers: ['Qatar', 'Jordan', 'France', 'Sweden'],
        correctAnswer: 'Qatar'
    },
    {
        question: 'What team won the 2016 MLS Cup?',
        answers: ['Colorado Rapids', 'Toronto FC', 'Seattle Sounders', 'Montreal Impact'],
        correctAnswer: 'Seattle Sounders'
    },
    {
        question: 'Which NBA player won Most Valuable Player for the 1999 - 2000 season?',
        answers: ['Kobe Bryant', 'Shaquille O\'neil', 'Allen Iverson', 'Michael Jordan'],
        correctAnswer: 'Shaquille O\'neil'
    },
    {
        question: 'In what sport does Fanny Chmelar compete for Germany?',
        answers: ['Swimming', 'Showjumping', 'Gymnastics', 'Skiing'],
        correctAnswer: 'Skiing'
    },
    {
        question: 'What team did England beat in the semi-final stage of the 1966 World Cup?',
        answers: ['Portugal', 'West Germany', 'Soviet Union', 'Brazil'],
        correctAnswer: 'Portugal'
    },
    {
        question: 'How many Premier League trophies did Sir Alex Ferguson win during his time at Manchester United?',
        answers: ['11', '19', '20', '13'],
        correctAnswer: '13'
    },
    {
        question: 'The Los Angeles Dodgers were originally from which US City?',
        answers: ['Las Vegas', 'San Diego', 'Brooklyn', 'Austin'],
        correctAnswer: 'Brooklyn'
    },
    {
        question: 'Deedpdale is the home stadium for whhich football team?',
        answers: ['Preston North End', 'Manchester United', 'Port Vale', 'Tranmere Rovers'],
        correctAnswer: 'Preston North End'
    },
    {
        question: 'Which year did Jenson Button win his first Formula One World Drivers\' Championship?',
        answers: ['2007', '2008', '2009', '2010'],
        correctAnswer: '2009'
    },
    {
        question: 'Who won the 21-22 Premier League?',
        answers: ['Liverpool', 'Manchester City', 'Manchester United', 'Arsenal FC'],
        correctAnswer: 'Manchester City'
    },
]

let currentQuestion = 0; // Variable to keep track of current question index
const playAgainButton = document.getElementById("play-again-button");
playAgainButton.addEventListener("click", resetQuiz);
let results = document.getElementById('result-message');

// creates a random congratulation message
const wellDone = () => {
    let responses = ['Correct', 'Wow! Well done - that one was hard!', 'Brilliant stuff', 'Was that a guess? Way to go!', 'Congrats', 'I will give you a point for that', 'Unbelievable!', 'You rock'];
    let randInt = Math.floor(Math.random() * responses.length)
    return responses[randInt]
}

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
        results.textContent = wellDone();
        incrementScore();
    } else {
        results.textContent = `Incorrect. The correct answer is: ${currentQuizData.correctAnswer}`;
        event.target.classList.add("incorrect-answer")
    }

    // Move to the next question or end the quiz if all questions are answered
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

function incrementScore() {
    let score = parseInt(document.getElementById('score-value').innerText);
    document.getElementById('score-value').innerText = ++score;
}


function displayResults(){
    let results = document.getElementById('result-message');
    let scoreElement = document.getElementById('score-value');

    let score = parseInt(scoreElement.innerText);
    let percentage = Math.floor(100*(score / quizData.length));
    console.log(results)
    results.innerText = "Quiz completed! Your score: " + percentage + "%";
}

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