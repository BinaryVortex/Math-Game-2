const question = document.getElementById("question");
const answerInput = document.getElementById("answer");
const result = document.getElementById("result");
const newQuestionBtn = document.getElementById("start-btn");
const submitBtn = document.getElementById("submit-btn");
const startGameBtn = document.getElementById("start-game-btn");
const gameContainer = document.querySelector('.game-container');
const startScreen = document.getElementById("start-screen");

let correctAnswer;

// Generate a random question
function generateQuestion() {
  const num1 = Math.floor(Math.random() * 10) + 1;
  const num2 = Math.floor(Math.random() * 10) + 1;
  const operator = ["+", "-", "*"][Math.floor(Math.random() * 3)];
  correctAnswer = eval(`${num1} ${operator} ${num2}`);
  
  question.innerHTML = `${num1} ${operator} ${num2} = ?`;
  result.innerHTML = ""; // Clear previous result
  answerInput.value = ""; // Clear input
}

// Check the user's answer
function checkAnswer() {
  const userAnswer = Number(answerInput.value);
  if (userAnswer === correctAnswer) {
    result.textContent = "Correct! 🎉";
    result.style.color = "#28a745"; // Green for correct
  } else {
    result.textContent = "Incorrect. 😞";
    result.style.color = "#dc3545"; // Red for incorrect
  }
}

// Event listeners for starting the game
startGameBtn.addEventListener("click", () => {
  startScreen.style.display = "none"; // Hide start screen
  gameContainer.classList.add("show"); // Show the game container
  generateQuestion();
});

// Event listener for submitting the answer
submitBtn.addEventListener("click", checkAnswer);

// Event listener for generating a new question
newQuestionBtn.addEventListener("click", generateQuestion);
