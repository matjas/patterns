import Item from '../Item.js';

class Helmet extends Item {
    get name() {
        return 'Helmet'
    }
    get score() {
        return 5;
    }
    get type() {
        return 'defence';
    }
}

export default Helmet;