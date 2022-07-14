let playerScore = 0;
let computerScore = 0;

const selections = document.querySelectorAll(".selections");

selections.forEach((selection) => {
    selection.addEventListener("click", function () {
        const playerSelection = this.textContent;
        const computerSelection = computerPlay();
        playRound(playerSelection, computerSelection);
        updateScore();
    })
})

function computerPlay() {
    let computerChoice = ["Rock", "Paper", "Scissors"];
    return computerChoice[Math.floor(Math.random() * 3)];

}

function playRound(playerSelection, computerSelection) {

    let result = "";


    switch (playerSelection + computerSelection) {

        case "PaperRock":
        case "ScissorsPaper":
        case "RockScissors":
            playerScore++;
            result += (`You win! ${playerSelection} beats ${computerSelection}.`);
            break;


        case "RockPaper":
        case "PaperScissors":
        case "ScissorsRock":
            computerScore++;
            result += (`You Lose! ${computerSelection} beats ${playerSelection}.`);
            break;


        case "RockRock":
        case "PaperPaper":
        case "ScissorsScissors":
            result += (`It's a tie! ${playerSelection} can't beat ${computerSelection}.`);
            break;
    }
    document.getElementById('result').innerText = result

    return


}

function updateScore() {
    document.getElementById("p-score").textContent = playerScore;
    document.getElementById("c-score").textContent = computerScore;
}

// function game(playerSelection) {

//     for (let i = 0; i < 5; i++) {
//         computerSelection = computerPlay();
//         playRound(playerSelection);
//     }

//     if (playerScore > computerScore) {
//         console.log("You won!");
//     } else if (computerScore > playerScore) {
//         console.log("You lose. Lol");
//     } else {
//         console.log("It's a draw!");
//     }
// }

// // Helper Functions

// function capitalize(string) {
//     return string.charAt(0).toUpperCase()
//         + string.slice(1).toLowerCase();

// }


