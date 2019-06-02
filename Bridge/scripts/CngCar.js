import Car from "./Car.js";

class CngCar extends Car{
    tank() {
        console.log("The car was refueled by Cng");
    }
}

export default CngCar;