class CarDrive {
    constructor(gearType = "manual") {
        this.gearType = gearType;
    }

    setGear(gearNumber) {
        if(this.gearType === "manual") {
            console.log(`Set gear for manual gearbox: ${gearNumber}`);
        } else if (this.gearType === "automatic") {
            if (gearNumber > 0) {
                console.log('Set gear for automatic gearbox: DRIVE');
            } else if(gearNumber < 0) {
                console.log('Set gear for automaric gearbox: REVERSE');
            }
        }
    }

    setAccelerate (level) {
        console.log(`Accelerate set to ${level}`);
    }

    setBrake (level) {
        console.log(`Break set to ${level}`);
    }

    setClutch (state) {
        if (this.gearType === "automatic") {
            console.log(`Car with automatic gearbox has no clutch pedal`);
        } else if(this.gearType === "manual") {
            this.isClutchPressed = state;
            console.log(`Clutch state: ${this.isClutchPressed}`);
        }
    }
}

export default CarDrive;