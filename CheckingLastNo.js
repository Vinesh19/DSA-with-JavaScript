// Program to Check if the Numbers Have Same Last Digit

const CheckLastDigit = (first,second) => {
    let l1 = first.length;
    let l2 = second.length;

    if(first[l1-1] == second[l2-1])
      return `Last Digits are Same`;

    return `Last Digits are Not Same`;  
}

const prompt = require('prompt-sync')();

console.log('Enter two Numbers to compare last Digit');

const num1 = prompt('Enter first number');
const num2 = prompt('Enter second number');

console.log(CheckLastDigit(num1,num2));