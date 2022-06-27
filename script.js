'use strict';
// GUESS MY NUMBER GAME

// Define state variables
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

// Define reusable functions to save repetitive code
const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

const displayScore = function (score) {
  document.querySelector('.score').textContent = score;
};

const displayNumber = function (number) {
  document.querySelector('.number').textContent = number;
};

// Define game behaviour when the 'Check!' button is clicked
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  // IF NO GUESS GIVEN
  if (!guess) {
    displayMessage('⛔ No number!');

    // IF GUESS IS CORRECT
  } else if (guess === secretNumber) {
    // update the display on screen
    displayMessage(' 🎉  Correct Number!');
    displayNumber(secretNumber);

    // alter the css styling
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';

    // update the high score
    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }

    // IF GUESS IS INCORRECT
  } else if (guess !== secretNumber) {
    if (score > 1) {
      // if player still has guesses left
      displayMessage(guess > secretNumber ? 'Too high!' : 'Too low!');
      score--;
      displayScore(score);
    } else {
      // if player reaches zero
      displayMessage('👎 You lost the game!');
      displayScore(0);
    }
  }
});

// Implement game reset when the 'Again!' button is clicked
document.querySelector('.again').addEventListener('click', function () {
  // Reset variables
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;

  // Restore initial display
  displayMessage('Start guessing...');
  displayNumber('?');
  displayScore(score);
  document.querySelector('.guess').value = '';

  // Restore background color and number width
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});
