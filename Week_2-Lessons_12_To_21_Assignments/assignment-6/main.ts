// Assignment 06

// =========== Solution 1 ===========

// let post: readonly [number, string, boolean];

// post = [100, 200, "Title"]; // Error
// post = ["Title", 100, true]; // Error
// post = [100, "Title", true]; // Good

// post.push("Elzero"); // Error => Cant Add

// // Create Destructuring Here
// const [id, title, state] = post;

// // Do Not Edit Here
// console.log(id); // 100
// console.log(title); // "Title"
// console.log(state); // true


// =========== Solution 2 ===========

type postProps = readonly [number, string, boolean];

let POST: postProps;

POST = [100, 200, "Title"]; // Error
POST = ["Title", 100, true]; // Error
POST = [100, "Title", true]; // Error

POST.push("Elzero"); // Error => Can't Add

// Create Destructuring Here
const ID = POST[0];
const TITLE = POST[1];
const STATE = POST[2];

// Do Not Edit Here
console.log(ID); // 100
console.log(TITLE); // "Title"
console.log(STATE); // true
