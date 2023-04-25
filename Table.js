// Program to Display the Multiplication Table

function table(n) {
    for(let i = 1; i <= 10; i++)
      console.log(`${n} * ${i} = ${n*i}`);
}

table(3);
console.log("\n")
table(5);