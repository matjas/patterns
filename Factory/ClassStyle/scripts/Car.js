class Car {
    constructor(options = {}) {
        Object.assign(this, options);
        this.mph = 0;
    }
    
    gas(amount) {
        amount = amount || 10;
        this.mph += amount;
        return this;
    };
    brake(amount) {
        amount = amount || 10;
        this.mph = ((this.mph - amount) < 0) ? 0
            : this.mph - amount;
        return this;
    };
}

export default Car;