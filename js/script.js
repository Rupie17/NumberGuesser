let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:
const generateTarget = () => {
    return Math.floor(Math.random() * 10);
};

function compareGuesses(humanGuess, computerGuess, secretNumber) {
    let humanAbs = Math.abs(humanGuess - secretNumber);
    let computerAbs = Math.abs(computerGuess - secretNumber);

    if (humanAbs === computerAbs || humanAbs < computerAbs) {
        return true;
    } else {
        return false;
    }
}

function updateScore(winner) {
    if (winner === 'human') {
        humanScore++;
    } else {
        computerScore++;
    }

}

const advanceRound = () => currentRoundNumber++;