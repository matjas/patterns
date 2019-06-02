import Hero from './Hero.js';

var hero = new Hero({ defence: 10, attack: 5, strength:15});

var clonedHero = hero.clone();

console.log(`Are original and clone the same instance? ${hero === clonedHero}`);

for(let key in hero) {
    console.log(`Are both ${key} property values in original and clone the same value? ${hero[key] === clonedHero[key]}`);
}