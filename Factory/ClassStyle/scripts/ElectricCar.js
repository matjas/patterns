import Car from './Car.js';

class ElectricCar extends Car {
    constructor (options = {}) {
        super(options);
        this.engine = "electric";
    }
}

export default ElectricCar;