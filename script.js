/**
 * @author Pacifique LINJANJA
 */

const options = ['rock', 'paper', 'scissors'];
let scoreOfPlayer = 0;
let scoreOfComputer = 0;
// DOM elements
let playBtn = document.getElementById('play-btn');
let playerResult = document.getElementById('playerResult');
let computerResult = document.getElementById('computerResult');
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