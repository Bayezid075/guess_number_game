// 'use strict'; scripted by Bayezid -- @ BValid
// example of dom manipulating
console.log('example of dom manipulating ');
// console.log(document.querySelector('.message').textContent = 'hello world');
// // document.querySelector('.message').textContent = '🎉 Correct Number!';

// document.querySelector('.score').textContent = '150'
// document.querySelector('.number').textContent = '13'
// console.log( document.querySelector('.guess').value)
//  document.querySelector('.guess').value = '40'

let secretNum = Math.trunc(Math.random() * 20 + 1);
// console.log(secretNum)
//  let chehh = document.querySelector('.number').textContent = secretNum;

var score = 20;
let highscore = 0;

let hello = document
  .querySelector('.check')
  .addEventListener('click', function () {
    const guessNum = Number(document.querySelector('.guess').value);

    //  console.log(guessNum ,typeof guessNum)

    if (!guessNum) {
      document.querySelector('.message').textContent =
        ' 📛 This is not a number';
    } else if (secretNum === guessNum) {
      document.querySelector('.number').textContent = secretNum;

      document.querySelector('.message').textContent = '!!! Correct Number 💥';
      score++;
      document.querySelector('.score').textContent = score;

      document.querySelector('body').style.backgroundColor = 'green';

      if (score > highscore) {
        highscore = score;
        document.querySelector('.highscore').textContent = highscore;
      }
    } else if (secretNum < guessNum) {
      if (score > 1) {
        document.querySelector('.message').textContent =
          'Number is too high ❗';
        score--;
        document.querySelector('.score').textContent = score;
      } else {
        document.querySelector('.message').textContent = 'You Lost The game 😰';
        document.querySelector('.score').textContent = '0';
      }
    } else if (secretNum > guessNum) {
      if (score > 1) {
        document.querySelector('.message').textContent = 'Number is too low ❗';
        score--;
        document.querySelector('.score').textContent = score;
      } else {
        document.querySelector('.message').textContent = 'You Lost The game 😰';
        document.querySelector('.score').textContent = '0 😰';
      }
    }

    document.querySelector('.again').addEventListener('click', function () {
      score = 20;
      secretNum = Math.trunc(Math.random() * 20 + 1);
      document.querySelector('.message').textContent = 'Start guessing ... ';
      document.querySelector('.score').textContent = score;
      document.querySelector('.guess').value = '';
      document.querySelector('body').style.backgroundColor = '#222';
      document.querySelector('.number').textContent = '?';
    });

    console.log(secretNum);
  });
