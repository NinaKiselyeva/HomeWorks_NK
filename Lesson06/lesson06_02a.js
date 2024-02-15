//2. Напишите код который будет разбивать число на заданное количество рандомных чисел,
// сумма которых будет равна изначальному числу.
//- Ваш код должен работать с любым числом заданным в переменной (не только с 15) и с любым количеством частей на которые надо разбить число..
//а. числа изначальное число целое, числа разбивки - целые (4,6,5)

let number = 15; //задать число, которое нужно разбить на части
let n = 5; //задать количество частей разбивки
let arr = [];
let sum = 0;
let part = 0;

console.log("a) Целые положительные числа");
console.log("Set Number =" + number);
console.log("Set Parts quantity =" + n);

// Генерируем рандомно n - 1 чисел
for (let i = 0; i < n - 1; i++) {
  part = Math.floor(Math.random() * (number - sum - (n - i - 1)) + 1);
  console.log("part from " + 1 + " to " + (number - sum - (n - i - 1)));
  sum += part;
  console.log("part is = " + part + ", sum is " + sum);
  arr.push(part);
}
console.log("");
// Генерируем последнее число
let lastPart = number - sum;
arr.push(lastPart);
console.log(arr);
sum += lastPart;
console.log("SUM is " + sum);