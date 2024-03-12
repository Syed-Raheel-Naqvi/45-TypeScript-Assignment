"use strict";
let usernames = ["admin", "Raheel", "Cristiano", "Elon Musk", "Bill Gates"];
//Array is empty now    
usernames = [];
if (usernames.length == 0) {
    console.log(`\n We need to find some users!`);
}
else {
    for (let i = 0; i < usernames.length; i++) {
        console.log(usernames);
    }
}
//Removing all usernames from Array ensures the message "We need to find some users!" is printed.   
