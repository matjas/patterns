import CarDecorator from "./CarDecorator.js";

class TunedCar extends CarDecorator{
    constructor (decoratedCar) {
        super();
        this.decoratedCar = decoratedCar;
    }

    getMaxSpeed() {
        return this.decoratedCar.getMaxSpeed() * 1.1;
    }
    getHorsePower() {
        return this.decoratedCar.getHorsePower() * 1.2;
    }
    getTorque() {
        return this.decoratedCar.getTorque() * 1.2;
    }
}

export default TunedCar;