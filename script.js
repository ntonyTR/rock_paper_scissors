let userChoice;
let computerChoice;
let roundResult;
let userScore = 0;
let compuScore = 0;
let drawsScore = 0;

game();

function getUserChoice() {
    userChoice = prompt('Rock, Paper, Scissors');
    userChoice = userChoice.charAt(0).toUpperCase() + userChoice.slice(1).toLowerCase();
    return userChoice;
}

function getCompChoice() {
    const randomNum = Math.floor((Math.random()* 3));
    computerChoice = (randomNum === 0) ? 'Rock' : (randomNum === 1) ? 'Paper' : 'Scissors';
    return computerChoice;
}

function playRound(player, computer) {
    if (player === computer){
        roundResult = `${player} is equal to ${computer}, is a tie!`;
        drawsScore++;
    } else if (player === 'Rock' && computer === 'Scissors' || player === 'Paper' && computer === 'Rock' || player === 'Scissors' && computer === 'Paper') {
        roundResult = `${player} beats ${computer}, you won!`;
        userScore++;
    } else if (player === 'Rock' && computer === 'Paper' || player === 'Paper' && computer === 'Scissors' || player === 'Scissors' && computer === 'Rock') {
        roundResult = `${computer} beats ${player}, you lost!`;
        compuScore++;
    } else {
        alert(`Invalid value`);
        roundResult = `Invalid value`;
        compuScore++;
    }
    console.log(`User choice: ${player}\n\nComputer choice: ${computer}\n\n${roundResult}`);
    alert(`User choice: ${player}\n\nComputer choice: ${computer}\n\n${roundResult}`);
    return roundResult;
}

function game() {
    for (let i = 0; i < 5; i++) {
        getUserChoice();
        getCompChoice();
        playRound(userChoice, computerChoice);
    }

    console.log(`User Score: ${userScore}\nComputer Score ${compuScore}\n`);
    alert(`User Score: ${userScore}\nComputer Score ${compuScore}\n`);

    if (userScore > compuScore) {
        console.log(`You win!!!! :D`);
        alert(`You win!!!! :D`);
    } else if (userScore < compuScore) {
        console.log(`You lose :(`);
        alert(`You lose :(`);
    } else {
        console.log(`Is a draw :/`);
        alert(`Is a draw :/`);
    }
}