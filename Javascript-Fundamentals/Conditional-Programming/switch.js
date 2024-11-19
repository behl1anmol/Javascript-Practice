let employee = {
  firstName: "David",
  lastName: "Tucker",
  startDates: new Date(2016, 2, 3),
  numYearService: 7,
  isActive: true,
  department: "Engineering",
  title: "VP Engineering",
};

switch (employee.department) {
  case "Engineering":
    console.log(`Meet in Building 1`);
    break;
  case "Marketing":
    console.log(`Meet in Building 2`);
    break;
  case "HR":
    console.log(`Meet in Building 1`);
    break;
  default:
    console.log(`You are not a part of meeting`);
}

switch (employee.department) {
  case "Engineering":
  case "HR":
    console.log(`Meet in Building 1`);
    break;
  case "Marketing":
    console.log(`Meet in Building 2`);
    break;
  default:
    console.log(`You are not a part of meeting`);
}
