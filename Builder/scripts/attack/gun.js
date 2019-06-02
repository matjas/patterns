import Item from '../Item.js';

class Gun extends Item {
    get name() {
        return 'Gun'
    }
    get score() {
        return 5;
    }
    get type() {
        return 'attack';
    }
}

export default Gun