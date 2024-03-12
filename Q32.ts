let current_users : string [] = ["raheel", "haider", "farhan", "ahsan", "tariq"];

let new_users : string [] = ["faysal", "TARIQ", "junaid", "RAHEEL", "ammar"];

new_users.forEach(newUser => {
    if (current_users.some(currentUser => currentUser.toLowerCase() === newUser.toLowerCase())) {
        console.log(`${newUser} will need to enter a new username.`);
    } else {
        console.log(`${newUser} is available.`);
    }
});