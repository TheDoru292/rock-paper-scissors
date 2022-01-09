let playerSelection;
let computerSelection;
let playerScore = 0;
let npcScore = 0;
let message = "";

const score = document.querySelector("#score");
score.textContent = `${playerScore} : ${npcScore}`;

const result = document.querySelector("#resultText");

function playerChoice(selection) {
    return playerSelection = selection;
}

function computerChoice() {
    let random = Math.floor(Math.random() * 3);
    (random === 0) ? computerSelection = "rock"
    : (random === 1) ? computerSelection = "paper"
    : (random === 2) ? computerSelection = "scissors"
    : message = "Something went wrong";
}

function playRound(playerSelection, computerSelection) {

    if(playerSelection === computerSelection) {
        return message = "It was a draw!";
    } else if (playerSelection === "rock" && computerSelection === "scissors" ||
        playerSelection === "scissors" && computerSelection === "paper" ||
        playerSelection === "paper" && computerSelection === "rock") {
        playerScore += 1;
        return message = `You win! ${playerSelection} beats ${computerSelection}`;
    }
    else {
        npcScore +=1;
        return message = `You lose! ${computerSelection} beats ${playerSelection}`;
    }
}

function game() {
   if(npcScore === 5) {
        result.textContent = "Game over! You lose.";
   } else if(playerScore === 5) {
       result.textContent = "Game over! You win!";
   } else {
       playRound(playerSelection, computerSelection);
   }
}

const buttons = document.querySelectorAll("button");

buttons.forEach(button => {
    button.addEventListener('click', (e) => {
        // console.log(e.target.className);
        playerChoice(e.target.className);
        computerChoice();
        game();

        score.textContent = `${playerScore} : ${npcScore}`;
        
        if(npcScore ===  5) {
            result.textContent = "Game over! You lose.";
        } else if (playerScore === 5) {
            result.textContent = "Game over! You Win!";
        } else {
            result.textContent = message;
        }
    });
});