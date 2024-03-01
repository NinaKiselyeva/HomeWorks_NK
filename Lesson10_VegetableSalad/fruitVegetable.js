const Vegetable = require("./vegetable");

// Подкласс Плодовые
class FruitVegetable extends Vegetable {
    constructor (name, calories, price, seedType) {
    super (name, calories, price);
    this.seedType = seedType;
}
}

module.exports = FruitVegetable;