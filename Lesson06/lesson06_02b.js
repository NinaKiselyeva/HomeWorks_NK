//2. Напишите код который будет разбивать число на заданное количество рандомных чисел,
//b) числа разбивки дробные с N знаками после запятой (4.55, 5.20, 5.25)

let number = 14;//задать число, которое нужно разбить на части
let n = 3;      //задать количество частей разбивки
let r = 2;      //задать число разрядов после запятой
let arr = [];
let sum = 0;    //сумма чисел разбивки
let part = 0;   //число разбивки

console.log(
  "b) Дробные положительные числа c заданным колічеством знаков после запятой"
);
console.log("Set Number =" + number);
console.log("Set Parts quantity =" + n);
console.log("Set number of simbols after comma =" + r);

// Генерируем рандомно n - 1 чисел
for (var i = 0; i < n - 1; i++) {
  part = Number((Math.random() * (number - sum - (n - i - 1)) + 1).toFixed(r));
  sum += part;
  arr.push(part.toFixed(r));
}
console.log("");
// Генерируем последнее число
let lastPart = Number((number - sum).toFixed(r));
arr.push(lastPart.toFixed(r));
console.log(arr);
sum += lastPart;
console.log("SUM is " + Number(sum.toFixed(0)));