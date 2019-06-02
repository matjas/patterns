import Hero from "./Hero.js";
import Gun from "./attack/gun.js";
import MachineGun from "./attack/machine_gun.js";
import Rifle from "./attack/rifle.js";
import Armor from "./defence/armor.js";
import Helmet from "./defence/helmet.js";
import Shield from "./defence/shield.js";

class HeroBuilder {
    createDefenceHero() {
        let hero = new Hero();
        hero.addArmament(new Gun());
        hero.addArmament(new Armor());
        hero.addArmament(new Helmet());
        hero.addArmament(new Shield());

        return hero;
    }

    createAttackHero() {
        let hero = new Hero();
        hero.addArmament(new MachineGun());
        hero.addArmament(new Rifle());
        hero.addArmament(new Helmet());

        return hero;
    }
}

export default HeroBuilder;