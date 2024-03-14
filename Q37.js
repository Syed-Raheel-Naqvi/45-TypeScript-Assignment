"use strict";
function make_shirt(size = "Large", mesasage = "I love TypeScript") {
    console.log(`Making a ${size} t-shirt with the message ${mesasage} printed on it.`);
}
make_shirt(); // Default large and message
make_shirt("medium"); // Default message, medium size
make_shirt("small", "I love Coding"); //Custom message, small size
