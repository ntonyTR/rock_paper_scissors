# rock_paper_scissors
This is my Rock, Paper, Scissors project for The Odin Project curriculum.
It's a little game of RPS where the player plays against the computer.

PSEUDOCODE
- Make a random choice of three options (0, 1, 2)
- Assign each value to a RPS value (0 = Rock, 1 = Paper, 2 = Scissors)
- Ask user to input a RPS value (prompt Rock, Paper, Scissors)
- Convert user input to a neutral string ('rOcK' = 'Rock', 'PAPER' = 'Paper', 'ScIsSors' = 'Scissors')
- Compare user's input with the computer's choice 
- Determine who wins
- Alert the result ('you won!')
- Keep a score on the wins/lose.
___

The `getUserChoice()` function asks the user to write 'Rock', 'Paper', or 'Scissors', then capitalizes the input of the user by converting the first letter to upper case and the rest to lower case, after this, returns this value and stores iti into the  `userChoice` variable, declared in global scope.

The `getCompChoice()` declares the constant variable `randomNum`, which generates a random number between 0 and 2, using `Math.floor` and `Math.random`. After this, assign a value to the `computerChoice` variable, declared in global scope, each number on `randomNum` is equal to `Rock`, `Paper` or `Scissors`, then it returns the value to the `computerChoice` variable.

`playRound(player, computer)` implements an if statement, it takes two parameters and compares them, the input from the user `userChoice` and the computer `computerChoice`, depending on the result, it returns a message 'tie', 'you win', 'you lose' and adds one unit to the corresponding score, the score variables are declared in global scope. 

The `game()` implements a for loop that repeats the `getUserChoice`, `getCompChoice` and `playRound` as many times as we want, after the iterations, it alerts a message that shows the score and the final 'win' or 'lose' result.
