//Rounding number to an integer
let num1 = 5.618345;
console.log(`Round: ${Math.round(num1)}`);
console.log(`Round: ${Math.ceil(num1)}`);
console.log(`Round: ${Math.floor(num1)}`);

//fixing number of decimal places
let fixed = num1.toFixed(3);
console.log(`Type of Fixed: ${typeof(fixed)} Fixed Number: ${fixed}`);
