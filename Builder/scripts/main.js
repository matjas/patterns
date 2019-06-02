import HeroBuilder from "./HeroBuilder.js";

var heroBuilder = new HeroBuilder();

var defenceHero = heroBuilder.createDefenceHero();
var attackHero = heroBuilder.createAttackHero();

defenceHero.showScores();
defenceHero.showArmament();

attackHero.showScores();
attackHero.showArmament();