const Base = require('../base');

class CookiePopup extends Base {
  get cookiesContainer() {
    return cy.get('div[aria-label="Cookie banner"]');
  }

  get acceplAllButton() {
    return cy.get('button#onetrust-accept-btn-handler');
  }

  closeCookiesDialog(text) {
    this.cookiesContainer.should('exist');
    this.acceplAllButton.click();
  }
}

module.exports = new CookiePopup();
