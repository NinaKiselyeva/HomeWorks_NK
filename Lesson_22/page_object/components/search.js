const Base = require('../base');

class Search extends Base {
  get searchField() {
    return cy.get('input#header-big-screen-search-box');
  }

  get searchButton() {
    return cy.get('form#header-search-form button.MuiButtonBase-root');
  }

  get searchCategories() {
    return cy.get('span.digi-ac-category__name');
  }

  searchAllResults(text) {
    this.searchField.type(text);
    this.searchButton.click();
  }

  searchByCategories(text, categoriesNumber = 0) {
    this.searchField.type(text);
    this.searchCategories.eq(categoriesNumber).click();
  }
}

module.exports = new Search();
