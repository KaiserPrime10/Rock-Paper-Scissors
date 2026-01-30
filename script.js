console.log("Welcome to Rock Paper Scissors");

function getComputerChoice() {
    x = Math.floor(Math.random() * 3);
    if (x === 0) {
        return "Rock";
    } else if (x === 1) {
        return "Paper";
    } else {
        return "Scissors"
    }
}


function getHumanChoice() {
    let choice = prompt("Please enter your choice: R/P/S");
    if (choice === "R" || choice === "r") {
        return "Rock";
    } else if (choice === "P" || choice === "p") {
        return "Paper";
    } else if (choice === "S" || choice === "s") {
        return "Scissors";
    }
}

let human_score = 0;
let computer_score = 0;

function playRound(humanChoice,computerChoice) {

    humanChoice = getHumanChoice;
    computerChoice = getComputerChoice;

    if (humanChoice == "Rock" && computerChoice == "Scissors") {
        human_score =+ 1;
        console.log("You win! Rock beats Scissors");

    } else if (computerChoice == "Rock" && humanChoice == "Scissors") {
        computer_score =+ 1;
        console.log("You lose! Rock beats Scissors");

    } else if (humanChoice == "Paper" && computerChoice == "Rock") {
        human_score =+ 1;
        console.log("You win! Paper beats Rock");

    } else if (computerChoice == "Paper" && humanChoice == "Rock") {
        computer_score =+ 1;
        console.log("You lose! Paper beats Rock");

    } else if (humanChoice == "Scissors" && computerChoice == "Paper") {
        human_score =+ 1;
        console.log("You win! Scissors beat Paper");

    } else if (computerChoice == "Scissors" && humanChoice == "Paper") {
        computer_score =1;
        console.log("You lose! Scissors beat Paper");
        
    } else if (humanChoice == computerChoice) {
        console.log("DRAW!");
    }

}


console.log("Your choice:", getHumanChoice())
console.log("Computer choice:", getComputerChoice())
console.log(playRound())
