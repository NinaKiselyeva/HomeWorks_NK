//1. Подсчитать количество Пятниц 13-ого c любого заданного числа прошлого
//(например с 01.01.2000) до сегодня. Ваш код должен иметь возможность считать
//количество дней на любую заданную в переменной первоначальную дату и считать
//верно через 10-15-20 лет. Решение должно быть написано функцией.

function countFriday13(startDate) {
  let count = 0;
  let currentDate = new Date();
  let someDate = new Date(startDate); // Какая-то промежуточная дата м между startDate и currentDate

  // Перебираем все даты от начальной до текущей
  while (someDate <= currentDate) {
    // Если текущая дата - пятница 13, увеличиваем счетчик +1
    if (someDate.getDay() === 5 && someDate.getDate() === 13) {
      count++;
    }
    // Переходим к следующей дате
    someDate.setDate(someDate.getDate() + 1);
  }
  return count;
}

let startDate = new Date("2000-01-01"); // Начальная дата
let currentDate = new Date(); //  Текущая дата
let fri13 = countFriday13(startDate);
console.log("");
console.log("Начальная дата отсчета " + startDate.toLocaleDateString("de-DE"));
console.log("Текущая дата " + currentDate.toLocaleDateString("de-DE"));
console.log("Количество пятниц 13-го с " + startDate.toLocaleDateString("de-DE") + " до сегодняшней даты: " +  fri13);