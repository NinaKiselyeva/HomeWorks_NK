//3. Шеф-повар.
//Определить иерархию овощей. Сделать салат. Посчитать калорийность.
//Провести сортировку овощей для салата на основе одного из параметров.
//Найти овощи в салате, соответствующие заданному диапазону параметров.

const LeafVegetable = require("./leafVegetable");
const RootVegetable = require("./rootVegetable");
const BeanVegetable = require("./beanVegetable");
const FruitVegetable = require("./fruitVegetable");
const NightShadeVegetable = require("./nightShadeVegetable");
const Salad = require("./salad");

// Фабрика для создания овощей
class VegetableFactory {
  createVegetable(type, name, calories, price, additionalParams) {
    if (type === "leaf") {
      return new LeafVegetable(name, calories, price, additionalParams);
    }
    if (type === "root") {
      return new RootVegetable(name, calories, price, additionalParams);
    }
    if (type === "bean") {
      return new BeanVegetable(name, calories, price, additionalParams);
    }
    if (type === "fruit") {
      return new FruitVegetable(name, calories, price, additionalParams);
    }
    if (type === "night") {
      return new NightShadeVegetable(name, calories, price, additionalParams);
    }
  }
}

// Создаем ингридиенты для салатов
const factory = new VegetableFactory();

const potato = factory.createVegetable("night", "Potato", 77, 5.5, "Yukon Gold");
const carrot = factory.createVegetable("root", "Carrot", 41, 9, "Baby");
const onion = factory.createVegetable("root", "Onion", 40, 7.8, "Red Baron");
const peas = factory.createVegetable("bean", "Peas", 81, 15, "Vengerian");
const capers = factory.createVegetable("leaf", "Capers", 23, 43, "green");
const cucumber = factory.createVegetable("fruit", "Cucumber", 15, 13.4, "Carolina");
const rukola = factory.createVegetable("leaf", "Rukola", 25, 54.5, "green");
const basil = factory.createVegetable("leaf", "Basil", 23, 74.9, "green");
const tomato = factory.createVegetable("fruit", "Tomato", 15, 25, "Cherry");

// Билдер для создания салатов
class SaladBuilder {
  constructor() {
    this.reset();
  }
  reset() {
    this.salad = new Salad();
  }

  addVegetable(vegetable, weight) {
    this.salad.addIngredient(vegetable, weight);
    return this;
  }

  build() {
    const builtSalad = this.salad;
    this.reset();
    return builtSalad;
  }
}

// Создание салата Веганский Оливье
const saladBuilder = new SaladBuilder();
const veganOlivieSalad = saladBuilder
  .addVegetable(potato, 100)
  .addVegetable(carrot, 50)
  .addVegetable(onion, 50)
  .addVegetable(peas, 80)
  .addVegetable(capers, 15)
  .addVegetable(cucumber, 50)
  .build();

// Вывод информации о салате Веганский Оливье
console.log("");
console.log(">>>>>>> 1.Веганский Оливье");
veganOlivieSalad.printIngredients();
console.log("  ✔ Вес салата:", veganOlivieSalad.calculateTotalWeight(), "г");
console.log("✔ Общая калорийность салата:", veganOlivieSalad.calculateTotalCalories(), "ккал");
console.log("  ✔ Себестоимость овощей в салате", veganOlivieSalad.calculateTotalPrice(), "zl");

// Сортировка ингредиентов салата по калорийности
veganOlivieSalad.sortIngredientsByCalories();
veganOlivieSalad.printIngredientsByCalories();

// Поиск ингредиентов в заданном диапазоне калорийности на 100гр
let min = 25; //задаем мин значение в диапазоне калорийности ингредиентов
let max = 50; //задаем макс значние в диапазоне калорийности ингредиентов
const ingredientsInRangeOlivie = veganOlivieSalad.findIngredientsInCaloriesRange(min, max);
console.log(`✔ Ингредиенты салата в диапазоне калорийности от ${min} до ${max}`, ingredientsInRangeOlivie);

// Сортировка ингредиентов салата по стоимости, учитывает вес каждого ингредиента
veganOlivieSalad.sortIngredientsByPrice();
veganOlivieSalad.printIngredientsByPrice();

// Салат Итальянский
const saladItalian = saladBuilder
  .addVegetable(rukola, 100)
  .addVegetable(basil, 15)
  .addVegetable(tomato, 140)
  .build();

console.log("");
console.log(">>>>>>> 2.Салат Итальянский");
saladItalian.printIngredients();
console.log("  ✔ Вес салата:", saladItalian.calculateTotalWeight(), "г");
console.log("✔ Общая калорийность салата:", saladItalian.calculateTotalCalories(), "ккал");
console.log("  ✔ Себестоимость овощей в салате", saladItalian.calculateTotalPrice(), "zl");

saladItalian.sortIngredientsByCalories();
saladItalian.printIngredientsByCalories();

const ingredientsInRangeIt = saladItalian.findIngredientsInCaloriesRange(min, max);
console.log(`✔ Ингредиенты салата в диапазоне калорийности от ${min} до ${max}`, ingredientsInRangeIt);

saladItalian.sortIngredientsByPrice();
saladItalian.printIngredientsByPrice();
