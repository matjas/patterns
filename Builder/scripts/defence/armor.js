import Item from '../Item.js';

class Armor extends Item {
    get name() {
        return 'Armor'
    }
    get score() {
        return 10;
    }
    get type() {
        return 'defence';
    }
}

export default Armor;