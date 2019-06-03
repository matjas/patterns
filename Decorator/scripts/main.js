import Car from "./Car.js";
import TunedCar from "./TunedCar.js";

var car = new Car();
var tunedCar = new TunedCar(car);

console.log("Car max speed ", car.getMaxSpeed());
console.log("Car horsepower ", car.getHorsePower());
console.log("Car torque ", car.getTorque());

console.log("TunedCar max speed ", tunedCar.getMaxSpeed());
console.log("TunedCar horsepower ", tunedCar.getHorsePower());
console.log("TunedCar torque ", tunedCar.getTorque());