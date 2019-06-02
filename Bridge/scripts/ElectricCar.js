import Car from "./Car.js";

class ElectricCar extends Car{
    tank() {
        console.log("The car was charged");
    }
}

export default ElectricCar;