// Program to find sum upto n number

const sumUptoN = (n) => {
   return Math.floor((n * (n+1))/2);
}

const prompt = require('prompt-sync')();

const Show = prompt('Enter any number');
let number = parseInt(Show)
console.log(`Sum upto ${Show} is ${sumUptoN(number)}`);
