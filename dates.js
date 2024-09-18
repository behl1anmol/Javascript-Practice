let date1 = new Date("2024-09-14");
console.log(`${date1}`);

let date2 = new Date("September 14, 2024");
console.log(date2);

let date3 = new Date();//now
console.log(date3);

let date4 = new Date("2024-09-14T02:30:04.312+05:30");
console.log(date4);

let date5 = new Date(2024,0,14,2,30,4);
console.log(date5);

//accessing elements of date
console.log(`Full year: ${date5.getFullYear()}`);
console.log(`Month (Zero indexed): ${date5.getMonth()}`);
console.log(`Date of month: ${date5.getDate()}`);
console.log(`Hours: ${date5.getHours()}`);

//milliseconds from epoch (1970)
let ticks = date5.getTime();
console.log(`${ticks}`);

let date6 = new Date(0);
console.log(`${date6}`);