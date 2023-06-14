// Program to Find Sum of Natural Numbers Using Recursion

function RecursiveSum(n) {
    if(n < 0) 
      return `Enter a Positive Number`;
    else if(n == 0)
      return 0;
    else 
      return n + RecursiveSum(n-1);     
}

const prompt = require('prompt-sync')();
const number = parseInt(prompt('Enter any Number '));
console.log(`Sum upto ${number} is ${RecursiveSum(number)}`);