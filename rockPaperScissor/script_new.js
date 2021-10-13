// Assigning Variables to Buttons:
const startGame = document.querySelector("#startGame");
const rock = document.querySelector("#rock");
const paper = document.querySelector("#paper");
const scissors = document.querySelector("#scissors");

// Targeting Output HTML:
const playerScore = document.querySelector('#playerScore');
const compScore = document.querySelector('#compScore');
const outputWinner = document.querySelector('#outputWinner');

const playerSelect = document.querySelector('#playerSelect');
const compSelect = document.querySelector('#compSelect');

let playerCount = 0;
let computerCount = 0;

// // // Buildup of Basic Logic:

// Functions to get Player Input AND Start the Game:
// At the End make ONE addEventListener for all buttons. If one is pressed a Round of Gameplay is automatically started:
const playAround = document.querySelectorAll(".rps");

playAround.forEach((button) => {
    button.addEventListener("click", function(e) {
        let playerChoice;

        playerChoice = this.value;

        playerSelect.textContent = playerChoice;

        console.log('Player chose: ' + playerChoice);

        playGame(playerChoice);
    });
});


// Functions to get Computer Input:
function getCompNum() {
    let compChoice = Math.floor(Math.random() * 3) + 1;
    return compChoice;
}

function getCompInput() {
    const rndmNr = getCompNum();
    let compChoice;

    if (rndmNr === 1) {
        compChoice = "rock";
        console.log("Computer chose: " + compChoice);
    } else if (rndmNr === 2) {
        compChoice = "paper";
        console.log("Computer chose: " + compChoice);
    } else if (rndmNr === 3) {
        compChoice = "scissors";
        console.log("Computer chose: " + compChoice);
    }

    compSelect.textContent = compChoice;

    return compChoice;
}

// Function to play a round of RPS:
function rockPaperScissors(user, comp) {
    if (user == comp) {
        console.log("Draw");
        outputWinner.textContent = 'Draw'; 
    } else if (user == "rock" && comp == "scissors") {
        console.log("Player Wins");
        outputWinner.textContent = "Player Wins"; 
        playerCount += 1;
    } else if (user == "rock" && comp == "paper") {
        console.log("Computer Wins");
        outputWinner.textContent = "Computer Wins";
        computerCount += 1;
    } else if (user == "paper" && comp == "rock") {
        console.log("Player Wins");
        outputWinner.textContent = "Player Wins";
        playerCount += 1;
    } else if (user == "paper" && comp == "scissors") {
        console.log("Computer Wins");
        outputWinner.textContent = "Computer Wins";
        computerCount += 1;
    } else if (user == "scissors" && comp == "paper") {
        console.log("Player Wins");
        outputWinner.textContent = "Player Wins";
        playerCount += 1;
    } else if (user == "scissors" && comp == "rock") {
        console.log("Computer Wins");
        outputWinner.textContent = "Computer Wins";
        computerCount += 1;
    }
}


// Function to Update Scoreboard:
function updateScoreboard() {
    playerScore.textContent = playerCount;
    compScore.textContent = computerCount;
}


// Function that controls the Gameplay:
function playGame(player) {
    let pl;
    let co;

    pl = player;
    co = getCompInput();

    rockPaperScissors(pl, co);

    updateScoreboard();
}






























// // Debouce to make startGame Function wait for Buttons to be Pressed:
// function debouce(callback, wait) {
//     let timerId;
//     return (...args) => {
//         clearTimeout(timerId);
//         timerId = setTimeout(() => {
//             callback(...args);
//         }, wait);
//     }
// }

// Function to Start and Run the Game:
// startGame.addEventListener("click", debouce(() => {
//     const myLog = playerInput();
//     console.log(myLog);
// }, 3000));
