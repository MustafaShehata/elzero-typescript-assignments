"use strict";
function yesOrNo(val) {
    if (typeof (val) !== "number") {
        return "Error";
    }
    return val > 10;
}
console.log(yesOrNo("100"));
console.log(yesOrNo(30));
console.log(yesOrNo(8));
//# sourceMappingURL=main.js.map