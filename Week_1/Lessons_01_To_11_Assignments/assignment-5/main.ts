// Assignment 05
/*
  Edit tsconfig file
  "allowUnreachableCode": false, // code after return gives you "Unreachable code detected"
  "noImplicitAny": true, // doesn't use any keyword and should specify Type
  "noUnusedLocals": true, //  unused variable gives an error
  "noUnusedParameters": true, // If you don't use the parameter and should you pass an argument to it
*/
function reportErrors(username, age: number) {
  let rank = "Professor";
  return `Username: ${username}`;
  console.log("We Will Not Reach Here"); // Unreachable code detected: it doesn't execute
}

console.log(reportErrors("Elzero", 40));