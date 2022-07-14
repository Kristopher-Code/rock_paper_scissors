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
    let end = "";

    switch (playerSelection + computerSelection) {

        case "PaperRock":
        case "ScissorsPaper":
        case "RockScissors":
            playerScore++;
            result += (`You win! Your ${playerSelection} beats the RNGs ${computerSelection}. Yay!`);
            if (playerScore === 5) {
                end += (`<br> You won the game! Refresh to play again.`);
                disableButtons();
            }
            break;

        case "RockPaper":
        case "PaperScissors":
        case "ScissorsRock":
            computerScore++;
            result += (`You Lose! The RNGs ${computerSelection} beats your ${playerSelection}. ;_;`);
            if (computerScore === 5) {
                end += (`<br> You lost the game! Refresh to play again.`);
                disableButtons();
            }
            break;

        case "RockRock":
        case "PaperPaper":
        case "ScissorsScissors":
            result += (`It's a tie! Your ${playerSelection} can't beat the RNGs ${computerSelection}.
            In this version at least..`);
            if (playerScore === 5 || computerScore === 5) {
                disableButtons();
            }
            break;
    }
    document.getElementById('result').innerHTML += result + "<br>";
    document.getElementById('end').innerHTML += end;
    return
}

function updateScore() {

    document.getElementById("p-score").textContent = playerScore;
    document.getElementById("c-score").textContent = computerScore;
}

function disableButtons() {

    selections.forEach(Element => {
        Element.disabled = true;
    });
};