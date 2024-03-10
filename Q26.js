"use strict";
let alien_color = "green";
//This version runs the "if" block :
if (alien_color == "green") {
    console.log("You just earned 5 points");
}
else {
    console.log("You just earned 10 points");
}
//This version runs the "else" block :
alien_color = "yellow";
if (alien_color == "green") {
    console.log("You just earned 5 points");
}
else {
    console.log("You just earned 10 points");
}
