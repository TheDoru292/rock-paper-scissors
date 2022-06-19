function computerPlay() {
    let number = Math.floor(Math.random() * 3);
    let choice = determinePlay(number);
    return choice;
}

function determinePlay(number) {
    switch (number) {
        case 0:
            return "rock";
            break;
        case 1:
            return "scissors";
            break;
        case 2:
            return "paper";
            break;
        default:
            return "Something went wrong.";
    }
}

function playerChoice() {
    let choice = prompt("What would you like to choose? Rock, paper or scissors").toLowerCase();
    return choice;
}

function playRound() {
    let npcChoice = computerPlay();
    let userChoice = playerChoice();
    alert(checkForWinner(npcChoice, userChoice));
}

function checkForWinner(npc, player) {
    if(npc === player) {
        return "It's a draw!"
    } else if(player === "rock" && npc === "scissors" ||
            player === "scissors" && npc === "paper" ||
            player === "paper" && npc === "rock") {
        return "You win! Rock beats scissors";
    } else {
        return `You lose! ${npc} beats ${player}!`;
    }
}