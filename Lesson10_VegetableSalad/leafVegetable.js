const Vegetable = require("./vegetable");

// Подкласс Листовые овощи
class LeafVegetable extends Vegetable {
    constructor (name, calories, price, color) {
    super (name, calories, price);
    this.color = color;
}
}

module.exports = LeafVegetable;