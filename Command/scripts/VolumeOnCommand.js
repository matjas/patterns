import Command from "./Command.js";

class VolumeOnCommand extends Command {
    constructor (volume){
        super();
        this.volume = volume;
    }

    execute() {
        this.volume.up();
    }

    undo() {
        this.volume.down();
    }
}

export default VolumeOnCommand;