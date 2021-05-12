let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

const generateTarget = () => {
  return Math.floor(Math.random() * 10);
};

const compareGuesses = (humanScore, computerScore, target) => {
  if (Math.abs(target - computerScore) > Math.abs(target - humanScore)) {
    return true;
  } else if (
    Math.abs(target - computerScore) <= Math.abs(target - humanScore)
  ) {
    return false;
  }
};

const updateScore = (winner) => {
  switch (winner) {
    case "human":
      humanScore++;
      break;
    case "computer":
      computerScore++;
      break;
  }
};

const advanceRound = () => currentRoundNumber++;
