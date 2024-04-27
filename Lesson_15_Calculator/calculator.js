/**
 *
 *A class containing method for summing and multiplying parameters.
 * @class Calculator
 */
class Calculator {
  constructor() {}
  /**
   *
   *
   * @param {Array<Number>} theArgs array of numbers for summing
   * @return {Number} sum of numbers
   * @memberof Calculator
   */
  //сложение
  add(...theArgs) {
    let result = 0;
    for (let i = 0; i < theArgs.length; i++) {
      result += theArgs[i];
    }

    return result;
  }
  /**
   *
   *
   * @param {Array<Number>} theArgs array of numbers for multiplication
   * @return {Number}
   * @memberof Calculator
   */
  //умножение
  multiply(...theArgs) {
    let result = 1;
    for (let i = 0; i < theArgs.length; i++) {
      result = result * theArgs[i];
    }
    return result;
  }
  //вычитание
  subtraction(reduced, subtrahend) {
    return reduced - subtrahend;
  }
  //деление
  divide(dividend, divider) {
    return dividend / divider;
  }
  //возведение в квадрат
  exponentiation(number) {
    return number * number;
  }
}

//проверка работы функций
// Создаем экземпляр калькулятора
const calculator = new Calculator();
//const sum = calculator.add(Number.MAX_SAFE_INTEGER, Number.MAX_SAFE_INTEGER);
//console.log(Number.MAX_SAFE_INTEGER, sum);
//const exp = calculator.exponentiation(Number.MAX_SAFE_INTEGER);
//console.log(exp);
// eslint-disable-next-line no-loss-of-precision
console.log(calculator.multiply(12345678901234567, 0));
console.log(calculator.subtraction(18, 10, 5));

/*
// Проверяем сложение чисел
const sum = calculator.add(2, -3, 6);
console.log("Сумма чисел:", sum); //5

// Проверяем вычитание чисел
let s1 = 7;
let s2 = -3;
const sub = calculator.subtraction(s1, s2);
console.log(`Разница чисел ${s1} - ${s2}`, sub); //10

// Проверяем умножение чисел
const mult = calculator.multiply(2, 3, 6);
console.log("Произведение чисел:", mult); //36

// Проверяем деление чисел
let d1 = 18;
let d2 = 6;
const div = calculator.divide(d1, d2);
console.log(`Деление чисел ${d1}/${d2}:`, div); //3

// Проверяем возведение в квадрат
let a = 5;
const exp = calculator.exponentiation(a);
console.log(`Возведение в квадрат числа ${a}`, exp); //25
*/

// const l = calculator.add("let", 2, "do");
// console.log(l);

export { Calculator };
