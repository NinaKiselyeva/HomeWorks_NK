//Решить используя промисы и async/await. Сделайте 3 промиса,
//в каждом из которых расположена функция setTimeout со случайной задержкой от 1 до 5 секунд.
//Пусть первый промис возвращает число 1, второе - число 2, третий - число 3.
//С помощью Promise.race дождитесь загрузки первого сработавшего промиса и выведите результат его работы на экран.

function getRandom(min, max) {
  return Math.floor(Math.random() * (max - min) + 1);
}

//Promise1
const prom1 = new Promise((resolve, reject) => {
  const random1 = getRandom(1, 5);
  console.log("random1 = " + random1 + "000ms");
  setTimeout(() => {
    resolve(1);
  }, random1 * 1000);
  return random1;
}).then((result) => {
  return result;
});

//Promise2
const prom2 = new Promise((resolve, reject) => {
  const random2 = getRandom(1, 5);
  console.log("random2 = " + random2 + "000ms");
  setTimeout(() => {
    resolve(2);
  }, random2 * 1000);
  return random2;
}).then((result) => {
  return result;
});

//Promise3
const prom3 = new Promise((resolve, reject) => {
  const random3 = getRandom(1, 5);
  console.log("random3 = " + random3 + "000ms");
  setTimeout(() => {
    resolve(3);
  }, random3 * 1000);
  return random3;
}).then((result) => {
  return result;
});

Promise.race([prom1, prom2, prom3]).then((result) => {
  console.log("Prom" + result + " = " + result);
});
