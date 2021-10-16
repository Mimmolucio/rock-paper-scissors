function computerPlay() {
    let index = Math.floor(Math.random() * 3);
    switch (index) {
        case 0:
            return "Rock";
            break;
        case 1:
            return "Paper";
            break;
        case 2:
            return "Scissors";
            break;

    }
}

let playerPoints = 0;
let computerPoints = 0;

function gamePlay(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    playerSelection = playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1);
    console.log(playerSelection);
    console.log(computerSelection);
    if (playerSelection == "Rock" && computerSelection == "Scissors") {
        ++playerPoints;
        return "Congratulations - you won this round!";

    } else if (playerSelection == "Paper" && computerSelection == "Rock") {
        ++playerPoints;
        return "Congratulations - you won this round!";
    } else if (playerSelection == "Scissors" && computerSelection == "Paper") {
        ++playerPoints;
        return "Congratulations - you won this round!";
    } else if (playerSelection == computerSelection) {
        return "It's a tie.";
    } else {
        ++computerPoints;
        return "Oh no - you lost this round...";
    }
}

function getUserInput() {
    return prompt("Please enter your guess: ");
}



function game() {
    console.log("Welome to 'Rock, Paper, Scissors'");
    for (let i = 0; i < 5; ++i) {
        console.log(gamePlay(getUserInput(), computerPlay()));
        console.log("Player: %s - Computer: %s", playerPoints, computerPoints);
    }
    if (playerPoints > computerPoints) {
        console.log("Hooray - You are the Champion!!!");
    } else if (playerPoints < computerPoints) {
        console.log("You lost - maybe try again...");
    } else {
        console.log("Looks like it's a tie...");
    }

}

game();