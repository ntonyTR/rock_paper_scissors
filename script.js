let playerChoice;
let compChoice;
let roundResult;
let resultMessage;
const buttons = document.querySelectorAll("button");
const buttonsContainer = document.querySelector("#buttonsContainer");
const message = document.createElement("p");
let score = document.querySelector(".scoreRecord");

getUserChoice();

function getUserChoice() {
  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      playerChoice = button.id;
      playRound();
    });
  });
}

function playRound() {
  getCompChoice();
  makeComparison(playerChoice, compChoice);
  alerts();
  showResult();
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

function alerts() {
  resultMessage =
    roundResult === "tie"
      ? `Is a tie!`
      : roundResult === "win"
      ? `You win!`
      : roundResult === "lose"
      ? `You lose!`
      : `Invalid option`;
}

function showResult() {
  message.textContent = resultMessage;
  buttonsContainer.appendChild(message);
}

// code by Antony TR
let scoreBtn = document.getElementById("scoreButton");
function updateScore() {
  // implementar if/else, para cuando gane player o computadora
  score++;
  document.querySelector("#scoreRecord").textContent = score;
}
scoreBtn.addEventListener("click", updateScore);
