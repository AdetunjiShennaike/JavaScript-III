/*
  Object oriented design is commonly used in video games.  For this part of the assignment you will be implementing several constructor functions with their correct inheritance hierarchy.

  In this file you will be creating three constructor functions: GameObject, CharacterStats, Humanoid.  

  At the bottom of this file are 3 objects that all end up inheriting from Humanoid.  Use the objects at the bottom of the page to test your constructor functions.
  
  Each constructor function has unique properties and methods that are defined in their block comments below:
*/
  
/*
  === GameObject ===
  * createdAt
  * name
  * dimensions (These represent the character's size in the video game)
  * destroy() // prototype method that returns: `${this.name} was removed from the game.`
*/

function GameObject(param) {
  this.createdAt = param.createdAt;
  this.name = param.name;
  this.dimensions = param.dimensions;
};

GameObject.prototype.destroy = function (){
  return `${this.name} was removed from the game.`;
};

/*
  === CharacterStats ===
  * healthPoints
  * takeDamage() // prototype method -> returns the string '<object name> took damage.'
  * should inherit destroy() from GameObject's prototype
*/

function CharacterStats(param) {
  this.healthPoints = param.healthPoints;
  GameObject.call(this, param)
};

CharacterStats.prototype = Object.create(GameObject.prototype);

CharacterStats.prototype.takeDamage = function() {
  return `${this.name} took damage.`;
};

/*
  === Humanoid (Having an appearance or character resembling that of a human.) ===
  * team
  * weapons
  * language
  * greet() // prototype method -> returns the string '<object name> offers a greeting in <object language>.'
  * should inherit destroy() from GameObject through CharacterStats
  * should inherit takeDamage() from CharacterStats
*/

function Humanoid(param) {
  this.team = param.team;
  this.weapons = param.weapons;
  this.language = param.language;
  CharacterStats.call(this, param)
};

// Humanoid.prototype = Object.create(GameObject.prototype);
Humanoid.prototype = Object.create(CharacterStats.prototype);

Humanoid.prototype.greet = function() {
  return `${this.name} offers a greeting in ${this.language}.`;
};

Humanoid.prototype.block = function(damage) {
  if (this.healthPoints > 2) {
    return `${this.tookDamage} and has ${this.healthPoints - damage} HP left.`;
  }
  else {
    return this.destroy();
  }
};

Humanoid.prototype.attack = function(who) {
  if (who.block(2) > 0) {
    return `${this.name} has attacked ${who} dealing 2 HP.`;
    }
    else {
      return `${this.name} has destroyed the enemy ${who}.`;
    }
  
}

/*
  * Inheritance chain: GameObject -> CharacterStats -> Humanoid
  * Instances of Humanoid should have all of the same properties as CharacterStats and GameObject.
  * Instances of CharacterStats should have all of the same properties as GameObject.
*/

// Test you work by un-commenting these 3 objects and the list of console logs below:


  const mage = new Humanoid({
    createdAt: new Date(),
    dimensions: {
      length: 2,
      width: 1,
      height: 1,
    },
    healthPoints: 5,
    name: 'Bruce',
    team: 'Mage Guild',
    weapons: [
      'Staff of Shamalama',
    ],
    language: 'Common Tongue',
  });

  const swordsman = new Humanoid({
    createdAt: new Date(),
    dimensions: {
      length: 2,
      width: 2,
      height: 2,
    },
    healthPoints: 15,
    name: 'Sir Mustachio',
    team: 'The Round Table',
    weapons: [
      'Giant Sword',
      'Shield',
    ],
    language: 'Common Tongue',
  });

  const archer = new Humanoid({
    createdAt: new Date(),
    dimensions: {
      length: 1,
      width: 2,
      height: 4,
    },
    healthPoints: 10,
    name: 'Lilith',
    team: 'Forest Kingdom',
    weapons: [
      'Bow',
      'Dagger',
    ],
    language: 'Elvish',
  });

  console.log(mage.createdAt); // Today's date
  console.log(archer.dimensions); // { length: 1, width: 2, height: 4 }
  console.log(swordsman.healthPoints); // 15
  console.log(mage.name); // Bruce
  console.log(swordsman.team); // The Round Table
  console.log(mage.weapons); // Staff of Shamalama
  console.log(archer.language); // Elvish
  console.log(archer.greet()); // Lilith offers a greeting in Elvish.
  console.log(mage.takeDamage()); // Bruce took damage.
  console.log(swordsman.destroy()); // Sir Mustachio was removed from the game.


  // Stretch task: 
  // * Create Villain and Hero constructor functions that inherit from the Humanoid constructor function.  
  // * Give the Hero and Villains different methods that could be used to remove health points from objects which could result in destruction if health gets to 0 or drops below 0;
  // * Create two new objects, one a villain and one a hero and fight it out with methods!

  console.log(archer.attack(swordsman));

  function Hero(param){
    this.specialSkill = param.specialSkill;
    this.specialBuff = param.specialBuff;
    this.specialArmor = param.specialArmor;
    Humanoid.call(this, param);

  };

  Hero.prototype = Object.call(Humanoid.prototype);

  Hero.prototype.strike = function(who) {
    if (who.block(9) > 9) {
    return `${this.name} has summoned the power of the gods to perform the ${this.specialSkill}, granting the buff ${this.specialBuff} and suit ${this.specialArmor} dealing 9 HP.`;
    }
    else {
      return `${this.name} has summoned the power of the gods to perform the ${this.specialSkill}, granting the buff ${this.specialBuff} and suit ${this.specialArmor} destroying the enemy ${who}.`;
    }
  };


  function Villain(param){
    this.specialSkill = param.specialSkill;
    this.specialBuff = param.specialBuff;
    this.specialArmor = param.specialArmor;
    Humanoid.call(this, param);

  };

  Villain.prototype = Object.call(Humanoid.prototype);

  Villain.prototype.Cataclysm = function(who) {
    if (who.block(9) > 9) {
    return `${this.name} has summoned the demonic power ${this.specialSkill}, granting the buff ${this.specialBuff} and suit ${this.specialArmor} dealing 9 HP.`;
    }
    else {
      return `${this.name} has summoned the demonic power ${this.specialSkill}, granting the buff ${this.specialBuff} and suit ${this.specialArmor} destroying the enemy ${who}.`;
    }
  };


  const Eugio = new Hero({
    createdAt: new Date(),
    dimensions: {
      length: 1,
      width: 2,
      height: 6,
    },
    healthPoints: 30,
    name: 'Eugio',
    team: 'Templar Kingdom',
    weapons: [
      'Long Sword',
      'Dagger',
      'Shield',
      'Bow'
    ],
    language: 'Ye Ole English',
    specialSkill: 'Holy Spatial Slash',
    specialBuff: 'Divine Blessing',
    specialArmor: 'Godly Container'
  });


  const Aiji = new Villain({
    createdAt: new Date(),
    dimensions: {
      length: 1,
      width: 2,
      height: 6,
    },
    healthPoints: 30,
    name: 'Aiji',
    team: 'Cataclysmic Empire',
    weapons: [
      'Claws',
      'Throwing Dagger',
    ],
    language: 'All',
    specialSkill: 'Sinister Destructive Pulse',
    specialBuff: 'Divine Blessing',
    specialArmor: 'Demonic Boots'
  });

console.log(Eugio);
console.log(Aiji);