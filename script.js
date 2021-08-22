let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

let generateTarget = () => {
    return Math.floor(Math.random() * 9);  
};

let getAbsoluteDistance = () => {}

let compareGuesses = (human, computer, target) => {
    const userD = Math.abs(target - human);
    const computerD = Math.abs(target - computer);
    return userD <= computerD;
};

let updateScore = winner => {
    if (winner === 'human') {
        humanScore += 1;
    } else if (winner === 'computer') {
        computerScore += 1;
    }
};

function advanceRound() {
    currentRoundNumber += 1;
};