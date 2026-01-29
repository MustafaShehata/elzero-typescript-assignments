"use strict";
let POST;
POST = [100, 200, "Title"];
POST = ["Title", 100, true];
POST = [100, "Title", true];
POST.push("Elzero");
const ID = POST[0];
const TITLE = POST[1];
const STATE = POST[2];
console.log(ID);
console.log(TITLE);
console.log(STATE);
//# sourceMappingURL=main.js.map