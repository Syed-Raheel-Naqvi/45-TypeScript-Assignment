function make_album(artist, title, tracks) {
    var album = { artist: artist, title: title, tracks: tracks };
    return album;
}
var album1 = make_album("Linkin Park", "Hybrid Theory", 13);
var album2 = make_album("Taylor Swift", "Red", 16);
var album3 = make_album("Justin Bieber", "Purpose", 19);
console.log(album1);
console.log(album2);
console.log(album3);
