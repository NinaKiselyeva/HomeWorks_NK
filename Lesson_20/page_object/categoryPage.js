const Base = require('./base');

class CategoryPage extends Base {
  constructor(page) {
    super(page);
  }
  // get productList() {
  //   return 'div.product-list'
  // }

  async productList() {
    return this.page.locator('div.product-list');
  }

  async openProductByIndexAtPage(index) {
    await (
      await this.page.locator(`div.product-list div.product-mini-outer-container:nth-child(${index}) a.title`)
    ).click({ timeout: 3000 });
  }

  async putToBasketProductByIndexAtPage(index) {
    await (
      await this.page.locator(
        `div.product-list div.product-mini-outer-container:nth-child(${index}) img[alt='Quick Buy Icon']`
      )
    ).click({ timeout: 3000 });
  }
}

module.exports = CategoryPage;
