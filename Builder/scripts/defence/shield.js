import Item from '../Item.js';

class Shield extends Item {
    get name() {
        return 'Shield'
    }
    get score() {
        return 8;
    }
    get type() {
        return 'defence';
    }
}

export default Shield;