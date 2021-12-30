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
        return("You win! Rock beats scissors.");
    } else if((playerSelection === "Scissors") && (computerSelection === "Paper")) {
        return("You win! Scissors beats paper.");
    } else if((playerSelection === "Paper") && (computerSelection === "Rock")) {
        return("You win! Paper beats rock!");
    } else if((computerSelection === "Scissors") && (playerSelection === "Paper")) {
        return("You lost! Scissors beats paper!");
    } else if((computerSelection === "Rock") && (playerSelection === "Scissors")) {
        return("You lost! Rock beats scissors!");
    } else if((computerSelection === "Paper") && (playerSelection === "Rock")) {
        return("You lost! Paper beats rock!");
    } else {
        return("You tied! " + computerSelection + " ties with " + playerSelection);
    }
}

function game() {
    computerChoice();
    playerChoice();
    console.log(playRound(computerSelection, playerSelection));
}

for(i = 0; i < 5; i++) {
    game();
}