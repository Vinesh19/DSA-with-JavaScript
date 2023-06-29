// Program to Find ASCII Value of Character

const prompt = require('prompt-sync')();

const string = prompt('Enter any Character : ');

const result = string.charCodeAt(0);

console.log(`The ASCII value of ${string} is ${result}`);