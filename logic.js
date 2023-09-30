const getComputerChoice = () => {
    const choices = ['rock', 'paper', 'scissors'];
    const randomNumber = Math.floor(Math.random() * 3);
    console.log(choices[randomNumber]);
    return choices[randomNumber];
}

const playGame = (userChoice, computerChoice) => {
    if (userChoice === computerChoice) {
        return 'The game is a tie!';
    }

    if (userChoice === 'rock') {
        if (computerChoice === 'paper') {
            return 'The computer won!';
        } else {
            return 'You won!';
        }
    }

    if (userChoice === 'paper') {
        if (computerChoice === 'scissors') {
            return 'The computer won!';
        } else {
            return 'You won!';
        }
    }

    if (userChoice === 'scissors') {
        if (computerChoice === 'rock') {
            return 'The computer won!';
        } else {
            return 'You won!';
        }
    }
}

const game = () => {
    for (let i = 0; i < 5; i++) {
        const userInput = window.prompt("Please enter rock, paper or scissors");
        if (userInput !== null) {
            const userChoice = userInput.toLowerCase();
            const computerChoice = getComputerChoice();
            console.log(playGame(userChoice, computerChoice));
        } else {
            console.log("User cancelled the game.");
            break;
        }
    }
}

game();