'use strict';
// FOR REFERENCE ONLY!! SEE SCRIPT.JS FOR FINALISED PROJECT CODE

/* 
// SECTION 1: Initial understanding of DOM and experimentation

// selecting the message element from the page
console.log(document.querySelector('.message').textContent);

// DOM manipulation 

// change the text 'Start guessing..' to 'Correct number'
document.querySelector('.message').textContent = ' 🎉  Correct Number!';

// check that the text content has changed to 'Correct number!'
console.log(document.querySelector('.message').textContent);

// we use the classes in the html document to be able to select the HTML elements that we want to manipulate

// change the values of the text content in classes '.number' and '.score'
document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 10;

// to access the content of an input field, use .value
console.log(document.querySelector('.guess').value);
// it is currently empty, we now set it to 2
document.querySelector('.guess').value = 2;
// check that it's been set
console.log(document.querySelector('.guess').value);
 */

// SECTION 2: Application development

// Define the secret number (using a random number generator)
let secretNumber = Math.trunc(Math.random() * 20) + 1;

// Define a state variable to track the score and highscore
let score = 20;
let highscore = 0;

// Select button element (using querySelector method with '.check' class which is the more specific class out of 'btn check')
// Listen to a click event on this button (using addEventListener method) and define a function to be called when this event happens
document.querySelector('.check').addEventListener('click', function () {
  // save the input into a variable 'guess'
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  // Depending on the guess input, print a corresponding message to the screen and implement game logic:

  // IF NO GUESS GIVEN
  if (!guess) {
    document.querySelector('.message').textContent = '⛔ No number!';

    // IF GUESS IS CORRECT
  } else if (guess === secretNumber) {
    document.querySelector('.message').textContent = ' 🎉  Correct Number!';
    document.querySelector('.number').textContent = secretNumber;
    // Change the background color:
    // note: access body element by its name (not its class), we can do this since there's just one body
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';

    // Update the high score
    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }

    // IF GUESS TOO HIGH
  } else if (guess > secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = 'Too high!';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = '👎 You lost the game!';
      document.querySelector('.score').textContent = 0;
    }

    // IF GUESS TOO LOW
  } else if (guess < secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = 'Too low!';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = '👎 You lost the game!';
      document.querySelector('.score').textContent = 0;
    }
  }
});

// Add game reset functionality
// Select the element with the 'again' classes and attach a click event handler
document.querySelector('.again').addEventListener('click', function () {
  // Reset score variable
  score = 20;

  // Reset secretNumber variable
  secretNumber = Math.trunc(Math.random() * 20) + 1;

  // Restore initial conditions
  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('.number').textContent = '?';
  document.querySelector('.score').textContent = score;
  document.querySelector('.guess').value = '';

  // Restore background color and number width
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});
