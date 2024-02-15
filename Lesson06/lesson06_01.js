//1. Эмулировать игру в кубики,
//Два человека по очереди бросают кубик, каждый в итоге бросает одинаковое количество раз
//(должно работать с любым количеством раз заданным в переменной).
//У кого сумма трех бросков будет наибольшей - тот выиграл. Если суммы равны то ничья.
//Выведите результаты в консоль.

let sum1 = 0;
let sum2 = 0;
let player1 = [];
let player2 = [];
let num = 10; //задать число бросков кубиков
console.log("Number of dice rolls = " + num);
for (var n = 1; n <= num; n++) {
  let num1 = Math.floor(Math.random() * 6) + 1;
  sum1 += num1;
  player1.push(num1);
  let num2 = Math.floor(Math.random() * 6) + 1;
  sum2 += num2;
  player2.push(num2);
  //console.log("player1 " + num1);
  //console.log("player2 " + num2);
}
console.log("player1 " + player1);
console.log("player2 " + player2);
console.log(`${sum1} vs ${sum2}`);

console.log('');
if (sum1 > sum2) {
  console.log("!!! Winner is Player1 !!!");
} else if (sum1 < sum2) {
  console.log("!!! Winner is Player2 !!!");
} else console.log(">>> Game draw. Please try again <<<");