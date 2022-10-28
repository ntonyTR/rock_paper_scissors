let playerChoice;
let compChoice;
let roundResult;
let resultMessage;
let maxRounds = 3;
let userScore = maxRounds;
let compScore = maxRounds;
const chanceIndicator = `🤍`;
let compLives = Array(compScore).fill(chanceIndicator).join(" ");
let userLives = Array(userScore).fill(chanceIndicator).join(" ");
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

updateScore();
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
  if (roundResult == "WIN") {
    compScore--;
    compLives = Array(compScore).fill(chanceIndicator).join(" ");
  } else if (roundResult == "LOSE") {
    userScore--;
    userLives = Array(userScore).fill(chanceIndicator).join(" ");
  }
  document.querySelector("#userRecord").textContent = userLives;
  document.querySelector("#compRecord").textContent = compLives;
}

function isGameOver() {
  return userScore == 0 || compScore == 0;
}

function showGameOver() {
  if (userScore == 0) {
    resultIndicator.innerHTML = `<p>YOU FAILED!</p>`;
  } else if (compScore == 0) {
    resultIndicator.innerHTML = `<p>VICTORY!</p>`;
  }
}

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
  userScore = maxRounds;
  compScore = maxRounds;
  userIndicator.innerText = ``;
  compIndicator.innerText = ``;
  resultIndicator.innerHTML = ``;
  compLives = Array(compScore).fill(chanceIndicator).join(" ");
  userLives = Array(userScore).fill(chanceIndicator).join(" ");
  updateScore();
  hideRestartButton();
}

function showElections() {
  switch (playerChoice) {
    case "Rock":
      userIndicator.innerText = `✊`;
      break;

    case "Paper":
      userIndicator.textContent = `✋`;
      break;

    case "Scissors":
      userIndicator.textContent = `✌`;
      break;
  }

  switch (compChoice) {
    case "Rock":
      compIndicator.innerText = `✊`;
      break;

    case "Paper":
      compIndicator.textContent = `✋`;
      break;

    case "Scissors":
      compIndicator.textContent = `✌`;
      break;
  }

  resultIndicator.textContent = roundResult;
}
