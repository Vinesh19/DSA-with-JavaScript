function swap(num1, num2) {
    console.log("Num1 = ", num1, " Num2 = ",num2);
    let temp = num1;
        num1 = num2;
        num2 = temp;
    console.log(`After Swapping \n Num1 = ${num1}, Num2 = ${num2}`);    
}

swap(2,3)


