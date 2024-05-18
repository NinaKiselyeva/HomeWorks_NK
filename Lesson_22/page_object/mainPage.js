const Base = require('./base');

class MainPage extends Base {
  get myAccountButton() {
    return cy.get('a.MuiTypography-root  .footer-m3c4re');
  }
}

module.exports = new MainPage();
