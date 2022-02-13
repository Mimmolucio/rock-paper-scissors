let playerScore = 0
let computerScore = 0

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

let gameOver = false


function gamePlay(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    playerSelection = playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1);
    uiContainer = document.querySelector('#gameUI')

    if (gameOver == true) {
        uiContainer.removeChild(results)
        playerScore = 0
        computerScore = 0
        gameOver = false
    }
    if (document.getElementById('result')) {
        uiContainer.removeChild(results)
    }

    results = document.createElement('div')
    results.setAttribute('id', 'result')

    if (playerSelection == "Rock" && computerSelection == "Scissors") {

        results.textContent = "You chose " + playerSelection + " - The Computer chose " + computerSelection + ". Congratulations - you won this round!"
        playerScore++

    } else if (playerSelection == "Paper" && computerSelection == "Rock") {

        results.textContent = "You chose " + playerSelection + " - The Computer chose " + computerSelection + ". Congratulations - you won this round!"
        playerScore++
    } else if (playerSelection == "Scissors" && computerSelection == "Paper") {

        results.textContent = "You chose " + playerSelection + " - The Computer chose " + computerSelection + ". Congratulations - you won this round!"
        playerScore++
    } else if (playerSelection == computerSelection) {
        results.textContent = "You chose " + playerSelection + " - The Computer chose " + computerSelection + ". It's a tie."
    } else {

        results.textContent = "You chose " + playerSelection + " - The Computer chose " + computerSelection + ". Oh no - you lost this round..."
        computerScore++
    }
    uiContainer.appendChild(results)

    if (playerScore == 5) {
        results.textContent = "YOU ARE THE WINNER"
        gameOver = true

    } else if (computerScore == 5) {
        results.textContent = "YOU LOST"
        gameOver = true
    }

    uiContainer.appendChild(results)

    score = document.querySelector('#score')
    score.textContent = "Human: " + playerScore + "    Computer: " + computerScore
}

