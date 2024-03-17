 type car = {
    manufacturer : string
    model : string
    [Key : string]: any;
}


function my_car(manufacturer: string, model: string, optional: any):
    car { 
        return {
       manufacturer,
       model,
       ...optional,
   }
}
 let makeCar : car = my_car ("Lamborghini", "Huracan", {color:"Black", year : "2023"});
 console.log(makeCar);
 
