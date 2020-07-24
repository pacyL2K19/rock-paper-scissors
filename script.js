/**
 * @author Pacifique LINJANJA
 */

const options = ['rock', 'paper', 'scissors'];
let playerResult = 0;
let computerResult = 0;
// DOM elements
let playBtn = document.getElementById('play-btn');
let playerResultDisplay = document.getElementById('playerResult');
let computerResultDisplay = document.getElementById('computerResult');
let finalResult = document.getElementById('pfinalResult');
let gameStatus = document.getElementById('game-status')

let computerPlay = () => {
    const randomPick = Math.floor(Math.random() * 3)
    try {
        return options[randomPick]
    } catch (e) {
        return 'Error'
    }
}

let playRound = (playerSelection, computerSelection) => {
    if (computerSelection === 'rock') {
        if (playerSelection === 'rock') {
            gameStatus.textContent = `You pick the same as your opponent, it's a DREAW`
        } else if (playerSelection === 'paper') {
            playerResult ++;
            gameStatus.textContent = `Your opponent picked ${computerSelection}; you WIN : paper beats rock`
        } else if (playerSelection === 'scissors') {
            computerResult ++;
            gameStatus.textContent = `Your opponent picked ${computerSelection}; you LOOSE : rock beats scissors`
        }
    } else if (computerSelection === 'paper') {
        if (playerSelection === 'paper') {
            gameStatus.textContent = `You pick the same as your opponent, it's a DRAW`
        } else if (playerSelection === 'scissors') {
            playerResult ++;
            gameStatus.textContent = `Your opponent picked ${computerSelection}; you WIN : scissor beats paper`
        } else if (playerSelection === 'rock') {
            computerResult ++;
            gameStatus.textContent = `Your opponent picked ${computerSelection}; you LOOSE : paper beats rock`
        }
    } else if (computerSelection === 'scissors') {
        if (playerSelection === 'scissors') {
            gameStatus.textContent = `You pick the same as your opponent, it's a DREAW`
        } else if (playerSelection === 'rock') {
            playerResult ++;
            gameStatus.textContent = `Your opponent picked ${computerSelection}; you WIN : rock beats scissors`
        } else if (playerSelection === 'paper') {
            computerResult ++;
            gameStatus.textContent = `Your opponent picked ${computerSelection}; you LOOSE : scissors beats paper`
        }
    }
}

let setResult = () => {
    playerResultDisplay.textContent = `Your Score is : ${playerResult}`;
    computerResultDisplay.textContent = `Your opponnent's result is ${computerResult}`
    if (computerResult > playerResult) {
        finalResult.textContent = `You finally LOOSE !`
    } else if (computerResult == playerResult) {
        finalResult.textContent = `It's a DRAW !`
    } else {
        finalResult.textContent = "You finally WIN !"
    }
}

playBtn.addEventListener('click', () => {
    let i = 0
    while (i < 5) {
        let playerSelection = prompt('Choose 1 for Rock, 2 for Paper or 3 for Scissors')
        if (playerSelection == 1) {
            playerSelection = 'rock'
            playRound (playerSelection, computerResult ())
        } else if (playerSelection == 2) {
            playerSelection = 'paper'
            playRound (playerSelection, computerResult ())
        } else if (playerSelection == 3) {
            playerSelection = 'scissor'
            playRound (playerSelection, computerResult ())
        } else {
            gameStatus.textContent = `You picked and invalid option, pick only between 1, 2, or 3 `
        }

        i ++
    }

    setResult ()
})