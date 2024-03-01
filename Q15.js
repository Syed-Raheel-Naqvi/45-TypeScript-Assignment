"use strict";
let guestArr = ["Cristiano", "Kristen", "Dicaprio", "Tom Cruise"];
let cannotAttend = "Tom Cruise";
console.log(cannotAttend + " " + "can not make it for dinner.");
let newGuest = "Hamilton";
guestArr[guestArr.indexOf(cannotAttend)] = newGuest;
console.log(guestArr);
guestArr.map((items) => console.log(`Dear ${items}, you are cordinally invited to a dinner.`));
