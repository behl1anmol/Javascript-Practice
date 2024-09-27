import { exit } from "process";
import createPrompt from "prompt-sync";
let prompt = createPrompt();

let employee = {};
let firstName = prompt("First Name:");

if (!firstName) {
  console.error(`Invalid first name`);
  exit(1);
}
employee.firstName = firstName;

let lastName = prompt("Last Name");
if (!lastName) {
  console.error(`Invalid first name`);
  exit(1);
}
employee.lastName = lastName;

let startDateYear = prompt("Employee Start Year (1990-2023):");
startDateYear = Number(startDateYear);
if (!Number.isInteger(startDateYear)) {
  console.error(`Invalid start year`);
  exit(1);
}
if (startDateYear < 1990 || startDateYear > 2023) {
  console.log(`Enter a start date year within the correct range`);
}

let startDateMonth = prompt("Employee Start Month (1-12):");
startDateMonth = Number(startDateMonth);
if (!Number.isInteger(startDateMonth)) {
  console.error(`Invalid start Month`);
  exit(1);
}
if (startDateMonth < 1 || startDateMonth > 12) {
  console.log(`Enter a start date month within the correct range`);
}

let startDateDay = prompt("Employee Start Day (1-31):");
startDateDay = Number(startDateDay);
if (!Number.isInteger(startDateDay)) {
  console.error(`Invalid start Date`);
  exit(1);
}
if (startDateDay < 1 || startDateDay > 31) {
  console.log(`Enter a start date day within the correct range`);
}

employee.startDate = new Date(startDateYear, startDateMonth - 1, startDateDay);

let isActive = prompt(`is Employee active (yes or no):`);
if (!isActive != "yes" && !isActive == "no") {
  console.error(`Enter yes or no for employee status`);
  exit(1);
}
employee.isActive = isActive == "yes";

const json = JSON.stringify(employee, null, 2);
console.log(`Employee:: ${json}`);
