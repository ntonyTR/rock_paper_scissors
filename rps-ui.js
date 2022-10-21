let playerChoice;
let compChoice;
let roundResult;
const buttons = document.querySelectorAll("button");

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
  switch (true) {
    case roundResult == "tie":
      alert(
        `You chose ${playerChoice}, computer chose ${compChoice}, is a tie!`
      );
      break;

    case roundResult == "win":
      alert(
        `You chose ${playerChoice}, computer chose ${compChoice}, you won!`
      );
      break;

    case roundResult == "lose":
      alert(
        `You chose ${playerChoice}, computer chose ${compChoice}, you lose!`
      );
      break;

    case roundResult == "invalid":
      alert(`That is an invalid option!`);
  }
}
