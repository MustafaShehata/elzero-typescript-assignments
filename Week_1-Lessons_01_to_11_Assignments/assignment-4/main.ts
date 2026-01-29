// Assignment 04
let arr: (number | boolean[] | (string | (string | number)[])[])[];

// solution 1
arr = [1, 2, 3, 4, 5, [true, false], ["Sobhan Allah"], [[1, "Allah Akbar"]]];

console.log(arr);

arr = [];

// solution 2
// number
arr.push(100);

// boolean[]
arr.push([true, false, true]);

// (string | (string | number)[])[]
arr.push(["Hello", "TypeScript"]);

arr.push([
  "Text",
  [1, 2, "Three"],
  ["A", "B"],
]);

arr.push([
  ["Nested", 10],
  "Another String"
]);

console.log(arr);