'use strict';

//SEECTING
const hour = document.querySelector('.hour');
const clicking = document.querySelector('.clicking');
const welcSms = document.querySelector('.welcome-sms');
const inputField = document.querySelector('.input-field');
const parentEl = document.querySelector('.parent-el');
const loginForm = document.querySelector('.login-form');
const logForm = document.querySelector('.log-form');
const logoutBtn = document.querySelector('.logout-btn');
console.log(inputField);
logForm.addEventListener('submit', function (e) {
  e.preventDefault();
  welcSms.textContent = ` Welcome ${inputField.value},good luck`;
  parentEl.classList.remove('hide-content');
  inputField.value = '';
  logForm.style.opacity = 0;
  welcSms.classList.remove('hide-welcome');
  clicking.addEventListener('input', function (e) {
    e.preventDefault();
    welcSms.classList.add('hide-welcome');
  });
});

logoutBtn.addEventListener('click', function (e) {
  e.preventDefault();
  parentEl.classList.add('hide-content');
  logForm.style.opacity = 1;
  welcSms.style.display = 'none';
});
let date;
setInterval(function () {
  date = new Date();
  const hours = date.getHours();
  const min = date.getMinutes();
  const sec = date.getSeconds();
  hour.textContent = `${hours} : ${min} : ${sec}`;
}, 1000);

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  //when there is no input
  if (!guess) {
    displayMessage('No number!');
    //when player wins
  } else if (guess === secretNumber) {
    displayMessage('Correct Number!');
    document.querySelector('.number').textContent = secretNumber;

    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
    //when guess is wrong
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? 'Too high!' : 'Too low!');
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      displayMessage('You lost the game!');
      document.querySelector('.score').textContent = 0;
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  displayMessage('Start guessing...');
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';

  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});
