// Program to find Factors of a Number

const Factor = (n) => {
    let s = "";
    for(let i=1; i<=n; i++)
      if(n % i === 0)
        s += i + " ";

    return s;    
}


const  prompt = require('prompt-sync')();

let number = parseInt(prompt('Enter any number '));
console.log(`The Factors of ${number} are `);
console.log(Factor(number))