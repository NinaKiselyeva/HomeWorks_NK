//3. Дан массив arr. Найдите среднее арифметическое его элементов.
//Проверьте задачу на массиве с элементами 12, 15, 20, 25, 59, 79. Решение должно быть написано функцией и принимать любое массив.

const { clearScreenDown } = require("readline");

function calcAverage(arr) {
  let sum = 0;
  if (arr.length !== 0) {
    for (let i = 0; i < arr.length; i++) {
      sum += arr[i];
    }
    return sum / arr.length;
  } else return null;
}

// Задаем массив с нужными элементами , проверяем среднее арифметическое
const arr = [12, 15, 20, 25, 59, 79];
console.log(arr);
let n = 2; //ожидаемое число знаков после зпт в результате, в случае полученіе дробного значенія
const average = Number(calcAverage(arr).toFixed(n));
console.log("Cреднее арифметическое элементов заданного масива = " + average);
