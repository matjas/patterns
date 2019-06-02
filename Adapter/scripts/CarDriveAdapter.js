import CarDrive from "./CarDrive.js";

class CarDriveAdapter {
    constructor() {
        this.carDrive = new CarDrive();
    }

    driveForward() {
        console.log('Drive forward');
        this.carDrive.setClutch("on");
        this.carDrive.setGear(1);
        this.carDrive.setAccelerate(1);
        this.carDrive.setClutch("off");
    }

    driveBack() {
        console.log('Drive back');
        this.carDrive.setClutch("on");
        this.carDrive.setGear(-1);
        this.carDrive.setAccelerate(1);
        this.carDrive.setClutch("off");
    }
}

export default CarDriveAdapter;