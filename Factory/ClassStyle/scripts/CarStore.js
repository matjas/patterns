class CarStore {
    constructor(carFactory) {
        this.carFactory = carFactory;
    }

    configure(options) {
        this.carFactory.configure(options);
    }

    sellCar() {
        console.log(`Car ${this.carFactory.getCarName()} has been sold`);
        return this.carFactory.car;
    }
}

export default CarStore;