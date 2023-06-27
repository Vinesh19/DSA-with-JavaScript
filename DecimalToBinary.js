// Program to Convert Decimal to Binary

const prompt = require('prompt-sync')();

const number = parseInt(prompt('Enter a Decimal Number '));

const result = number.toString(2);

console.log(`Binary of number ${number} is ${result}`);
