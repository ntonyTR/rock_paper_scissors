let playerChoice;
let compChoice;
let roundResult;
let resultMessage;
let userScore = 0;
let compScore = 0;
let maxRounds = 3;
const buttons = document.querySelectorAll("button");
const rockBtn = document.getElementById("rock");
const paperBtn = document.getElementById("paper");
const scissorsBtn = document.getElementById("scissors");
const restartButton = document.getElementById("restartButton");
const userIndicator = document.getElementById("userChoice");
const compIndicator = document.getElementById("compChoice");
const resultIndicator = document.getElementById("result");

rockBtn.addEventListener("click", () => play("Rock"));
paperBtn.addEventListener("click", () => play("Paper"));
scissorsBtn.addEventListener("click", () => play("Scissors"));
restartButton.addEventListener("click", restartGame);

function play(player) {
  if (isGameOver()) {
    showGameOver();
    showRestartButton();
    return;
  }

  playerChoice = player;
  getCompChoice();
  makeComparison(player, compChoice);
  showElections();
  updateScore();

  if (isGameOver()) {
    showGameOver();
    showRestartButton();
  }
}

function getCompChoice() {
  const randomNum = Math.floor(Math.random() * 3);
  compChoice =
    randomNum === 0 ? "Rock" : randomNum === 1 ? "Paper" : "Scissors";
  return compChoice;
}

function makeComparison(player, computer) {
  switch (true) {
    case player == computer:
      return (roundResult = "TIE");

    case (player === "Rock" && computer == "Scissors") ||
      (player === "Paper" && computer == "Rock") ||
      (player === "Scissors" && computer == "Paper"):
      return (roundResult = "WIN");

    case (player === "Rock" && computer == "Paper") ||
      (player === "Paper" && computer == "Scissors") ||
      (player === "Scissors" && computer == "Rock"):
      return (roundResult = "LOSE");

    default:
      return (roundResult = "INVALID");
  }
}

function updateScore() {
  if (roundResult == "WIN") userScore++;
  else if (roundResult == "LOSE") compScore++;
  document.querySelector("#userRecord").textContent = userScore;
  document.querySelector("#compRecord").textContent = compScore;
}

// make GAME OVER appear only when we reach the final result, without having to press the button again
function isGameOver() {
  return userScore == maxRounds || compScore == maxRounds;
}

function showGameOver() {
  if (userScore == 3) {
    resultIndicator.innerHTML = `<p>YOU WIN</p>`;
  } else if (compScore == 3) {
    resultIndicator.innerHTML = `<p>YOU LOSE</p>`;
  }
}

// make a restart button
function showRestartButton() {
  restartButton.classList.remove("hidden");
  restartButton.classList.add("active");
}

function hideRestartButton() {
  restartButton.classList.remove("active");
  restartButton.classList.add("hidden");
}

function restartGame() {
  roundResult = "";
  userScore = 0;
  compScore = 0;
  userIndicator.innerText = ``;
  compIndicator.innerText = ``;
  resultIndicator.innerHTML = ``;
  updateScore();
  hideRestartButton();
}

// show userChoice and compChoice separated by 'you win/lose'
function showElections() {
  switch (playerChoice) {
    case "Rock":
      userIndicator.innerText = `💎`;
      break;

    case "Paper":
      userIndicator.textContent = `📰`;
      break;

    case "Scissors":
      userIndicator.textContent = `✌`;
      break;
  }

  switch (compChoice) {
    case "Rock":
      compIndicator.innerText = `💎`;
      break;

    case "Paper":
      compIndicator.textContent = `📰`;
      break;

    case "Scissors":
      compIndicator.textContent = `✌`;
      break;
  }

  resultIndicator.textContent = roundResult;
}
