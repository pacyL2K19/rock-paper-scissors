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


let computerPlay = () => {
    const randomPick = Math.floor(Math.random() * 3)
    try {
        return options[randomPick]
    } catch (e) {
        return 'Error'
    }
}