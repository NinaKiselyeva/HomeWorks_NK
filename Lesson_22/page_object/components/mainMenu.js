const Base = require('../base');

class MainMenu extends Base {
  productGroup(groupName) {
    return cy.get(`a[ data-ga-v2="${groupName.toUpperCase()}"]`);
  }

  productSubCategory(subCategoryName) {
    return cy.get('div#catalogue div.header-195dlc3 span').contains(subCategoryName);
  }

  productCategory(categoryName) {
    return cy.get(`a[data-ga-v3="${categoryName}"]`);
  }

  goToProductCategoryPage(groupName, subCategoryName, categoryName) {
    this.productGroup(groupName).click();
    this.productSubCategory(subCategoryName).click();
    this.productCategory(categoryName).click();
  }
}

module.exports = new MainMenu();
