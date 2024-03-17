"use strict";
function my_car(manufacturer, model, optional) {
    return Object.assign({ manufacturer,
        model }, optional);
}
let makeCar = my_car("Lamborghini", "Huracan", { color: "Black", year: "2023" });
console.log(makeCar);
