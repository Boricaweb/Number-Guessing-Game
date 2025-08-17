let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:
// Generate a random target number between 0 and 9
function generateTarget() {
    return Math.floor(Math.random() * 10);
}

// Compare the human guess and computer guess against the target number
const compareGuesses = (humanGuess, computerGuess, target) => {
    if (humanGuess < 0 || humanGuess > 9) {
        alert("Your guess must be a number between 0 and 9.");
        return null; // Invalid human guess, computer wins by default
    } else if (Math.abs(humanGuess - target) <= Math.abs(computerGuess - target)) {
        return true; // It's a tie or human's number is closer to target than computer, human wins
    } else if (Math.abs(humanGuess - target) > Math.abs(computerGuess - target)) {
        return false; // Computer's number is closer to target, computer wins
    }
}

// Update the score based on the winner
const updateScore = (winner) => {
    switch (winner) {
        case 'human': humanScore++; break;
        case 'computer': computerScore++; break;   
    }
}
//Advance to the next round
const advanceRound = () => {
    currentRoundNumber++;
}