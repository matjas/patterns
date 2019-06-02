import ElectricCar from './ElectricCar.js';
import CombustionCar from './CombustionCar.js';

class CarFactory {
    constructor(features = {}, equipmentBase = {}, body = {}, options = {}) {
        if (options.carType === "electric" ) {
            this._car = new ElectricCar(Object.assign({}, features, equipmentBase, body, options));
        } else {
            this._car = new CombustionCar(Object.assign({}, features, equipmentBase, body, options));
        }
    }

    configure(options) {
        Object.assign(this._car, options);
        return this;
    };
    
    getCarName() {
        return this._car && this._car.brand;
    };
    
    get car() {
        return this._car;
    }
}

export default CarFactory;