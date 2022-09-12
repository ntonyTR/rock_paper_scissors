let playerChoice;
let compChoice;
let roundResult;
let score = 0;

game();

function getCompChoice() {
  const randomNum = Math.floor(Math.random() * 3);
  compChoice =
    randomNum === 0 ? "Rock" : randomNum === 1 ? "Paper" : "Scissors";
  return compChoice;
}

function getPlayerChoice() {
  playerChoice = prompt("Pick: Rock, Paper, Scissors");
  playerChoice =
    playerChoice.charAt(0).toUpperCase() + playerChoice.slice(1).toLowerCase();
  return playerChoice;
}

function compareChoices(player, computer) {
  switch (true) {
    case player === computer:
      roundResult = "tie";
      return roundResult;

    case (player === "Rock" && computer === "Scissors") ||
      (player === "Paper" && computer === "Rock") ||
      (player === "Scissors" && computer === "Paper"):
      roundResult = "win";
      score++;
      return roundResult;

    case (player === "Rock" && computer === "Paper") ||
      (player === "Paper" && computer === "Scissors") ||
      (player === "Scissors" && computer === "Rock"):
      roundResult = "lose";
      return roundResult;

    default:
      roundResult = "invalid";
      return roundResult;
  }
}

function alerts() {
  switch (true) {
    case roundResult == "tie":
      console.log(
        `User: ${playerChoice}\n\nComputer: ${compChoice}\n\n${playerChoice} is equal to ${compChoice}, is a tie!`
      );
      alert(
        `User: ${playerChoice}\n\nComputer: ${compChoice}\n\n${playerChoice} is equal to ${compChoice}, is a tie!`
      );
      break;

    case roundResult == "win":
      console.log(
        `User: ${playerChoice}\n\nComputer: ${compChoice}\n\n${playerChoice} beats ${compChoice}, you won!`
      );
      alert(
        `User: ${playerChoice}\n\nComputer: ${compChoice}\n\n${playerChoice} beats ${compChoice}, you won!`
      );
      break;

    case roundResult == "lose":
      console.log(
        `User: ${playerChoice}\n\nComputer: ${compChoice}\n\n${compChoice} beats ${playerChoice}, you lose!`
      );
      alert(
        `User: ${playerChoice}\n\nComputer: ${compChoice}\n\n${compChoice} beats ${playerChoice}, you lose!`
      );
      break;

    default:
      console.log(`${playerChoice} is an invalid value, you lost!`);
      alert(`${playerChoice} is an invalid value, you lost!`);
  }
  console.log(`User Win Score: ${score}`);
  alert(`User Win Score: ${score}`);
}

function finalResult() {
  if (score >= 3) {
    console.log(`You won ${score} out of 5!\n\nYou win!!!! :D`);
    alert(`You won ${score} out of 5!\n\nYou win!!!! :D`);
  } else {
    console.log(`You won ${score} out of 5!\n\nYou lose :(`);
    alert(`You won ${score} out of 5!\n\nYou lose :(`);
  }
}

function game() {
  for (let i = 0; i < 5; i++) {
    getPlayerChoice();
    getCompChoice();
    compareChoices(playerChoice, compChoice);
    alerts();
  }
  finalResult();
}
