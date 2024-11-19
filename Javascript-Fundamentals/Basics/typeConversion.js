let ageString ="41";
let ageNum = Number(ageString);
console.log(typeof(ageNum)); //returns  Number

let ageNewNum = new Number(ageString);
console.log(typeof(ageNewNum)); //returns Object which we do not want

//what about NaN
let ageString2 = "forty-one";
let ageNum2 = Number(ageString2);
console.log("Age String 2: "+ ageNum2) // returns NaN

let isInvalid = isNaN(ageNum2);
console.log(isInvalid);

//converting a value to boolean
let num1 = 1;
let num2 = 0;
let bool1 = Boolean(num1);
let bool2 = Boolean(num2);
console.log(`Num1=${bool1} Num2=${bool2}`);

let str1 = "Hello";
let bool3 = Boolean(str1);
let val1;
let bool4 = Boolean(val1);
console.log(`Bool 3: ${bool3} Bool 4: ${bool4} `);

//converting a boolean to a string
let bool5 = true;
console.log(`bool5: ${bool5}`);

//converting to JSON
let employee = {
  firstName: "David",
  lastName: "Tucker",
  birthdate: new Date("January1, 1982"),
  numYearsEmployment: 7,
  department: "Engineering",
  title: "CTO",
  isActive: true,
  salary: 100000
};

let jsonValue = JSON.stringify(employee);
console.log(jsonValue);
jsonValue = JSON.stringify(employee, null, 2);
console.log(`${jsonValue}`);

//convert value to object
let newEmployee = JSON.parse(jsonValue);
console.log(`${newEmployee}`);

//writing JSON directly
let jsonString =`{
"firstName" : "Smith",
"lastName" : "Jones"
}`
let obj = JSON.parse(jsonString);

//improper formatted JSON throws an error
let notJSON = "Hello";
let newObj = JSON.parse(notJSON);
