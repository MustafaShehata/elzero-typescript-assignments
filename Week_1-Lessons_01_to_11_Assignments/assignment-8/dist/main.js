"use strict";
function printInConsole(...all) {
    all.forEach(item => console.log(`The Value Is ${item} And Type Is ${typeof item}`));
    return "Done";
}
console.log(printInConsole(1, 2, 3, 4, 5));
console.log(printInConsole("A", "B", "C"));
console.log(printInConsole(true, false, false, true, true));
//# sourceMappingURL=main.js.map