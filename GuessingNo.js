//  Program to Guess a Random Number

function guessNumber() {
    const prompt = require('prompt-sync')();
    let number = parseInt(prompt('Guess a number from 1 to 10 : '));

    const random = Math.floor(Math.random() * 10) + 1;

    while(number !== random)
      number = parseInt(prompt('Guess a number from 1 to 10: '));

    if(number == random)
      console.log('You guessed the correct number.');
}


guessNumber();