let playerChoice;
let compChoice;
let roundResult;
let resultMessage;
let userScore = 0;
let compScore = 0;
let maxRounds = 3;
const buttons = document.querySelectorAll("button");
const buttonsContainer = document.querySelector("#buttonsContainer");
const message = document.querySelector("#resultMessage");

game();

function game() {
  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      if (userScore >= maxRounds) return alert(`You win!`);
      else if (compScore >= maxRounds) return alert(`You lose!`);
      playerChoice = button.id;
      playRound();
    });
  });
}

function playRound() {
  getCompChoice();
  makeComparison(playerChoice, compChoice);
  showResult();
  updateScore();
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

function showResult() {
  resultMessage =
    roundResult === "tie"
      ? `<p>You chose ${playerChoice}<br>Computer chose ${compChoice}<br>Is a tie!</p>`
      : roundResult === "win"
      ? `<p>You chose ${playerChoice}<br>Computer chose ${compChoice}<br>You win!</p>`
      : roundResult === "lose"
      ? `<p>You chose ${playerChoice}<br>Computer chose ${compChoice}<br>You lose!</p>`
      : `Invalid option`;

  message.innerHTML = resultMessage;
}

function updateScore() {
  if (roundResult == "win") userScore++;
  else if (roundResult == "lose") compScore++;
  document.querySelector("#userRecord").textContent = userScore;
  document.querySelector("#compRecord").textContent = compScore;
}
