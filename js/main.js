playRound();


function computerPlay() {

    let computerChoice = ["Rock", "Paper", "Scissors"];
    return computerChoice[Math.floor(Math.random() * 3)];
}

function playRound() {
    let playerSelection = computerPlay();
    let computerSelection = computerPlay();
    console.log(playerSelection);
    console.log(computerSelection);

    switch (playerSelection + computerSelection) {

        case "PaperRock":
        case "ScissorsPaper":
        case "RockScissors":
            return console.log(`You win! ${playerSelection} beats ${computerSelection}`);


        case "RockPaper":
        case "PaperScissors":
        case "ScissorsRock":
            return console.log(`You Lose! ${computerSelection} beats ${playerSelection}`);


        case "RockRock":
        case "PaperPaper":
        case "ScissorsScissors":
            return console.log(`It's a tie! ${playerSelection} can't beat ${computerSelection}`);
    }
}





