let playerSelection;
let computerSelection;

function computerChoice() {
    let number = Math.floor(Math.random() * 3) + 1;
    switch(number) {
        case 1:
            computerSelection = "Rock";
            break;
        case 2:
            computerSelection = "Paper";
            break;
        case 3:
            computerSelection = "Scissors";
            break;
        default:
            console.log("Something went wrong...");
    }
}

function playerChoice() {
    let choice = prompt("Please choose between: Rock, Paper, Scissors.").toLowerCase();
    if(choice === "rock") {
        playerSelection = "Rock";

    } else if (choice === "paper") {
        playerSelection = "Paper";

    } else if (choice === "scissors") {
        playerSelection = "Scissors"

    } else {
        console.log("Please enter a real value!");
        playerChoice();
    }
}

function playRound(playerSelection, computerSelection) {
    if((playerSelection === "Rock") && (computerSelection === "Scissors")) {
        console.log("You win! Rock beats scissors.");
    } else if((playerSelection === "Scissors") && (computerSelection === "Paper")) {
        console.log("You win! Scissors beats paper.");
    } else if((playerSelection === "Paper") && (computerSelection === "Rock")) {
        console.log("You win! Paper beats rock!");
    } else if((computerSelection === "Scissors") && (playerSelection === "Paper")) {
        console.log("You lost! Scissors beats paper!");
    } else if((computerSelection === "Rock") && (playerSelection === "Scissors")) {
        console.log("You lost! Rock beats scissors!");
    } else if((computerSelection === "Paper") && (playerSelection === "Rock")) {
        console.log("You lost! Paper beats rock!");
    } else {
        console.log("You tied! " + computerSelection + " ties with " + playerSelection);
    }
}

function game() {
    computerChoice();
    playerChoice();
    playRound(playerSelection, computerSelection);
}

for(i = 0; i < 5; i++) {
    game();
}