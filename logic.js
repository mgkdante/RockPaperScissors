const rock = document.getElementById('rock');
const paper = document.getElementById('paper');
const scissors = document.getElementById('scissors');
const button = document.querySelector('button');
const result = document.getElementById('result-value');
const computerPick = document.getElementById('computer-pick');
const playerPick = document.getElementById('player-pick');
const overallScore = document.getElementById('overall-score-value');
let score = 0;

const getComputerChoice = () => {
    const choices = ['rock', 'paper', 'scissors'];
    const randomNumber = Math.floor(Math.random() * 3);
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


const game = (userChoice) => {
    const computerChoice = getComputerChoice();
    computerPick.textContent = computerChoice;
    playerPick.textContent = userChoice;
    result.textContent = playGame(userChoice, computerChoice);
    return result.textContent.toString();
}



rock.addEventListener('click', () => {
    game('rock');
});

paper.addEventListener('click', () => {
    game('paper');
});

scissors.addEventListener('click', () => {
    game('scissors');
});
