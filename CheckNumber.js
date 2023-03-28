function check(num) {
    if(num === 0)
      console.log(`The given number is Zero`);
    else if(num > 0)
      console.log(`The given number is Positive`);
    else 
      console.log(`The given number is Negative`);    
}

console.log(check(0));
console.log(check(10));
console.log(check(-5));

