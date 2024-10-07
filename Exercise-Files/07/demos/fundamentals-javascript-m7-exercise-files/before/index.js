// Import Sample Data
import employees from "./data.json" assert { type: "json" };

import createPrompt from "prompt-sync";
let prompt = createPrompt();

//an arrow function to log the employee object using Object entries and foreach(similar to foreach in)
const logEmployee = (employee) => {
  Object.entries(employee).forEach((entry) => {
    console.log(`${entry[0]} : ${entry[1]}`);
  });
};

function getInput(promptText, validator, transformer) {
  let value = prompt(promptText);

  if (validator && !validator(value)) {
    console.error(`--Invalid Input`);
    process.exit(1);
  }

  if (transformer) {
    return transformer(value);
  }

  return value;
}

// Validater function -----------------------------

const isStringInputValid = (input) => (input ? true : false);

const isEnumInputValid = (input) => {
  return input == isActiveEnum.YES || input == isActiveEnum.NO;
};

const isDateValid = function (input) {
  let numValue = Number(input);
  if (!Number.isInteger(numValue)) return false;

  if (numValue > 1990 && numValue < 2023) {
    return true;
  } else if (numValue > 1 || numValue < 12) {
    return true;
  } else if (numValue > 1 || numValue < 31) {
    return true;
  }
  return false;
};
// Application Commands---------------------

// Get the command the user wants to exexcute
const command = process.argv[2].toLowerCase();
const isActiveEnum = Object.freeze({
  NO: 0,
  YES: 1,
});

function listEmployees() {
  console.log(`Employee List ----------------------------`);
  console.log("");

  employees.forEach((e) => {
    logEmployee(e);
    prompt(`Press enter to continue...`);
  });

  console.log(`Employee list completed`);
}

function addEmployee(
  firstName,
  lastName,
  startDateYear,
  startDateMonth,
  startDateDay,
  isActive
) {
  let employee = {};

  employee.firstName = firstName;
  employee.lastName = lastName;

  // Date elements are correct, let's create the date
  employee.startDate = new Date(
    startDateYear,
    startDateMonth - 1,
    startDateDay
  );

  employee.isActive = isActive;
  const json = JSON.stringify(employee, null, 2);
  console.log(`Employee: ${json}`);
}

function getUserInputEmployeeDetails() {
  let firstName = getInput("First Name: ", isStringInputValid);

  let lastName = getInput("Last Name: ", isStringInputValid);

  let startDateYear = getInput(
    "Employee Start Year (1990-2023): ",
    isDateValid
  );

  let startDateMonth = getInput(
    "Employee Start Date Month (1-12): ",
    isDateValid
  );

  let startDateDay = getInput("Employee Start Date Day (1-31): ", isDateValid);

  let isActive = getInput(
    "Is employee active (0 or 1): ",
    isEnumInputValid,
    (i) => i == isActiveEnum.YES
  );

  return [
    firstName,
    lastName,
    startDateYear,
    startDateMonth,
    startDateDay,
    isActive,
  ];
}

function searchById(id) {
  return employees.find((e) => e.id === id);
}

switch (command) {
  case "list":
    listEmployees();
    break;

  case "add":
    console.log(`Add Employee -----------------------------`);
    console.log("");
    const [
      firstName,
      lastName,
      startDateYear,
      startDateMonth,
      startDateDay,
      isActive,
    ] = getUserInputEmployeeDetails();
    // Output Employee JSON
    addEmployee(
      firstName,
      lastName,
      startDateYear,
      startDateMonth,
      startDateDay,
      isActive
    );
    break;
  case "search-by-id":
    let id = getInput(
      "Enter ID (+ve): ",
      (i) => !Number.isInteger(i) && Number(i) >= 0,
      Number
    );
    let emp = searchById(id);
    
    if (emp) {
      logEmployee(emp);
    } else {
      console.log("No results...");
    }
    break;

  default:
    console.log("Unsupported command. Exiting...");
    process.exit(1);
}
