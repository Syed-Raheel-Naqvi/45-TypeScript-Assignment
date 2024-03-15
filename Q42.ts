let magicians = ["David Coverfield", "Criss Angel", "Alice"]

//This function shows "Magicians" name
function show_magician(magicians: string[]) {
    magicians.forEach(magician => {
        console.log(magician);
    })
}
//This function concatanate "the Great" with each Magician
function make_great(magicians: string[]) {
    for (let i = 0; i < magicians.length; i++) {
        magicians[i] = magicians[i] + " the Great";
    }
}
make_great(magicians) // Modifies the original array
show_magician(magicians) // Shows modified names
