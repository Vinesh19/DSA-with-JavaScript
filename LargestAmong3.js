// Program to find largest among three numbers

function large(a,b,c) {
    if(a>b && a>c)
      return (`1st Number ${a} is the largest`);

    else if(b>a && b>c)
      return (`2nd Number ${b} is the largest`);
      
    else 
      return (`3rd Number ${c} is the largest`);  
}

console.log(large(10,20,30));
console.log(large(15,25,5));
console.log(large(50,30,40));