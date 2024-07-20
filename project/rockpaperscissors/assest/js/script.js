/*
  Rock Paper Scissors 🚀🔥
  Concepts covered in this project
    👉 For loops
    👉 Dom Manipulation
    👉 Variables
    👉 Conditionals (if else if)
    👉 Template Literals
    👉 Event Listeners
    👉 Higher order Function (Math.random())
*/

function getComputerChoice() {
    let RockPaperScissorsChoices = ['Rock', 'Paper', 'Scissors']
    let computerChoice = RockPaperScissorsChoices[Math.floor(Math.random() * 3)]
    return computerChoice
}

function getResult(playerChoice, computerChoice) {
    let score;

    if (playerChoice === computerChoice) {
        score = 0
    }
    else if (playerChoice === 'Rock' && computerChoice === 'Scissors') {
        score = 1
    }
    else if (playerChoice === "Paper" && computerChoice === "Rock") {
        score = 1
    }
    else if (playerChoice === "Scissors" && computerChoice === "Paper") {
        score = 1
    }
    else {
        score = -1
    }
    return score
}

function showResult(score, playerChoice, computerChoice) {
    let result = document.getElementById('result')
    switch (score) {
        case -1:
            result.innerText = `You Lose!`
            break;
        case 0:
            result.innerText = `It's a Draw!`
            break;
        case 1:
            result.innerText = `You Win!`
            break;
    }

    let playerScore = document.getElementById('player-score')
    let hands = document.getElementById('hands')
    playerScore.innerText = `${Number(playerScore.innerText) + score}`
    hands.innerText = `👦🏻 ${playerChoice} vs 🤖 ${computerChoice}`
}

function onClickRockPaperScissors(playerChoice) {
    const computerChoice = getComputerChoice()
    const score = getResult(playerChoice.value, computerChoice)
    showResult(score, playerChoice.value, computerChoice)
}


function playGame() {
    let RockPaperScissorsButtons = document.querySelectorAll('.RockPaperScissorsButton')

    RockPaperScissorsButtons.forEach(RockPaperScissorsButton => {
        RockPaperScissorsButton.onclick = () => onClickRockPaperScissors(RockPaperScissorsButton)
    })

    let endGameButton = document.getElementById('endGameButton')
    endGameButton.onclick = () => endGame()
}

function endGame() {
    let playerScore = document.getElementById('player-score')
    let hands = document.getElementById('hands')
    let result = document.getElementById('result')

    playerScore.innerText = ''
    hands.innerText = ''
    result.innerText = ''
}

playGame()