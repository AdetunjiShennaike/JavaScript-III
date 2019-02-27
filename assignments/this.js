/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. The 'this' statement is connected to the main window and tries to grabs information from there which seems to usually result in undefined.
* 2. The 'this' statement is connected to an object from inside an object method and grabs its information to be used in the method from the object.
* 3. Creating new objects becomes easier by using then 'this' statement to bind the attributes from the constructor function to the new object.
* 4. Using methods like call, apply, and bind you can explicitly mark which objects the 'this' statement points to.
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding

function begin(what) {
  "use strict";
  console.log(this);
  return `I've decided to start doing ${what}!`;

}

console.log(begin("running"));

// Principle 2

// code example for Implicit Binding

const regimen = {
  day1: 'core',
  day2: 'stamina',
  day3: 'power',
  day4: 'build mass',
  dey5: 'cardio/tone',
  day6: 'apply all',
  day7: 'rest',
  workout: function(){
    return `Since I'm doing so much every week im dieing. The ${this.day1}, ${this.day2}, ${this.day3}, ${this.day4}, ${this.day5}, ${this.day6}, and then I finally get to ${this.day7}!`
  }
}

console.log(regimen.workout());
// Principle 3

// code example for New Binding

function character(attribute){
  this.name = attribute.name;
  this.age = attribute.age;
  this.weapon = attribute.weapon;
  this.power = attribute.power;
  this.passive = attribute.passive;
  this.level = attribute.level;
  this.range = attribute.range;
  this.movementSpeed = attribute.movementSpeed;
  this.attackSpeed = attribute.attackSpeed;
  this.backstoryEmotion = attribute.backstoryEmotion;
  this.defend = function(){
    console.log(`${this.name} tried to defend using the ${this.weapon}.`);
  }
  this.attack = function(){
    console.log(`${this.name} attacked using ${this.weapon} and the power of ${this.power}.`);
  }
  this.combo = function(){
    console.log(`${this.name} used the ultimate combo by combining the passive ${this.passive} with the power ${this.power} and the ${this.weapon} to create a new spell that increases the range ${this.range} by 20 points and grants the movement ${this.movementSpeed} and attack speed ${this.attackSpeed} a x50 point boost. This allows ${this.name} to attack 40 times immediately desecrating the enemy.`)
  }
}

const Django = new character({
  name: 'Django',
  age: 19,
  weapon: 'broad sword',
  power: 'body enhance',
  passive: 'berserk',
  level: 24,
  range: '10 meters',
  movementSpeed: 40,
  attackSpeed: 32,
  backstoryEmotion: 'angry',
});

console.log(Django.combo());

// Principle 4

// code example for Explicit Binding

const name = {
  boy: "Jack",
  girl: "Jill"
}

const witch = {
  name: "grendle"
}

const fetch = ["water","mud","candy","apples","worms","toys","eggs"];

function rhyme(fetch1, fetch2, fetch3, fetch4, fetch5, fetch6, fetch7) {
  return `${this.boy} and ${this.girl} went up the hill to fetch a pale of ${fetch1} and ${fetch4}`;
}

function rhymer(fetch) {
  return `${this.name} went up the hill to grab all she could, she got ${fetch} to ensure that the children would have to visit her to get what they needed.`;
}

console.log(rhyme.apply(name, fetch));

console.log(rhymer.call(witch, fetch));

const useLater = rhymer.bind(witch, ...fetch);

console.log(useLater());