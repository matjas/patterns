import ElectricCar from "./ElectricCar.js";
import DieselCar from "./DieselCar.js";
import CngCar from "./CngCar.js";

let dieselCar = new DieselCar();
let electricCar = new ElectricCar();
let cngCar = new CngCar();

let cars = [dieselCar, electricCar, cngCar];

for(let car of cars){
    car.tank();
}