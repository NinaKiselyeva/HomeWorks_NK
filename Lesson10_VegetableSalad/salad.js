// Класс Салат для создания и работой со сборными овощными салатами
class Salad {
  constructor() {
    this.ingredients = [];
  }

  addIngredient(ingredient, weight) {
    ingredient.weight = weight; //добавляем вес ингредиента в сала
    this.ingredients.push(ingredient);
  }

  printIngredients() {
    console.log("  ✔ Ингредиенты салата:");
    this.ingredients.forEach((ingredient) => {
      console.log(`${ingredient.name}, ${ingredient.calories}ккал/100г, ${ingredient.weight}г`);
    });
  }

  calculateTotalWeight() {
    let totalWeight = 0;
    this.ingredients.forEach((ingredient) => {
      totalWeight += ingredient.weight;
    });
    return totalWeight;
  }

  calculateTotalCalories() {
    let totalCalories = 0;
    this.ingredients.forEach((ingredient) => {
      totalCalories += (ingredient.calories / 100) * ingredient.weight;
    });
    return totalCalories;
  }

  sortIngredientsByCalories() {
    this.ingredients.sort((a, b) => {
      return a.calories - b.calories;
    });
  }

  printIngredientsByCalories() {
    console.log("  ✔ Отсортированные ингредиенты салата по калорийности:");
    this.ingredients.forEach((ingredient) => {
      console.log(`${ingredient.name}, ${ingredient.calories}ккал`);
    });
  }

  calculateTotalPrice() {
    let totalPrice = 0;
    this.ingredients.forEach((ingredient) => {
      totalPrice += (ingredient.price / 1000) * ingredient.weight;
    });
    return Number(totalPrice.toFixed(2));
  }

  sortIngredientsByPrice() {
    this.ingredients.sort((a, b) => {
      const priceA = (a.price / 1000) * a.weight;
      const priceB = (b.price / 1000) * b.weight;
      return priceA - priceB;
    });
  }

  printIngredientsByPrice() {
    console.log("  ✔ Отсортированные ингредиенты салата по стоимости в салате:");
    this.ingredients.forEach((ingredient) => {
      const ingredientPrice = ((ingredient.price / 1000) * ingredient.weight).toFixed(2);
      console.log(`${ingredient.name}, ${ingredientPrice}zl`);
    });
  }

  findIngredientsInCaloriesRange(minCalories, maxCalories) {
    return this.ingredients
      .filter((ingredient) => {
        return ingredient.calories >= minCalories && ingredient.calories <= maxCalories;
      })
      .map(({ name, calories }) => ({ name, calories }));
  }

  findIngredientsInPriceRange(minPrice, maxPrice) {
    return this.ingredients.filter((ingredient) => {
      return ingredient.price >= minPrice && ingredient.price <= maxPrice;
    });
  }
}
module.exports = Salad;
