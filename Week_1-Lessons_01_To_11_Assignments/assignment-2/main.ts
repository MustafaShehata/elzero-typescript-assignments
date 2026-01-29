// Assignment 02
function calculate(numOne: number, numTwo: number): number {
  return numOne + numTwo;
}

console.log(calculate(10, 20));        //  30
console.log(calculate("10", "20"));    //  Type Error: the type of 2 parameters in calculate fn is "number" not "string"
console.log(calculate(+true, +true));  //  2
