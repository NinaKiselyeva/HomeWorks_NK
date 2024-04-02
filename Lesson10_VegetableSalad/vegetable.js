
// Родительский класс Овощи

class Vegetable {
    constructor(name, calories, price) {
        this.name = name;
        this.calories = calories ; //per 100g
        this.price = price;
    }
}
module.exports = Vegetable;