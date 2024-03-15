function make_album(artist : string, title : string, tracks : number){
      let album = {artist, title, tracks};
   return album
}

let album1 = make_album("Linkin Park", "Hybrid Theory", 13);
let album2 = make_album("Taylor Swift", "Red", 16);
let album3 = make_album("Justin Bieber", "Purpose", 19);

console.log(album1);
console.log(album2);
console.log(album3);




