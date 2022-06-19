let playerScore = 0;
let npcScore = 0;

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

function playRound(e) {
    if(npcScore === 5 || playerScore === 5) return;
    let playerChoice = e.target.classList.value;
    let npcChoice = computerPlay();
    checkForWinner(npcChoice, playerChoice);
    updateScore();
}

function updateScore() {
    const player = document.querySelector("span.player")
    const npc = document.querySelector("span.npc");

    player.textContent = `${playerScore}`;
    npc.textContent = `${npcScore}`
}

function createParagraph(text, logs) {
    const paragraph = document.createElement("p");
    paragraph.textContent = text;
    logs.append(paragraph);
}

function capitalize(string) {
    let array = string.split('');
    array[0] = array[0].toUpperCase();
    let result = "";
    for(let i = 0; i < array.length; i++) {
        result += array[i];
    }
    return result;
}

function checkForWinner(npc, player) {
    const logs = document.querySelector(".logs");

    if(npc === player) {
        createParagraph("It's a draw!", logs);
    } else if(player === "rock" && npc === "scissors" ||
            player === "scissors" && npc === "paper" ||
            player === "paper" && npc === "rock") {
        createParagraph(`You win! ${capitalize(player)} beats ${npc}!`, logs);
        playerScore += 1;
    } else {
        createParagraph(`You lose! ${capitalize(npc)} beats ${player}!`, logs);
        npcScore += 1;
    }
}

const buttons = document.querySelectorAll("button");

buttons.forEach(button => {
    button.addEventListener('click', playRound);
});