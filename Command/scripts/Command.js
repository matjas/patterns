class Command {
    execute() {
        throw new Error("This method has to be overwritten");
    }

    undo() {
        throw new Error("This method has to be overwritten");
    }
}

export default Command;