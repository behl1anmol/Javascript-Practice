//Mathematical Operators

//Addition/Subtraction
let val1 = 2 + 3;
console.log(`${val1}`);

//Division
let val5 = 21 / 9;
console.log(`${val5}`);

//Multiplication
let val6 = 21 * 33;
console.log(`${val6}`);

//Remainder
let val7 = 21 % 9;
console.log(`${val7}`);

//Exponentiation
let val8 = 21 ** 2;
console.log(`${val8}`);

//Increment/Decrement
let val9 = 1;
++val9;
console.log(`val9: ${val9}`);
let val10 = val9++;
console.log(`val10: ${val10}`);
console.log(`val9: ${val9}`);

let val11 = 1;
--val11;
console.log(`val11: ${val11}`);
let val12 = val11--;
console.log(`val10: ${val12}`);
console.log(`val9: ${val11}`);

//Assignment Operators (+=, -=, *=, /=, **=, %=)
let val13 = 3;
val13 += 3;
console.log(`${val13}`);

let val14 = 3;
val14 **= 3;
console.log(`${val14}`);

let val15 = 3;
val15 %= 2;
console.log(`${val15}`);

//comparison Operators
let val16 = 7 < 5;
console.log(`${val16}`);

//Equality
let val17 = 3 === 3;
console.log(`val17: ${val17}`);

let val18 = 3 !== 2;
console.log(`val18: ${val18}`);

// primitive equality (passed by value)
let str1 = "Hello";
let str2 = "Hello";
let val19 = str1 == str2;
console.log(`val19: ${val19}`);

// Object equality (passed by reference)
let obj1 = {};
let obj2 = {};
let val20 = obj1 == obj2;
console.log(`val20: ${val20}`);
let obj3 = obj2;
let val21 = obj2 == obj3;
console.log(`val21: ${val21}`);

//Strict Equality vs Loose Equality
let val22 = "42" == 42;
let val23 = "42" === 42;
console.log(`val22: ${val22} val23: ${val23}`);

let val24 = undefined == null;
let val25 = undefined === null;
console.log(`val24: ${val24} val25: ${val25}`);
