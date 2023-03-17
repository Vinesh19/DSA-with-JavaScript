//Program to Convert Celsius to Fahrenheit

function convert(Celsius) {
    let Fahrenheit;
    Fahrenheit = (Celsius * (9/5)) + 32;
    return Fahrenheit
}

console.log(convert(30)+" F");
console.log(convert(40)+" F");
console.log(convert(50)+" F");

