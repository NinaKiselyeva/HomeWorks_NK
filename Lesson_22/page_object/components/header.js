const Base = require('../base');

class Header extends Base {
  get loginButton() {
    return cy.get(`div.header-1rtef0v`);
  }

  goToLoginPage() {
    this.loginButton.click();
  }

  getBasketButtonQuantity() {
    return cy.get('a[data-testid = header-shopping-bag-link-el] div.header-woziy8');
  }

  getItemsInBasketQuantity() {
    this.basketButton.invoke('div');
  }

  get miniShoppingBagPopup() {
    return cy.get('div[data-testid="header-mini-shopping-bag"]', { timeout: 10000 });
  }
}

module.exports = new Header();
