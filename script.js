let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:

const generateTarget = () => {
  return Math.floor(Math.Random() * 10) 
}

const compareGuesses = (humanScore, computerScore, target) => {
    if(Math.abs(target - computerScore) > Math.abs(target - humanScore)) {
        return false;
    } else if (Math.abs(target - computerScore) <= Math.abs(target - humanScore)) {
        return true;
    }
}

const updatedScore = (winner) => {
    switch (winner){
        case 'human':
            humanScore++;
            break;
        case 'computer':
            computerScore++;
            break;
    }  
}

const advanceRound = () => currentRound++;