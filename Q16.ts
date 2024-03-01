let guestArr: string[] = ["Cristiano", "Kristen", "Hamilton", "Dicaprio"];

let beginning_guest = "Ozil";
guestArr.unshift(beginning_guest);
console.log(guestArr)

 let middle_guest = "Novak";
 guestArr.splice(2,0,middle_guest);
  console.log(guestArr)

 let end_guest = "Elon"
 guestArr.push(end_guest)
 console.log(guestArr);

guestArr.map((items) =>
console.log(`Dear ${items}, you are cordinally invited to a dinner.`));
