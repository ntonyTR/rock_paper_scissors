let randomNumber = Math.floor((Math.random()* 3));

let computerChoice;

if (randomNumber === 0) {
    computerChoice = 'Rock';
} else if (randomNumber === 1){
    computerChoice = 'Paper';
} else {
    computerChoice = 'Scissors';
}
console.log(computerChoice)
let userChoice = prompt('Rock, Paper, Scissors');

let result;
if (userChoice == computerChoice){
    result = `${userChoice} is equals to ${computerChoice}, is a tie!`;
} else if (userChoice == 'Rock' && computerChoice == 'Scissors' || userChoice == 'Paper' && computerChoice == 'Rock' || userChoice == 'Scissors' && computerChoice == 'Paper') {
    result = `${userChoice} beats ${computerChoice}, you won!`;
} else {
    result = `${computerChoice} beats ${userChoice}, you lost!`;
}

console.log(`You chose ${userChoice}`);
console.log(`Computer chose ${computerChoice}`);
console.log(result);