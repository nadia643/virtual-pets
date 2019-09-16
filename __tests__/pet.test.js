const Pet = require('../src/pet');

describe('constructor', () => {
    it('returns an object', () => {
        expect(new Pet('Fido')).toBeInstanceOf(Object);
    });
    
    it('sets the name property', () => {
        const pet = new Pet('Fido');
        expect(pet.name).toEqual('Fido');
     });
    it('has an initial age of 0', () => {
        const pet = new Pet('Fido');
        expect(pet.age).toEqual(0);
    });
});
describe('growUp', () => {
    it('increments age by 1', () => {
        const pet = new Pet('Fido');
        pet.growUp();
        expect(pet.age).toEqual(1);
    });
    it('increments hunger by 5', () => {
        const pet = new Pet('Fido');
        pet.growUp();
        expect(pet.hunger).toEqual(5);  
    });  
    it('decreases fitness by 3', () => {
        const pet = new Pet('Fido');
        pet.growUp();
        expect(pet.fitness).toEqual(7);
    });
  });
  describe('walk', () => {
    it('increases fitness by 4', () => {
        const pet = new Pet('Fido');
        pet.fitness = 4;
        pet.walk();
        expect(pet.fitness).toEqual(8);
    });
    it('increases fitness to a maximum of 10', () => {
        const pet = new Pet('Fido');
        const MAXIMUM_FITNESS = 10;
        pet.fitness = 8;
        pet.walk();
        expect(pet.fitness).toEqual(MAXIMUM_FITNESS);
    });
    describe('feed', () => {
        it('decreases hunger level by 3', () => {
        const pet = new Pet('Fido');
        const MINIMUM_HUNGER_LEVEL = 0;
        pet.hungerLevel = 0;
        pet.fitness = 7;
        pet.feed();
        expect(pet.hungerLevel).toEqual(MINIMUM_HUNGER_LEVEL);
     });
     it('throws an error if the pet is not alive', () => {
        const pet = new Pet('Fido');
  
        pet.age = 30;
  
        expect(() => pet.feed()).toThrow('Your pet is no longer alive :(');
      });
    });
    });
    describe('check up', () => {
        it('checks if Fido needs a walk', () => {
            const pet = new Pet('Fido');
            pet.fitness = 2;
            expect(pet.checkUp()).toEqual('I need a walk');     
        });
        it('checks if Fido is hungry', () => {
            const pet = new Pet('Fido');
            pet.hunger = 6;
            expect(pet.checkUp()).toEqual('I am hungry');
        })
        it('checks if Fido needs a walk and is hungry', () => {
            const pet = new Pet('Fido');
            pet.hunger = 6; 
            pet.fitness = 2;
            expect(pet.checkUp()).toEqual('I am hungry AND I need a walk');
         });
         it('checks if Fido is doing great', () => {
            const pet = new Pet('Fido');
            pet.hunger = 4;
            pet.fitness = 8;
            expect(pet.checkUp()).toEqual('I feel great!');
        })
     });
    describe('isAlive', () => {
        it('checks if Fido\'s fitness is less than 0', () => {
            const pet = new Pet('Fido');
            pet.fitness = -1;
            expect(pet.isAlive()).toEqual(false);
        });
    });