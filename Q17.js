"use strict";
let guest = ['Kristen', 'Cristiano', 'Novak', 'Ozil', 'Hamilton', 'Elon', "Dicaprio"];
console.log("Sorry we can't arrange big table, only two people can be invited for dinner.");
while (guest.length > 2) {
    let removeGuest = guest.pop();
    console.log(`Sorry, ${removeGuest} you're no longer invited for dinner.`);
}
guest.forEach((guest) => {
    console.log(`Dear ${guest}, you're still invited to the dinner.`);
});
guest.splice(0, 2);
console.log(guest);
