const Vegetable = require("./vegetable");

// Подкласс Корнеплоды
class RootVegetable extends Vegetable {
  constructor(name, calories, price, sort) {
    super(name, calories, price);
    this.sort = sort;
  }
}

module.exports = RootVegetable;
