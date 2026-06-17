let num = 0;


function getComputerChoice() {
    num = Math.random();

    if(num > 0 && num < 0.3) {
        return "rock";
    }

    else if (num > 0.3 && num < 0.6) {
        return "paper";
    }

    else {
        return "scissors";
    }
}

function getHumanChoice() {
    let choice = prompt("Rock, Paper, or Scissors?").toLowerCase();
    
    if (choice === "rock") {
        return choice;
    }
    else if (choice === "paper"){
        return choice;
    }
    else if (choice === "scissors"){
        return choice;
    }
    else{
        return getHumanChoice();
    }
}

function playGame() {
    let humanScore = 0;
    let computerScore = 0;

    function playRound(humanChoice, computerChoice) {
        if (humanChoice === computerChoice) {
            console.log("It's a tie!");
        } else if (
            (humanChoice === "rock" && computerChoice === "scissors") ||
            (humanChoice === "paper" && computerChoice === "rock") ||
            (humanChoice === "scissors" && computerChoice === "paper")
        ) {
            console.log(`You win! ${humanChoice} beats ${computerChoice}`);
            humanScore++;
        } else {
            console.log(`You lose! ${computerChoice} beats ${humanChoice}`);
            computerScore++;
        }

        console.log(`Human: ${humanScore} | Computer: ${computerScore}`);
    }

    for(let i = 1; i <= 5; i++){
        playRound(getHumanChoice(), getComputerChoice());
    }

    if (humanScore > computerScore) {
        console.log("You won the game!");
    }
    else if (computerScore > humanScore) {
        console.log("Computer won the game!");
    }
    else {
        console.log("The game ended in a tie");
    }
}

playGame();

