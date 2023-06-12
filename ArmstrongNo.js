// Program to check if a number is Armstrong or Not

const ArmstrongNo = (num) => {
    const numberOfDigits = num.length;
    let sum = 0;
    num = parseInt(num);
    let temp = parseInt(num);

    while(temp) {
        let remainder = temp % 10;

        sum += remainder ** numberOfDigits;

        temp = parseInt(temp/10);
    }

    if(sum === num)
      console.log(`${num} is an Armstrong number.`);
    else
      console.log(`${num} is not an Armstrong number.`);
}

const prompt = require("prompt-sync")();
let number = prompt("Enter any Number ");
ArmstrongNo(number);

