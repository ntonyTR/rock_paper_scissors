let playerChoice;
let compChoice;
let roundResult;
let resultMessage;
let maxRounds = 3;
let userScore = maxRounds;
let compScore = maxRounds;
const chanceIndicator = `💗`;
const compChanceIndicator = `👽`;
let compLives = Array(compScore).fill(compChanceIndicator).join(" ");
let userLives = Array(userScore).fill(chanceIndicator).join(" ");
const buttons = document.querySelectorAll("button");
const rockBtn = document.getElementById("rock");
const paperBtn = document.getElementById("paper");
const scissorsBtn = document.getElementById("scissors");
const restartButton = document.getElementById("restartButton");
const ggPopup = document.getElementById("ggPopup");
const resultIndicator = document.getElementById("result");
const compRock = document.getElementById("compRock");
const compPaper = document.getElementById("compPaper");
const compScissors = document.getElementById("compScissors");
const roundResultIndicator = document.getElementById("roundResult");

rockBtn.addEventListener("click", () => play("Rock"));
paperBtn.addEventListener("click", () => play("Paper"));
scissorsBtn.addEventListener("click", () => play("Scissors"));
restartButton.addEventListener("click", restartGame);

updateScore();

function play(player) {
  if (isGameOver()) {
    showGameOver();
    showDiv(ggPopup);
    return;
  }

  hideCompElection(compRock);
  hideCompElection(compPaper);
  hideCompElection(compScissors);

  playerChoice = player;
  getCompChoice();
  makeComparison(player, compChoice);
  showElections();
  updateScore();

  if (isGameOver()) {
    showGameOver();
    showDiv(ggPopup);
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
    compLives = Array(compScore).fill(compChanceIndicator).join(" ");
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
    resultIndicator.textContent = `YOU FAILED!`;
  } else if (compScore == 0) {
    resultIndicator.textContent = `VICTORY!`;
  }
}

function showDiv(div) {
  div.style.visibility = "visible";
}

function hideDiv(div) {
  div.style.visibility = "hidden";
}

function restartGame() {
  roundResult = ``;
  userScore = maxRounds;
  compScore = maxRounds;
  resultIndicator.textContent = ``;
  compLives = Array(compScore).fill(compChanceIndicator).join(" ");
  userLives = Array(userScore).fill(chanceIndicator).join(" ");
  updateScore();
  hideDiv(ggPopup);
  hideCompElection(compRock);
  hideCompElection(compPaper);
  hideCompElection(compScissors);
}

function showElections() {
  switch (compChoice) {
    case "Rock":
      showCompElection(compRock);
      break;

    case "Paper":
      showCompElection(compPaper);
      break;

    case "Scissors":
      showCompElection(compScissors);
      break;
  }

  roundResultIndicator.textContent = roundResult;
}

function showCompElection(compBtn) {
  compBtn.classList.add(`compElection`);
}

function hideCompElection(compBtn) {
  compBtn.classList.remove(`compElection`);
}
