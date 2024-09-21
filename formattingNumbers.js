//Rounding number to an integer
let num1 = 5.618345;
console.log(`Round: ${Math.round(num1)}`);
console.log(`Round: ${Math.ceil(num1)}`);
console.log(`Round: ${Math.floor(num1)}`);

//fixing number of decimal places
let fixed = num1.toFixed(3);
console.log(`Type of Fixed: ${typeof fixed} Fixed Number: ${fixed}`);

//Display in Locale Specific format
let num2 = 1_000_000;
console.log(`USA: ${num2.toLocaleString("en-US")}`);
console.log(`USA: ${num2.toLocaleString("el-EL")}`);
console.log(`USA: ${num2.toLocaleString("bg-BG")}`);
console.log(`USA: ${num2.toLocaleString("pa-PA")}`);

//Intl Format Currency
let salary = 100000;
let monthlySalary = salary / 12;
console.log(`Monthly Salary: ${monthlySalary.toFixed(2)}`);

let formatter1 = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
});
console.log(`US Dollars: ${formatter1.format(monthlySalary)}`);

let formatter2 = new Intl.NumberFormat("de-DE", {
  style: "currency",
  currency: "EUR",
});
console.log(`Euros : ${formatter2.format(monthlySalary)}`);

let formatter3 = new Intl.NumberFormat("ja-JA", {
  style: "currency",
  currency: "JPY",
});
console.log(`Yen: ${formatter3.format(monthlySalary)}`);

let formatter4 = new Intl.NumberFormat("zk-HK", {
  style: "currency",
  currency: "HKD",
});
console.log(`Hong Kong Dollars: ${formatter4.format(monthlySalary)}`);

let formatter5 = new Intl.NumberFormat("en-IN", {
  style: "currency",
  currency: "INR",
});
console.log(`Rupee: ${formatter5.format(monthlySalary)}`);
