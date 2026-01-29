// Assignment 05
type custom = string;

function isHeOld(age: number | string) : custom {
  if(typeof(age) !== "number") return "Error";
  return age > 40? "Yes" : "No";
}

// Do Not Edit Here
console.log(isHeOld("100")); // Error
console.log(isHeOld(45)); // "Yes"
console.log(isHeOld(30)); // "No"
