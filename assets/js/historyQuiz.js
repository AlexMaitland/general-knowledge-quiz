let quizData = [
    {
        question: 'When did the French Revolution begin?',
        answers: ['1789', '1756', '1799', '1823'],
        correctAnswer: '1789'
    },
    {
        question: 'Which one of these tanks was designed and operated by the United Kingdom?',
        answers: ['M4 Sherman', 'Tiger H1', 'T-34', 'Tog II'],
        correctAnswer: 'Tog II'
    },
    {
        question: 'In which year did the First World War begin',
        answers: ['1914', '1923', '1939', '1945'],
        correctAnswer: '1914'
    },
    {
        question: 'How many sonatas did Ludwig van Beethoven write?',
        answers: ['50', '31', '32', '21'],
        correctAnswer: '32'
    },
    {
        question: 'In what dialogue did Socrates defend himself to the court of Athens?',
        answers: ['The Laws', 'The Republic', 'The Apology', 'The Euthyphro'],
        correctAnswer: 'The Apology'
    },
    {
        question: 'Who was the leader of the Communist Party of Yugoslavia?',
        answers: ['Josip Broz Tito', 'Karadjordje Petrovic', 'Milos Obilic', 'Aleksander Petrovic'],
        correctAnswer: 'Josip Broz Tito'
    },
    {
        question: 'Which Las Vegas casino was originally constructed and operated by mobster Bugsy Siegel?',
        answers: ['The MGM Grand', 'The Sands', 'The Sahara', 'The Flamingo'],
        correctAnswer: 'The Flamingo'
    },
    {
        question: 'In addition to his career as an astrologer and "prophet"; Nostradamus published a 1555 treatise that included a section on what?',
        answers: ['Teaching parrots to talk', 'Making jams & jellies', 'Cheating at card games', 'Digging graves'],
        correctAnswer: 'Making jams & jellies'
    },
    {
        question: 'Which countries participated in the Lobster War?',
        answers: ['France & Brazil', 'Canada & Norway', 'Australia & New Zealand', 'England & Ireland'],
        correctAnswer: 'France & Brazil'
    },
    {
        question: 'Who was the first American in space?',
        answers: ['Neil Armstrong', 'Jim Lovell', 'Alan Shephard', 'John Glenn'],
        correctAnswer: 'Alan Shephard'
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