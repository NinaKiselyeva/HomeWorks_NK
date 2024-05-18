const Base = require('./base');

class ProductPage extends Base {
  get buttonAddToCart() {
    return $('button#btn-add-to-cart');
  }

  get buttonAddToFav() {
    return $('button#btn-add-to-favorites');
  }
  get quantityContainer() {
    return $('div.quantity');
  }

  get inputQuantity() {
    return $('input#quantity-input');
  }

  async buttonQuantity(type) {
    await this.quantityContainer.waitForExist();
    const button = $(`button#btn-${type}-quantity`);
    await button.waitForClickable();
    return button;
  }

  async setQuantity(quantity) {
    let currentQuantity = parseInt(await this.inputQuantity.getValue());
    if (quantity > currentQuantity) {
      const difference = quantity - currentQuantity;
      for (let i = 0; i < difference; i++) {
        const button = await this.buttonQuantity('increase');
        await button.click();
      }
    } else if (quantity < currentQuantity) {
      const difference = currentQuantity - quantity;
      for (let i = 0; i < difference; i++) {
        const button = await this.buttonQuantity('decrease');
        await button.click();
      }
    }

    await browser.pause(1000);
    currentQuantity = parseInt(await this.inputQuantity.getValue());
    expect(currentQuantity).toEqual(quantity);
  }

  async addToCart(quantity) {
    await this.setQuantity(quantity);
    await this.buttonAddToCart.waitForExist();
    await this.buttonAddToCart.click();
  }

  get productCardLink() {
    return $$('div.card-body');
  }

  async pageByNumber(pageNumber) {
    return $(`//a[contains(text(), "${pageNumber}")]/ancestor::li`);
  }

  async goToProductByIndex(productIndex) {
    const productByIndex = await this.productCardLink[productIndex].waitForExist({ timeout: 3000 });
    this.baseClick(productByIndex);
  }

  async goToPageByNumber(pageNumber) {
    await this.paginationBar.waitForExist({ timeout: 3000 });
    const numberPage = await this.pageByNumber(pageNumber);
    this.baseClick(numberPage);
  }
}

module.exports = new ProductPage();
