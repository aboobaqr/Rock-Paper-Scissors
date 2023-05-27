'use strict';
// Selecting elements
const displayedMove = document.querySelector('.hidden');
const playerDisplay = document.querySelector('.player-display');
const compDisplay = document.querySelector('.comp-display');
const intro = document.querySelector('.intro');
const message = document.querySelector('.message');
let playerScoreE = document.querySelector('.player-score').textContent;
let tieScoreE = document.querySelector('.tie').textContent;
let compScoreE = document.querySelector('.computer-score').textContent;

const rockBtn = document.querySelector('.rock');
const paperBtn = document.querySelector('.paper');
const scissorsBtn = document.querySelector('.scissors');
const resetBtn = document.querySelector('.reset-btn');

let computerMove,
  result = '';
let tie = 0;
let playerScore = 0;
let compScore = 0;

const generateAndDisplay = function () {
  // Displaying the move
  displayedMove.classList.remove('hidden');
  intro.classList.add('hidden');
  message.classList.remove('hidden');

  // Generating a move for the computer
  const randomNumber = Math.trunc(Math.random() * 3) + 1;
  if (randomNumber === 1) {
    computerMove = 'rock';
    compDisplay.src = './img/rock-emoji.png';
  } else if (randomNumber === 2) {
    computerMove = 'paper';
    compDisplay.src = './img/paper-emoji.png';
  } else if (randomNumber === 3) {
    computerMove = 'scissors';
    compDisplay.src = './img/scissors-emoji.png';
  }
};

rockBtn.addEventListener('click', function () {
  generateAndDisplay();
  playerDisplay.src = './img/rock-emoji.png';
  rockBtn.classList.add('active');
  paperBtn.classList.remove('active');
  scissorsBtn.classList.remove('active');
  // Comparing computer and player moves

  if (computerMove === 'rock') {
    result = 'Tie!';
    document.querySelector(
      '.message'
    ).textContent = `You picked rock, computer picked ${computerMove}. ${result}`;
    tie += 1;
    document.querySelector('.tie').textContent = tie;
  } else if (computerMove === 'paper') {
    result = 'You lost!';
    document.querySelector(
      '.message'
    ).textContent = `You picked rock, computer picked ${computerMove}. ${result}`;
    compScore += 1;
    document.querySelector('.computer-score').textContent = compScore;
  } else if (computerMove === 'scissors') {
    result = 'You won!';
    document.querySelector(
      '.message'
    ).textContent = `You picked rock, computer picked ${computerMove}. ${result}`;
    playerScore += 1;
    document.querySelector('.player-score').textContent = playerScore;
  }
});

paperBtn.addEventListener('click', function () {
  generateAndDisplay();
  playerDisplay.src = './img/paper-emoji.png';
  rockBtn.classList.remove('active');
  paperBtn.classList.add('active');
  scissorsBtn.classList.remove('active');

  if (computerMove === 'rock') {
    result = 'You won!';
    document.querySelector(
      '.message'
    ).textContent = `You picked paper, computer picked ${computerMove}. ${result}`;
    playerScore += 1;
    document.querySelector('.player-score').textContent = playerScore;
  } else if (computerMove === 'paper') {
    result = 'Tie!';
    document.querySelector(
      '.message'
    ).textContent = `You picked paper, computer picked ${computerMove}. ${result}`;
    tie += 1;
    document.querySelector('.tie').textContent = tie;
  } else if (computerMove === 'scissors') {
    result = 'You lost!';
    document.querySelector(
      '.message'
    ).textContent = `You picked paper, computer picked ${computerMove}. ${result}`;
    compScore += 1;
    document.querySelector('.computer-score').textContent = compScore;
  }
});

scissorsBtn.addEventListener('click', function () {
  generateAndDisplay();
  playerDisplay.src = './img/scissors-emoji.png';
  rockBtn.classList.remove('active');
  paperBtn.classList.remove('active');
  scissorsBtn.classList.add('active');

  if (computerMove === 'rock') {
    result = 'You lost!';
    document.querySelector(
      '.message'
    ).textContent = `You picked scissors, computer picked ${computerMove}. ${result}`;
    compScore += 1;
    document.querySelector('.computer-score').textContent = compScore;
  } else if (computerMove === 'paper') {
    result = 'You won!';
    document.querySelector(
      '.message'
    ).textContent = `You picked scissors, computer picked ${computerMove}. ${result}`;
    playerScore += 1;
    document.querySelector('.player-score').textContent = playerScore;
  } else if (computerMove === 'scissors') {
    result = 'Tie!';
    document.querySelector(
      '.message'
    ).textContent = `You picked scissors, computer picked ${computerMove}. ${result}`;
    tie += 1;
    document.querySelector('.tie').textContent = tie;
  }
});

resetBtn.addEventListener('click', function () {
  displayedMove.classList.add('hidden');
  intro.classList.remove('hidden');
  message.classList.add('hidden');

  tie = 0;
  playerScore = 0;
  compScore = 0;

  document.querySelector('.tie').textContent = tie;
  document.querySelector('.player-score').textContent = playerScore;
  document.querySelector('.computer-score').textContent = compScore;

  rockBtn.classList.remove('active');
  paperBtn.classList.remove('active');
  scissorsBtn.classList.remove('active');
});
