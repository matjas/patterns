class Hero {
    constructor(armamentItems = []) {
        this.armamentItems = armamentItems;
    }
    addArmament(item) {
        this.armamentItems.push(item);
    }
    getAttackScores() {
        return this.armamentItems.reduce((acc, item) => {
            if (item.type === 'attack') {
                acc += item.score;
            }
            return acc;
        }, 0)
    }
    getDefenceScores() {
        return this.armamentItems.reduce((acc, item) => {
            if (item.type === 'defence') {
                acc += item.score;
            }
            return acc;
        }, 0)
    }
    showArmament() {
        this.armamentItems.forEach((item) => {
            console.log(`Item: ${item.name}, Type: ${item.type}, Score: ${item.score}`);
        });
    }
    showScores() {
        console.log("Attack: ", this.getAttackScores(), "Defence: ", this.getDefenceScores());
    }
}

export default Hero;