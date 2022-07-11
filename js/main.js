let playerScore = 0;
let computerScore = 0;

function computerPlay() {

    let computerChoice = ["Rock", "Paper", "Scissors"];
    return computerChoice[Math.floor(Math.random() * 3)];
}

function playRound() {
    let playerSelection = capitalize(window.prompt("Please enter Rock, Paper or Scissors"));
    let computerSelection = computerPlay();

    
    switch (playerSelection + computerSelection) {

        case "PaperRock":
        case "ScissorsPaper":
        case "RockScissors":
            playerScore++;
            console.log(`You win! ${playerSelection} beats ${computerSelection}. The score is now
            ${playerScore} - ${computerScore}`);
            break;



        case "RockPaper":
        case "PaperScissors":
        case "ScissorsRock":
            computerScore++;
            console.log(`You Lose! ${computerSelection} beats ${playerSelection}. The score is now
            ${playerScore} - ${computerScore}`);
            break;



        case "RockRock":
        case "PaperPaper":
        case "ScissorsScissors":
            console.log(`It's a tie! ${playerSelection} can't beat ${computerSelection}. The score is now
            ${playerScore} - ${computerScore}`);
            break;
    }
}

function game() {

    for (let i = 0; i < 5; i++) {
        playRound();
    }

    if (playerScore > computerScore) {
        console.log("You won!");
    } else if (computerScore > playerScore) {
        console.log("You lose. Lol");
    } else {
        console.log("It's a draw!");
    }
}

// Helper Functions

function capitalize(string) {
    return string.charAt(0).toUpperCase()
        + string.slice(1).toLowerCase();

}


game();
