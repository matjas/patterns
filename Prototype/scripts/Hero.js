class Hero {
    constructor (options) {
        this.defence = options.defence;
        this.attack = options.attack;
        this.strength = options.strength;
    }

    clone() {
        return new Hero(Object.assign({}, this));
    }
}

export default Hero;