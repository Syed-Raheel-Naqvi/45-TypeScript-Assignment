let guestArr: string [] = ["Cristiano", "Kristen", "Dicaprio", "Tom Cruise"];

let cannotAttend: string = "Tom Cruise";
console.log(cannotAttend + " " + "can not make it for dinner.");

let newGuest: string = "Hamilton";
guestArr[guestArr.indexOf(cannotAttend)] = newGuest
console.log(guestArr);

guestArr.map((items) =>
console.log(`Dear ${items}, you are cordinally invited to a dinner.`));


