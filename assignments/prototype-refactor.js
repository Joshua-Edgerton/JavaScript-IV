// ORIGINAL GAMEOBJECT CLASS //
class GameObject {                                    // Creates the GameObject class. The "parent".
    constructor(attributes){                          // The constructor method is a special method for creating and initializing an object created within a class.
        this.createdAt = attributes.createdAt;        // The attribute itself.
        this.name = attributes.name;                  // The attribute itself.
        this.dimensions = attributes.dimensions;      // The attribute itself.
    }                                                 // This closes constructor.
    destroy(){                                                // Class method named "destroy".
        return `${this.name} was removed from the game!`;     // What the destroy method returns.
      }                                                       // This closes the method.
    }                                                                // This closes the GameObject class // This is the "parent" class.

// CHARACTERSTATS CLASS // CHILD OF GAMEOBJECT // INHERITS GAMEOBJECT ATTRIBUTES //

class CharacterStats extends GameObject{              // Creates the CharacterStats class. The "child" of the "parent" because of "extends GameObject".
    constructor(attributes){                          // The constructor method for initializing this object within this class.
        super(attributes);                            // "super" replaces the .call rule.
        this.newTakeDamage = attributes.takeDamage    // The attribute itself.
    }                                                 // This closes the constructor.
    takeDamage(){                                             // Class method named "takeDamage".
        return `${this.name} took damage!`                    // What the takeDamage method returns.
    }                                                         // This closes the method
}                                                                    // This closes the CharacterStats class. The "child" class.

// HUMANOID CLASS // CHILD OF CHARACTERSTATS // INHERITS GAMEOBJECT AND CHARACTERSTATS ATTRIBUTES //

class Humanoid extends CharacterStats{               // Creates the Humanoid class. The "grandchild" of the "parent" because of "extends CharacterStats" which is already inheriting from the parent class.
    constructor(attributes){                         // The constructor method for initializing this object within this class.          
        super(attributes);                           // "super" replaces the .call rule.
        this.team = attributes.team,                 // The attribute itself.
        this.weapons = attributes.weapons,           // The attribute itself.
        this.language = attributes.language          // The attribute itself.
    }                                                // This closes the constructor.
    greet(){                                                          // Class method named "greet".
        return `${this.name} offers a greeting in ${this.language}`   // What the greet method returns.
    }                                                                 // This closes the method.
}                                                                              // This closes the Humanoid class. The "grandchild" class.

// EXISTING LAMBDA CODE FOR TESTING CLASSES //

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

// EXISTING LAMBDA CODE FOR CONSOLE.LOG-ING RESULTS //
  
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