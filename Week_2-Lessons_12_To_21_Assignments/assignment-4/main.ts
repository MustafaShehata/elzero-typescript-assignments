// Assignment 04
function yesOrNo(val: number | string): boolean | string {
  if(typeof(val) !== "number"){
    return "Error";
  }
  return val>10;
}

// Do Not Edit Here
console.log(yesOrNo("100")); // Error
console.log(yesOrNo(30)); // True
console.log(yesOrNo(8)); // False
