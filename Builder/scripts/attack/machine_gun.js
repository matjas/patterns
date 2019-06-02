import Item from '../Item.js';

class MachineGun extends Item {
    get name() {
        return 'Machine gun'
    }
    get score() {
        return 10;
    }
    get type() {
        return 'attack';
    }
}

export default MachineGun;