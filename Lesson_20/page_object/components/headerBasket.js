const Base = require('../base');

class HeaderBasket extends Base {
  constructor(page) {
    super(page);
  }

  get notificationContainer() {
    return '.notification-container';
  }

  async getHeaderBasketCommandByName(name) {
    return this.page.locator(`//a[contains(@aria-label, '${name}')]`);
  }

  get basketCounterLocator() {
    return this.page.locator('[data-id="header-basket-count"]');
  }

  async goToElementByName(itemName) {
    const arr = ['Account', 'Wishlist', 'Basket'];
    for (const name of arr) {
      try {
        await (await this.getHeaderBasketCommandByName(name)).click();
        console.log('Item is selected');
      } catch (error) {
        console.error('ERROR: ${itemName} is not found in the header');
      }
    }
  }
}
module.exports = HeaderBasket;
