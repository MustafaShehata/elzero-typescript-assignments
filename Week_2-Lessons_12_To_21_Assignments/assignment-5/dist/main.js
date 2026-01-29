"use strict";
function isHeOld(age) {
    if (typeof (age) !== "number")
        return "Error";
    return age > 40 ? "Yes" : "No";
}
console.log(isHeOld("100"));
console.log(isHeOld(45));
console.log(isHeOld(30));
//# sourceMappingURL=main.js.map