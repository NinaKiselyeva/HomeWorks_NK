//3. Напишите анотации типов к этому классу.

export class ObjectManipulator<T> {
  constructor(protected obj: T) {}

  public set<K extends keyof T>(key: K, value: T[K]): ObjectManipulator<T> {
    return new ObjectManipulator<T>({ ...this.obj, [key]: value });
  }

  public get<K extends keyof T>(key: K): T[K] {
    return this.obj[key];
  }

  public delete<K extends keyof T>(key: K): ObjectManipulator<Omit<T, K>> {
    const newObj = { ...this.obj };
    delete newObj[key];
    return new ObjectManipulator<Omit<T, K>>(newObj);
  }

  public getObject(): T {
    return this.obj;
  }
}

//example
const user1 = { name: 'Ivan', lastName: 'Ivanov', age: 25 };
const user3 = { name: 'Oleg', lastName: 'Golovko', age: 35 };

const manipulatorUser1 = new ObjectManipulator(user1);
const manipulatorUser2 = new ObjectManipulator(user1);
const manipulatorUser3 = new ObjectManipulator(user3);

const animal = { name: 'Zebra', age: 4, children: true };
const manipulatorAnimal = new ObjectManipulator(animal);

//set
console.log(manipulatorUser2.set('name', 'Nina')); //Nina-Ivanov-25
console.log(manipulatorUser2.set('lastName', 'Kiselyeva')); //Ivan-Kiselyeva-25
console.log(manipulatorUser2.set('age', 18)); //Ivan-Ivanov-18
console.log(manipulatorAnimal.set('name', 'Giraffe')); //Giraffe-4-true
console.log(manipulatorAnimal.set('age', 8)); //Zebra-8-true
console.log(manipulatorAnimal.set('children', false)); //Zebra-8-false

//get
console.log(manipulatorUser1.get('lastName')); //Ivanov
console.log(manipulatorUser1.get('age')); //25
console.log(manipulatorUser2.get('name')); //Ivan
console.log(manipulatorUser2.get('lastName')); //Ivanov
console.log(manipulatorUser3.get('name')); //Oleg
console.log(manipulatorUser3.get('lastName')); //Golovko

//delete
console.log(manipulatorUser1.delete('lastName')); //Ivan-25
console.log(manipulatorUser1.delete('age')); //Ivan-Ivanov
console.log(manipulatorUser2.delete('name')); //Ivanov-25
console.log(manipulatorUser3.delete('name')); //Golovko-35
console.log(manipulatorUser3.delete('lastName')); //Oleg-35

//getObject
console.log(manipulatorUser1.getObject()); //Ivan-Ivanov-25
console.log(manipulatorUser2.getObject()); //Ivan-Ivanov-25
console.log(manipulatorUser3.getObject()); //Oleg-Golovko-35
