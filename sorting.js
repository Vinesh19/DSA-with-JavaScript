// Program to Sort Words in Alphabetical Order

const prompt = require('prompt-sync')();
const sentence = prompt('Enter a sentence : ');

const words = sentence.split(' ');
words.sort();

console.log(`Sorted words are : ${words.join(' ')}`)
