const Base = require('../base');

class ProductFilters extends Base {
  get colorCombobox() {
    return cy.get('div.colourList');
  }

  get sizeCombobox() {
    return cy.get('div.SizeSelector');
  }

  selectColor(colorNr) {
    return cy.get(`div.colourList  .dk_options_inner > :nth-child(${colorNr}) > .dk_dropdown_option`);
  }

  selectSize(sizeNr) {
    return cy.get(`div.SizeSelector div.dk_options li:nth-child(${sizeNr})`);
  }

  getProductColorFilter(colorNr) {
    this.colorCombobox.click();
    this.selectColor(colorNr).click();
  }

  getProductSizeFilter(sizeNr) {
    this.sizeCombobox.click();
    this.selectSize(sizeNr).click();
  }
}

module.exports = new ProductFilters();
