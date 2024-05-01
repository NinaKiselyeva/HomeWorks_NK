const Base = require('./base');

class SearchResultsPage extends Base {
  get productTitles() {
    return cy.get('div.Title');
  }
}

module.exports = new SearchResultsPage();
