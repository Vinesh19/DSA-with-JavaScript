// Finding LCM of GIven Numbers

const prompt = require('prompt-sync')();
let num1 = parseInt(prompt("Enter First Number "));
let num2 = parseInt(prompt("Enter Second Number "))

const LCM = (first,second) => {
    let result = Math.max(first , second);
    while(true) {
        if((result % first ==0) && (result % second == 0))
         return `LCM of the numbers are ${result} `;
        
         result++;
    }
}

console.log(LCM(num1,num2));