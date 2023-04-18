// Program to Check Prime Number

function isPrime(num) {
    if(num < 1)
      return `Please Enter a Valid Positive Number`;
    if(num === 1)
      return false;  
    for(let i = 2; i*i <= num; i++) {
        if(num % i == 0)
          return false;
    }  
    return true;
}

console.log(isPrime(-3));
console.log(isPrime(1));
console.log(isPrime(9));
console.log(isPrime(17));