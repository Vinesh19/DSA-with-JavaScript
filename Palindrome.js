// Program to Check Whether a String is Palindrome or Not

const palindrome = (string) => {
    const stringArray = string.split('');
    const reverseStringArray = stringArray.reverse();
    const reverseString = reverseStringArray.join('');

    if(string == reverseString)
       console.log('It is a palindrome');

    else  
       console.log('It is not a palindrome')
}

const prompt = require('prompt-sync')();

const string = prompt('Enter a string : ');
palindrome(string); 