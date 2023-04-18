// Program to Check if a number is Positive, Negative, or Zero

function check(num) {
    if(num === 0)
      return `The given number is Zero`;
    else if(num > 0)
      return `The given number is Positive`;
    else 
      return `The given number is Negative`;    
}

console.log(check(0));
console.log(check(10));
console.log(check(-5));

