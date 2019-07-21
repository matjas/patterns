import RemoteControl from "./RemoteControl.js";
import Volume from "./Volume.js";
import VolumeOnCommand from "./VolumeOnCommand.js";


var remoteControl = new RemoteControl();
var volume = new Volume();
var volumeOnCommand = new VolumeOnCommand(volume);

remoteControl.setCommand(volumeOnCommand);
remoteControl.volumeUpWasPressed();
remoteControl.volumeDownWasPressed();