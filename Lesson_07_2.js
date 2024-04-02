//2. Дана строка из четного количества цифр.
//Проверьте, что сумма первых трех цифр равняется сумме вторых трех цифр.
//Если это так - выведите 'да', в противном случае выведите 'нет'. Решение должно быть написано функцией и принимать любое число.

function even(n) {  //проверка количества чисел на четность
  if (Number.isInteger(arr.length) == true) {
    return arr.length % 2 == 0;
  } else {
    return false;
  }
}

function sumHalf(arr) { //Функція для расчета суммы чісел половіны ряда 
  let sum1 = 0;
  let sum2 = 0;
  if (arr.length !== 0 && even(arr) === true) {
    for (let i = 0; i < arr.length / 2; i++) {
      sum1 += arr[i];
      sum2 += arr[i + arr.length / 2];
    }
    return [sum1, sum2];
  } else return null;
}

function compare (a,b) { //Функция сравненія 2х чісловых значеній
    if (a===b) {
        return ("YES");
    }
    else return ("NO");
}

const arr = [5, 2, 5, 6, 6, 0]; // Задать массив с нужными элементами (любое колічество)
console.log("Количество заданных чисел = " + arr.length);
console.log("Количество заданных чисел четное? " + even(arr));
let sum = sumHalf(arr); 
if (even(arr) === true) {
    console.log(sum);
    console.log('');
    console.log("Сумма первой половіны значеній массіва = " + sum[0]);
    console.log("Сумма второй половіны значеній массіва = " + sum[1]);
    console.log("Равны лі суммы ? " + compare(sum[0], sum[1])); // Укажет, равны ли суммы значений первой и второй половин ряда чисел
}