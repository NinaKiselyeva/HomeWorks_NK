const Base = require('../base');

class ProductsContainer extends Base {
  get productCard() {
    return $$('a.card');
  }

  get productName() {
    return $$('h5[data-test="product-name"]');
  }

  get productContainer() {
    //return $('div[data-test="filter_completed"]');
    return $('div.col-md-9');
  }
  async countProductsPerPage() {
    await browser.pause(2000);
    await this.productContainer.waitForExist({ timeout: 5000 });
    return this.productCard.length;
    // const cards = await this.productCard;
    // for (const card of cards) {
    //   await card.waitForExist({ timeout: 3000 });
    // }
    // await this.productCard.waitForExist({ timeout: 3000 });
    // return cards.length;
  }

  async getProductNameByIndex(productIndex) {
    const length = await this.countProductsPerPage();
    console.log('length', length);
    if (productIndex === 'last') {
      // const lastProduct = await this.productName[length - 1];
      // await lastProduct.waitForDisplayed();
      // return lastProduct;
      return await this.productName[length - 1];
    } else {
      const product = await this.productName[productIndex];
      await product.waitForDisplayed();
      return product;
      //return this.productName[productIndex].getText();
    }
  }
}

module.exports = new ProductsContainer();
