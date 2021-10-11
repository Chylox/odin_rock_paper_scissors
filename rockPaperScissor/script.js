// Declaring Variables for User Input, Computer choice:
let userInput;
let compInput;
let winCounterPlayer = 0;
let winCounterComp = 0;

const startGame = document.querySelector('#startGame');
const rock = document.querySelector('#rock');
const paper = document.querySelector('#paper');
const scissors = document.querySelector('#scissors');



// Function that fetches user Input.
function getUserInput() {
    rock.addEventListener('click', function(e) {
        userInput = this.value;
        console.log(userInput);
    });
    paper.addEventListener('click', function(e) {
        userInput = this.value;
        console.log(userInput);
    });
    scissors.addEventListener('click', function(e) {
        userInput = this.value;
        console.log(userInput);
    });
}
// getUserInput();




// Declaring a functions that returns a computer choice---------------------------------:
function getCompNum() {
    let compChoice = Math.floor(Math.random() * 3) + 1;
    return compChoice;
}

function checkCompChoice() {
    const rndmNr = getCompNum();

    if (rndmNr === 1) {
        compInput = "rock";
    } else if (rndmNr === 2) {
        compInput = "paper";
    } else if (rndmNr === 3) {
        compInput = "scissors";
    }
}



// Declare Function: Given User and Comp Input compare them and declare a winner for this round:
// Function to Check Who wins this round:
function rockPaperScissors(user, comp) {
    if (user == comp) {
        console.log("Draw");
    } else if (user == "rock" && comp == "scissors") {
        console.log("Player Wins");
        winCounterPlayer += 1;
    } else if (user == "rock" && comp == "paper") {
        console.log("Computer Wins");
        winCounterComp += 1;
    } else if (user == "paper" && comp == "rock") {
        console.log("Player Wins");
        winCounterPlayer += 1;
    } else if (user == "paper" && comp == "scissors") {
        console.log("Computer Wins");
        winCounterComp += 1;
    } else if (user == "scissors" && comp == "paper") {
        console.log("Player Wins");
        winCounterPlayer += 1;
    } else if (user == "scissors" && comp == "rock") {
        console.log("Computer Wins");
        winCounterComp += 1;
    }
}

// function myGame() {
//     console.log('This is a new Game of RPS:')

//     for (let i = 0; i <= 100; i++) {
//         // checkUserInput();
//         checkCompChoice();

//         console.log(
//             `Player chose: ${userInput.toUpperCase()} and Computer chose: ${compInput.toUpperCase()}`
//         );

//         rockPaperScissors(userInput, compInput);
//         if (winCounterPlayer == 5 || winCounterComp == 5) {
//             break;
//         }
//     }

//     if (winCounterPlayer == 5) {
//         winCounterPlayer = 0;
//         winCounterComp = 0;
//         console.log("Player Wins The Game");
//         myGame();
//     } else if (winCounterComp == 5) {
//         winCounterPlayer = 0;
//         winCounterComp = 0;
//         console.log("Computer Wins The Game");
//         myGame();
//     }
// }
// myGame();

// Declare Function: Make a Game of 5 rounds that always calls the other functions and
// outputs a winner or a draw at the end:








// // // // DEPRECATED CODE:

// Declare Functions to call user for input----------------------------------------------:
// function getUserInput(input) {
//     const userChoice = prompt("Please input Rock, Paper or Scissor");

//     return userChoice;
// }
// getUserInput();

// Function to check if user input is valid:
// function checkUserInput() {
//     let userChoice = getUserInput();

//     // Convert user input to always readable data:
//     userChoice = userChoice.toLowerCase();

//     if (userChoice === "rock") {
//         userInput = "rock";
//     } else if (userChoice === "paper") {
//         userInput = "paper";
//     } else if (userChoice === "scissors") {
//         userInput = "scissors";
//     } else {
//         checkUserInput();
//     }
// }