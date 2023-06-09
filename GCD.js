// Program to Find HCF or GCD

const prompt = require('prompt-sync')();
console.log("Enter two numbers to find their GCD");

let num1 = parseInt(prompt("Enter first Number "));
let num2 = parseInt(prompt("Enter second Number "));

function GCD(first,second) {
   if(second == 0)
     return  `GCD of numbers is ${first} `;
   else 
      return GCD(second, first%second);  
}

console.log(GCD(num1,num2));
