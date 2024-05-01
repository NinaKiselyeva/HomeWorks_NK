const Base = require('./base');

class ProductPage extends Base {
  get descriptionSection() {
    return cy.get('div.toggleDescription');
  }

  get addToBagButton() {
    return cy.get('div.AddToBag');
  }

  productByNumber(numberOnPage) {
    return cy.get(`div[data-index="${numberOnPage}"]`);
  }

  goToProductPageByProductNumber(numberOnPage) {
    this.productByNumber(numberOnPage).click();
  }

  putProductInBag() {
    this.addToBagButton.click();
  }
}

module.exports = new ProductPage();
