// Program to Print All Prime Numbers in an Interval

const PrimeInRange = (lowerNumber,higherNumber) => {
    for (let i = lowerNumber; i <= higherNumber; i++) {
        let flag = 0;
    
        // looping through 2 to user input number
        for (let j = 2; j < i; j++) {
            if (i % j == 0) {
                flag = 1;
                break;
            }
        }
    
        // if number greater than 1 and not divisible by other numbers
        if (i > 1 && flag == 0) {
            console.log(i);
        }
    }
}

PrimeInRange(1,9);
console.log('\n');
PrimeInRange(10,25);