const Vegetable = require("./vegetable");

// Подкласс Бобовые
class BeanVegetable extends Vegetable {
    constructor (name, calories, price, family) {
    super (name, calories, price);
    this.family = family;
}
}

module.exports = BeanVegetable;