class Chainable {
    constructor () {
        this.count = 0;
    }

    add (number) {
        this.count += number;
        return this;
    }

    sub (number) {
        this.count -= number;
        return this;
    }
}

export default Chainable;