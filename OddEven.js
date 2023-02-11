function OddEven(number) {     //Defining function to find odd or even
    if(number % 2 === 0)
        console.log(`The given number ${number} is Even`);
    else 
        console.log(`The given number ${number} is Odd`);    
}

for(let i = 1; i <= 5; i++)   // Using for loop for getting different numbers
    OddEven(i);              // Inside for loop, function OddEven is calling till condition gets false. 