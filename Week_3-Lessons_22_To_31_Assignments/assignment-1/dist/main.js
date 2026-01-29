"use strict";
let user = {
    id: 100,
    username: "Elzero",
    state: true,
    getName() {
        return this.username;
    }
};
user.id = 200;
user.id = "200";
user.state = false;
console.log(user.id);
console.log(user.state);
//# sourceMappingURL=main.js.map