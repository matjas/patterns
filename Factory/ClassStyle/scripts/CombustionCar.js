import Car from './Car.js';

class CombustionCar extends Car {
    constructor (options = {}) {
        super(options);
        this.engine = "combustion";
    }
}

export default CombustionCar;