// Assignment 08
const user: {
  username: string, // remove readonly to edit/change username value
  age: (number | string), // accept age number or string value
  website?: string,
  skills: {
    frontEnd: string[],
    backEnd: (string | number)[] // accept array of number and string
  }
} = {
  username: "Elzero",
  age: 40,
  website: "Elzero.org",
  skills: {
    frontEnd: ["HTML", "CSS", "JS"],
    backEnd: ["PHP", "Python"]
  }
}

// We Need To Remove Error From This Edits
user.username = "Osama";
user.age = "40";
user.skills.backEnd.push(100);

// Only for testing
console.log(user.username);
console.log(user.age);
console.log(user.skills.backEnd);