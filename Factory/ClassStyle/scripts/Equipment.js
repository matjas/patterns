class Equipment {
    constructor(standard_equipment = {}, options = {}){
        Object.assign(this, standard_equipment, options);
    }
}

export default Equipment;