let playerChoice;
let compChoice;
let roundResult;
let resultMessage;
let userScore = 0;
let compScore = 0;
let maxRounds = 3;
const buttons = document.querySelectorAll("button");
// const message = document.getElementById("resultMessage");
const rockBtn = document.getElementById("rock");
const paperBtn = document.getElementById("paper");
const scissorsBtn = document.getElementById("scissors");
// const resultContainer = document.getElementById("resultContainer");
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
  showResult(player);
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
      return (roundResult = "tie");

    case (player === "Rock" && computer == "Scissors") ||
      (player === "Paper" && computer == "Rock") ||
      (player === "Scissors" && computer == "Paper"):
      return (roundResult = "win");

    case (player === "Rock" && computer == "Paper") ||
      (player === "Paper" && computer == "Scissors") ||
      (player === "Scissors" && computer == "Rock"):
      return (roundResult = "lose");

    default:
      return (roundResult = "invalid");
  }
}

function showResult(player) {
  // resultMessage =
  //   roundResult === "tie"
  //     ? `<p>You chose ${player}<br>Computer chose ${compChoice}<br>Is a tie!</p>`
  //     : roundResult === "win"
  //     ? `<p>You chose ${player}<br>Computer chose ${compChoice}<br>You win!</p>`
  //     : roundResult === "lose"
  //     ? `<p>You chose ${player}<br>Computer chose ${compChoice}<br>You lose!</p>`
  //     : `Invalid option`;
  // message.innerHTML = resultMessage;
}

function updateScore() {
  if (roundResult == "win") userScore++;
  else if (roundResult == "lose") compScore++;
  document.querySelector("#userRecord").textContent = userScore;
  document.querySelector("#compRecord").textContent = compScore;
}

// make GAME OVER appear only when we reach the final result, without having to press the button again
function isGameOver() {
  return userScore == maxRounds || compScore == maxRounds;
}

function showGameOver() {
  if (userScore == 3) {
    resultIndicator.innerHTML = `<p>GAME OVER<br>YOU WIN</p>`;
  } else if (compScore == 3) {
    resultIndicator.innerHTML = `<p>GAME OVER<br>YOU LOSE</p>`;
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
  // message.innerHTML = ``;
  userIndicator.innerText = ``;
  compIndicator.innerText = ``;
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
