let name_1: string = "Car"
let name_2: string = "car"

console.log(name_1 === name_2)
console.log(name_1 !== name_2)

let word : string = "HelloWorld";

console.log(word.toLowerCase() === "HelloWorld")
console.log(word.toLowerCase() === "helloworld")

const num1 : number = 10
const num2 : number = 40

console.log(num1 === num2)
console.log(num1 !== num2)
console.log(num1 < num2)
console.log(num1 <= num2)
console.log(num1 >  num2)
console.log(num1 >= num2)

let cond1 : boolean = true;
let cond2 : boolean = false;

console.log(cond1 && cond2)
console.log(cond1 || cond2)

const cars : string [] = ["Lamborghini", "BMW", "Ferrari", "Porsche"]
console.log(cars.includes("Lamborghini"))
console.log(cars.includes("lamborghini"))