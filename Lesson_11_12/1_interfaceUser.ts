//1. Учитывая данные, определите интерфейс «Пользователь» и используйте его соответствующим образом.

interface IUsers {
  name: string;
  age: number;
  occupation: string;
  car?: string;
  children?: number;
}

const users: IUsers[] = [
  {
    name: 'Max Mustermann',
    age: 25,
    occupation: 'Chimney sweep',
    car: 'VW',
  },
  {
    name: 'Kate Müller',
    age: 23,
    occupation: 'Astronaut',
    children: 2,
  },
];

console.log('Users List:');
users.forEach((user) => {
  console.log(`> Name: ${user.name}, \n  Age: ${user.age}, \n  Occupation: ${user.occupation}`);
  if (user.car) {
    console.log(`  Car: ${user.car}`);
  }
  if (user.children) {
    console.log(`  Children: ${user.children}`);
  }
});

export {};
