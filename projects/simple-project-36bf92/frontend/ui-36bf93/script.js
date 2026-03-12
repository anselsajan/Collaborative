// script.js
const rockButton = document.getElementById('rock');
const paperButton = document.getElementById('paper');
const scissorsButton = document.getElementById('scissors');
const resultParagraph = document.getElementById('result');

const choices = ['rock', 'paper', 'scissors'];

rockButton.addEventListener('click', () => playGame('rock'));
paperButton.addEventListener('click', () => playGame('paper'));
scissorsButton.addEventListener('click', () => playGame('scissors'));

function playGame(userChoice) {
    const computerChoice = choices[Math.floor(Math.random() * choices.length)];

    if (userChoice === computerChoice) {
        resultParagraph.textContent = `It's a tie! Both chose ${userChoice}.`;
    } else if (
        (userChoice === 'rock' && computerChoice === 'scissors') ||
        (userChoice === 'scissors' && computerChoice === 'paper') ||
        (userChoice === 'paper' && computerChoice === 'rock')
    ) {
        resultParagraph.textContent = `You win! ${userChoice} beats ${computerChoice}.`;
    } else {
        resultParagraph.textContent = `You lose! ${computerChoice} beats ${userChoice}.`;
    }
}
