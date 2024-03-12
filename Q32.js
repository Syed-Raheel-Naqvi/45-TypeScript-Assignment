"use strict";
let current_users = ["raheel", "haider", "farhan", "ahsan", "tariq"];
let new_users = ["faysal", "TARIQ", "junaid", "RAHEEL", "ammar"];
new_users.forEach(newUser => {
    if (current_users.some(currentUser => currentUser.toLowerCase() === newUser.toLowerCase())) {
        console.log(`${newUser} will need to enter a new username.`);
    }
    else {
        console.log(`${newUser} is available.`);
    }
});
