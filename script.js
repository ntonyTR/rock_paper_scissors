let userSelection;
let computerSelection;
let roundResult;
let rounds = 3;
let userScore = rounds;
let computerScore = rounds;
const userLifeSymbol = `💗`;
const computerLifeSymbol = `👽`;
let userLife = Array(userScore).fill(userLifeSymbol).join(" ");
let computerLife = Array(computerScore).fill(computerLifeSymbol).join(" ");
const computerRock = document.getElementById("computer_rock");
const computerPaper = document.getElementById("computer_paper");
const computerScissors = document.getElementById("computer_scissors");
const roundWinner = document.getElementById("round_winner");
const userRock = document.getElementById("user_rock");
const userPaper = document.getElementById("user_paper");
const userScissors = document.getElementById("user_scissors");
const gameOver = document.getElementById("game_over");
const finalResult = document.getElementById("final_result");
const restartBtn = document.getElementById("restart_btn");

userRock.addEventListener("click", () => play("Rock"));
userPaper.addEventListener("click", () => play("Paper"));
userScissors.addEventListener("click", () => play("Scissors"));
restartBtn.addEventListener("click", restartGame);

updateScore();

function play(selection) {
  userSelection = selection;
  hideComputer();
  getComputerSelection();
  makeComparison(selection, computerSelection);
  showElections();
  updateScore();

  if (isGameOver()) {
    return;
  }
}

function getComputerSelection() {
  const random = Math.floor(Math.random() * 3);
  computerSelection =
    random === 0 ? "Rock" : random === 1 ? "Paper" : "Scissors";
  return random;
}

function makeComparison(user, computer) {
  switch (true) {
    case user === computer:
      return (roundResult = "TIE");

    case (user === "Rock" && computer === "Scissors") ||
      (user === "Paper" && computer === "Rock") ||
      (user === "Scissors" && computer === "Paper"):
      return (roundResult = "WIN");

    case (user === "Rock" && computer === "Paper") ||
      (user === "Paper" && computer === "Scissors") ||
      (user === "Scissors" && computer === "Rock"):
      return (roundResult = "LOSE");

    default:
      return (roundResult = "INVALID");
  }
}

function updateScore() {
  if (roundResult === "WIN") {
    computerScore--;
    computerLife = Array(computerScore).fill(computerLifeSymbol).join(" ");
  } else if (roundResult === "LOSE") {
    userScore--;
    userLife = Array(userScore).fill(userLifeSymbol).join(" ");
  }
  document.querySelector("#user_life").textContent = userLife;
  document.querySelector("#computer_life").textContent = computerLife;
}

function isGameOver() {
  if (userScore === 0) {
    finalResult.textContent = `YOU FAILED!`;
    gameOver.style.visibility = "visible";
    return true;
  } else if (computerScore === 0) {
    finalResult.textContent = `VICTORY!`;
    gameOver.style.visibility = "visible";
    return true;
  } else return false;
}

function restartGame() {
  roundResult = ``;
  userScore = rounds;
  computerScore = rounds;
  finalResult.textContent = ``;
  userLife = Array(userScore).fill(userLifeSymbol).join(" ");
  computerLife = Array(computerScore).fill(computerLifeSymbol).join(" ");
  updateScore();
  hideComputer();
  gameOver.style.visibility = "hidden";
}

function showElections() {
  switch (computerSelection) {
    case "Rock":
      computerRock.classList.add(`compElection`);
      break;

    case "Paper":
      computerPaper.classList.add(`compElection`);
      break;

    case "Scissors":
      computerScissors.classList.add(`compElection`);
      break;
  }

  roundWinner.textContent = roundResult;
}

function hideComputer() {
  computerRock.classList.remove(`compElection`);
  computerPaper.classList.remove(`compElection`);
  computerScissors.classList.remove(`compElection`);
}
