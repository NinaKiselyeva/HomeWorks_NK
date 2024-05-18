const Base = require('./base');

class LoginPage extends Base {
  get emailInput() {
    return cy.get('div#emailOuter input');
  }

  get passwordInput() {
    return cy.get('div.passwordInner input');
  }

  get signInButton() {
    return cy.get('.btn-sign-in');
  }

  get alertMessage() {
    return cy.get('div.SignInTo div.Failure div.msgBody');
  }

  setLoginData(login, password) {
    this.emailInput.type(login);
    this.passwordInput.type(password);
    this.signInButton.click();
  }

  setOnlyLoginData(login) {
    this.emailInput.type(login);
    this.signInButton.click();
  }

  setOnlyPasswordData(password) {
    this.passwordInput.type(password);
    this.signInButton.click();
  }
}

module.exports = new LoginPage();
