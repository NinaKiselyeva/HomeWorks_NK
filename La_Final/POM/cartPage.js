const Base = require('./base');

class CartPage extends Base {
  get buttonDeleteProducts() {
    return $('a.btn-danger');
  }

  get cartTotal() {
    return $(' tfoot td:nth-child(4)');
  }

  async productQuantityInCart(productName) {
    return $(
      `//td[label[contains(@class, 'visually-hidden') and contains(text(), 'Quantity for ${productName}')]]/input`
    );
  }

  async getproductQuantityInCart(productName) {
    const inputElement = await this.productQuantityInCart(productName);
    await inputElement.waitForExist();
    return parseInt(await inputElement.getValue());
  }

  async isCartQuantityEmpty() {
    await browser.pause(2000);
    await this.cartTotal.waitForExist();
    return await this.cartTotal.getText();
  }

  async clearAndSetProductQuantity(productName, newQuantity) {
    const inputElement = await this.productQuantityInCart(productName);
    await inputElement.waitForExist();
    await inputElement.clearValue();
    await inputElement.setValue(newQuantity.toString());
    await browser.keys('Enter');
  }
}

module.exports = new CartPage();
