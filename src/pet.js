const MAXIMUM_FITNESS = 10;
const MINIMUM_HUNGER_LEVEL = 0;
function Pet(name) {
    this.name = name;
    this.age = 0;
    this.hunger = 0;
    this.fitness = 10;
};
Pet.prototype.growUp = function() {
    this.age += 1;
    this.hunger += 5;
    this.fitness -=3;
};
Pet.prototype.walk = function() {
    if ((this.fitness + 4) <= MAXIMUM_FITNESS) {
        this.fitness += 4;
    } else {
        this.fitness = MAXIMUM_FITNESS;
    }
};
Pet.prototype.feed = function() {
    if (!this.isAlive()) {
        throw new Error('Your pet is no longer alive :(');
      }
    if((this.feed -3) >= MINIMUM_HUNGER_LEVEL) {
        this.feed -=3;
    } else{
        this.feed = MINIMUM_HUNGER_LEVEL;
    }
}
Pet.prototype.checkUp = function() {
    if (this.fitness < 3 && this.hunger > 5) {
        return 'I am hungry AND I need a walk';
    }
    if (this.fitness < 3) {
        return 'I need a walk';
    } 
    if (this.hunger > 5) {
        return 'I am hungry';
    }
    else {
        return 'I feel great!';
    } 
} 
Pet.prototype.isAlive = function () {
    if (this.fitness <= 0) {
        return false;
    }    
    if (this.age >= 30) { /*want to check here if age >=30 makes it dead*/
        return false;
    }
    return true;
    }
module.exports = Pet;