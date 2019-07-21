class RemoteControl {
    constructor() {
        this.command = null;
    }

    setCommand(command) {
        this.command = command;
    }

    volumeUpWasPressed() {
        this.command.execute();
    }

    volumeDownWasPressed() {
        this.command.undo();
    }
}

export default RemoteControl;