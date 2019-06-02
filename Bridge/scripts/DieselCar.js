import Car from "./Car.js";

class DieselCar extends Car{
    tank() {
        console.log("The car was refueled by diesel");
    }
}

export default DieselCar;