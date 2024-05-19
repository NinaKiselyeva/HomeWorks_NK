const Base = require('../base');

class ProductsContainer extends Base {
  get productCard() {
    return $$('a.card');
  }

  get productName() {
    return $$('h5[data-test="product-name"]');
  }

  get productContainer() {
    return $('div.col-md-9');
  }
  async countProductsPerPage() {
    await browser.pause(2000);
    await this.productContainer.waitForExist({ timeout: 5000 });
    return this.productCard.length;
  }

  async getProductNameByIndex(productIndex) {
    const length = await this.countProductsPerPage();
    console.log('length', length);
    if (productIndex === 'last') {
      return await this.productName[length - 1];
    } else {
      const product = await this.productName[productIndex];
      await product.waitForDisplayed();
      return product;
    }
  }
}

module.exports = new ProductsContainer();
