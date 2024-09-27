// Array of Data
const names = ["David", "Kim", "Steve", "Katie"];

// Quick Example of a for loop
for (let i = 0; i < names.length; i++) {
  console.log(`Name: ${names[i]}`);
}

// Using a for...of loop
for (let name of names) {
  console.log(`Name: ${name}`);
}

// Array of Complex Objects
import employees from "./data.json" assert { type: "json" };

const employee = employees[0];
for (let property in employee) {
  console.log(`${property}: ${employee[property]}`);
}

console.log(`
-------------------
`);

// Bringing both approaches together
for (let emp of employees) {
  for (let property in emp) {
    console.log(`${property}: ${emp[property]}`);
  }
  console.log("--");
}
console.log("-------");

//iterates over each element of employees JSON
for (let emp of employees) {
  console.log(employees);
}

//THIS LOOP emp contains the index value
for (let empIdx in employees) {
  console.log(empIdx);
}
//this loop prints employee at ith index
for (let empIdx in employees) {
  console.log(employees[empIdx]);
}
