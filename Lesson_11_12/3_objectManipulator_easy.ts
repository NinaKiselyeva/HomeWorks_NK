//3. Напишите анотации типов к этому классу.

export class ObjectManipulator {
  constructor(protected obj: Object) {}

  public set(key: string, value: number | string | boolean): ObjectManipulator {
    return new ObjectManipulator({ ...this.obj, [key]: value });
  }

  public get(key: string): string {
    return this.obj[key];
  }

  public delete(key: string): ObjectManipulator {
    const newObj = { ...this.obj };
    delete newObj[key];
    return new ObjectManipulator(newObj);
  }

  public getObject(): object {
    return this.obj;
  }
}

//example
const user1 = { name: 'Oleg', lastName: 'Golovko', age: 35, adult: true };
const user2 = { name: 'Herman', lastName: 'Golovko', age: 9, adult: false };
const animal1 = { name: 'Zebra', age: '4', color: 'black/white', children: true };
const animal2 = { name: 'Giraffe', age: 7, color: 'yellow/brown', children: false };

const manipulatorUser1 = new ObjectManipulator(user1);
const manipulatorUser2 = new ObjectManipulator(user2);
const manipulatorAnimal1 = new ObjectManipulator(animal1);
const manipulatorAnimal2 = new ObjectManipulator(animal2);

//set
console.log(manipulatorUser1.set('name', 'Nina')); //Nina-Golovko-35-true
console.log(manipulatorUser2.set('age', 10)); //Herman-Golovko-10-false
console.log(manipulatorUser2.set('adult', true)); //Herman-Golovko-9-true
console.log(manipulatorAnimal1.set('name', 555)); //555-4-black/white-true
console.log(manipulatorAnimal2.set('age', '18')); //Giraffe-18-yellow/brown-false
console.log('');

//get
console.log(manipulatorUser1.get('lastName')); //Golovko
console.log(manipulatorUser1.get('age')); //35
console.log(manipulatorUser2.get('name')); //Herman
console.log(manipulatorUser2.get('adult')); //false
console.log(manipulatorAnimal1.get('name')); //Zebra
console.log(manipulatorAnimal1.get('age')); //4
console.log(manipulatorAnimal2.get('color')); //yellow/brown
console.log('');

//delete
console.log(manipulatorUser1.delete('lastName')); //Oleg-35-true
console.log(manipulatorUser2.delete('adult')); //Herman-Golovko-9
console.log(manipulatorAnimal1.delete('color')); //Zebra-4-true
console.log(manipulatorAnimal2.delete('age')); //Giraffe-yellow/brown-false
console.log('');

//getObject
console.log(manipulatorUser1.getObject()); //{ name: 'Oleg', lastName: 'Golovko', age: 35, adult: true }
console.log(manipulatorUser2.getObject()); //{ name: 'Herman', lastName: 'Golovko', age: 9, adult: false }
console.log(manipulatorAnimal1.getObject()); //{ name: 'Zebra', age: '4', color: 'black/white', children: true }
console.log(manipulatorAnimal2.getObject()); //{ name: 'Giraffe', age: 7, color: 'yellow/brown', children: false }
