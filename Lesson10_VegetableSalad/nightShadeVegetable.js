const Vegetable = require("./vegetable");

// Подкласс Паслёновые
class NightShadeVegetable extends Vegetable {
    constructor (name, calories, price, kind) {
    super (name, calories, price);
    this.kind = kind;
}
}

module.exports = NightShadeVegetable;