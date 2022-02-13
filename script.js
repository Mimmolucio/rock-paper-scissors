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

const buttons = document.querySelectorAll("button")
buttons.forEach((button) => {
    button.addEventListener('click', () => {
        gamePlay(button.innerText, computerPlay())
    })
})




function gamePlay(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    playerSelection = playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1);
    console.log(playerSelection);
    console.log(computerSelection);
    if (playerSelection == "Rock" && computerSelection == "Scissors") {

        console.log("Congratulations - you won this round!")

    } else if (playerSelection == "Paper" && computerSelection == "Rock") {

        console.log("Congratulations - you won this round!")
    } else if (playerSelection == "Scissors" && computerSelection == "Paper") {

        console.log("Congratulations - you won this round!")
    } else if (playerSelection == computerSelection) {
        console.log("It's a tie.")
    } else {

        console.log("Oh no - you lost this round...")
    }
}

