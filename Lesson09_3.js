//Сделайте функцию getNum, которая возвращает промис,
//который с задержкой в 3 секунды выведет случайное число от 1 до 5.
//Используйте также функцию getNum, чтобы вернуть промис,
//который с задержкой в 5 секунд выведет случайное число от 6 до 10.
//Создайте async функцию, которая с помощью await будет дожидаться результата getNum,
//затем будет дожидаться результата getNum,
//а затем найдет сумму полученных чисел и выводит на экран.

function getNum(min, max, delay) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const randomNum = Math.floor(Math.random() * (max - min) + min);
      resolve(randomNum);
    }, delay);
  });
}

async function getSum() {
  const num1 = await getNum(1, 5, 3000);
  const num2 = await getNum(6, 10, 5000);
  const sum = num1 + num2;
  console.log("Случайное число 1 (1...5) = " + num1);
  console.log("Случайное число 2 (6...10)= " + num2);
  console.log("Сумма случайных чисел = " + sum);
}
getSum();
