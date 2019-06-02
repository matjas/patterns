import Item from '../Item.js';

class Rifle extends Item {
    get name() {
        return 'Rifle'
    }
    get score() {
        return 8;
    }
    get type() {
        return 'attack';
    }
}

export default Rifle;