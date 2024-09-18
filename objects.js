//object literal
let obj1 = {};

//using constructor
let obj2 = new Object();

//populating
obj1.firstName = "David";
obj1.lastName ="Tucker";
obj1.isActive = true;

console.log(obj1);

let obj3 = {
  firstName : "Andrew",
  lastName : "Smith",
  "Is Active" : true
  
  };
console.log(obj3);
console.log(obj3.firstName);
console.log(obj3["Is Active"]);

//deleting 
delete obj3["Is Active"];
console.log(obj3);

//passing objects
obj4 = obj3;
obj4.firstName = "Chad";
console.log(obj3);;