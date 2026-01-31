console.log("Welcome to Rock Paper Scissors");

function getComputerChoice() {
    let x = Math.floor(Math.random() * 3);
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

    humanChoice = getHumanChoice();
    computerChoice = getComputerChoice();

    console.log("Your choice:", humanChoice);
    console.log("Computer Choice:", computerChoice);


    if (humanChoice == "Rock" && computerChoice == "Scissors") {
        human_score += 1;
        console.log("You win! Rock beats Scissors");

    } else if (computerChoice == "Rock" && humanChoice == "Scissors") {
        computer_score += 1;
        console.log("You lose! Rock beats Scissors");

    } else if (humanChoice == "Paper" && computerChoice == "Rock") {
        human_score += 1;
        console.log("You win! Paper beats Rock");

    } else if (computerChoice == "Paper" && humanChoice == "Rock") {
        computer_score += 1;
        console.log("You lose! Paper beats Rock");

    } else if (humanChoice == "Scissors" && computerChoice == "Paper") {
        human_score += 1;
        console.log("You win! Scissors beat Paper");

    } else if (computerChoice == "Scissors" && humanChoice == "Paper") {
        computer_score += 1;
        console.log("You lose! Scissors beat Paper");
        
    } else if (humanChoice == computerChoice) {
        console.log("DRAW!");
    }


}


function playgame() {
    for (let i = 1; i <= 5 ; i++) {
        playRound();
    }
    console.log("Your score:", human_score);
    console.log("Computer score:", computer_score);

    if (human_score > computer_score) {
        console.log("YOU WIN THE GAME!");
    
    } else if (human_score < computer_score) {
        console.log("YOU LOST THE GAME!")

    } else {
        console.log("ITS A DRAW")
    }
    
}



playgame();
