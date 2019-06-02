import CarStore from './CarStore.js';
import CarFactory from './CarFactory.js';
import Equipment from './Equipment.js';

const body = {"type": "sedan"};
const standard_equipment = {
    "air_conditioning": "manual",
    "electric_windows": "front",
    "central_lock": true,
    "upholstery": "material"
};
const features = {
    brand: "unknown",
    color: "black",
    direction: 0,
    mph: 0
};

var standardEquipment = new Equipment(standard_equipment);
var extendedEquipment = new Equipment(standard_equipment, {"upholstery": "leather", "navigation": "professional"});

var renault = new CarFactory(features, standardEquipment, body, {brand: "renault", carType: "electric"});
var bmw = new CarFactory(features, extendedEquipment, body, {brand: "bmw"});

var renaultStore = new CarStore(renault);
var bmwStore = new CarStore(bmw);

renaultStore.configure({"air_conditioning": "auto"});
bmwStore.configure({"color": "white", "gear": "sport"});

var renaultCar = renaultStore.sellCar();
var bmwCar = bmwStore.sellCar();

console.log('Your car renault:', renaultCar);
console.log('Your car bmw:', bmwCar);
