// Program to Display Fibonacci Sequence Using Recursion

const fibonacci = (n) => {
     if(n  < 2)
       return n;

     return fibonacci(n-1) + fibonacci(n-2);  
}

const prompt = require('prompt-sync')();
let number = parseInt(prompt('Enter number of terms: '));

if(number < 0)
 console.log('Enter a positive number');

 else{
    for(let i=0; i<number; i++)
      console.log(fibonacci(i));
 }
