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
const ggPopup = document.getElementById("ggPopup");
const resultIndicator = document.getElementById("result");

rockBtn.addEventListener("click", () => play("Rock"));
paperBtn.addEventListener("click", () => play("Paper"));
scissorsBtn.addEventListener("click", () => play("Scissors"));

const compRock = document.getElementById("compRock");
const compPaper = document.getElementById("compPaper");
const compScissors = document.getElementById("compScissors");

restartButton.addEventListener("click", restartGame);

updateScore();
function play(player) {
  if (isGameOver()) {
    showGameOver();
    showRestartButton();
    return;
  }
  // make it function
  compRock.classList.remove(`compElection`);
  compPaper.classList.remove(`compElection`);
  compScissors.classList.remove(`compElection`);

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
  ggPopup.style.visibility = "visible";
}

function hideRestartButton() {
  ggPopup.style.visibility = "hidden";
}

function restartGame() {
  roundResult = "";
  userScore = maxRounds;
  compScore = maxRounds;
  resultIndicator.innerHTML = ``;
  compLives = Array(compScore).fill(chanceIndicator).join(" ");
  userLives = Array(userScore).fill(chanceIndicator).join(" ");
  updateScore();
  hideRestartButton();
  // make it function
  compRock.classList.remove(`compElection`);
  compPaper.classList.remove(`compElection`);
  compScissors.classList.remove(`compElection`);
}

function showElections() {
  // switch (playerChoice) {
  //   case "Rock":
  //     userIndicator.innerText = `✊`;
  //     break;

  //   case "Paper":
  //     userIndicator.textContent = `✋`;
  //     break;

  //   case "Scissors":
  //     userIndicator.textContent = `✌`;
  //     break;
  // }

  switch (compChoice) {
    case "Rock":
      // compIndicator.innerText = `✊`;
      compRock.classList.add(`compElection`);
      break;

    case "Paper":
      // compIndicator.textContent = `✋`;
      compPaper.classList.add(`compElection`);
      break;

    case "Scissors":
      // compIndicator.textContent = `✌`;
      compScissors.classList.add(`compElection`);
      break;
  }

  resultIndicator.textContent = roundResult;
}
