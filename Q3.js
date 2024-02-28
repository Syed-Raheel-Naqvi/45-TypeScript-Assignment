"use strict";
let personName = "Cristiano Ronaldo";
console.log("lowercase:", personName.toLowerCase());
console.log("upercase:", personName.toUpperCase());
console.log("titlecase:", personName.replace(/\b\w/g, c => c.toUpperCase()));
