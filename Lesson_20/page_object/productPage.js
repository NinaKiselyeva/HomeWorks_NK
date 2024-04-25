const Base = require('./base');

class ProductPage extends Base {
  constructor(page) {
    super(page);
  }

  get productDescriptionTitle() {
    return this.page.locator('div.product-description-container h2');
  }

  get productBuyingBlock() {
    return this.page.locator('div.buying-block');
  }

  get chooseSizeButtonSelector() {
    return this.page.locator('button.btn[data-id="button-addtobag-pdp"]');
  }

  async clickSizeButon(sizeNumber) {
    const sizeButton = this.page.locator(`//div[@class="attribute" and contains(@aria-label, '${sizeNumber}')]`);
    return sizeButton.click();
  }

  async setSizeForProduct(sizeNumber) {
    try {
      await this.page.waitForTimeout(2000);
      await this.page.locator('.quick-buy-container ').waitFor({ visible: true });
      console.log('попап контейнер виден');
      await this.sizeButtonSelector(sizeNumber).click();
      console.log('размер нажат');
      await this.page.locator(this.chooseSizeButtonSelector).click();
      console.log('кнопка нажата');
    } catch (error) {
      console.error('ERROR: size is NOT selected');
    }
  }
}

module.exports = ProductPage;
