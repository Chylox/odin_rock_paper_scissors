// Assigning Variables to Buttons:
const startGame = document.querySelector("#startGame");
const rock = document.querySelector("#rock");
const paper = document.querySelector("#paper");
const scissors = document.querySelector("#scissors");

let playerChoice = '';
let counter = 0;
// // // Buildup of Basic Logic:

// Function to get Value of the Buttons:
const rpsButtons = document.querySelectorAll(".rps");

function paperFunc() {
    return 'paper';
}
function rockFunc() {
    return 'rock';
}
function scissorsFunc() {
    return 'scissors';
}

// function playerInput() {
//     rpsButtons.forEach((button) => {
//         button.addEventListener("click", () => {
//             // console.log(button.value);
//             return button.value;
//         });
//     });
// }

function playGame () {
    // playerInput();
    rock.addEventListener('click', () => {
        let playerChoice = rockFunc();
        console.log(playerChoice);
    });
    paper.addEventListener('click', () => {
        let playerChoice = paperFunc();
        console.log(playerChoice);
    });
    scissors.addEventListener('click', () => {
        let playerChoice = scissorsFunc();
        console.log(playerChoice);
    });
}


if (counter == 0) {
    playGame();
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
