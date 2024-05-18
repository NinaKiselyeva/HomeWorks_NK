const { $ } = require('@wdio/globals');
const Page = require('./page');

class LoginPage extends Page {
  get inputEmail() {
    return $('#email');
  }

  get inputPassword() {
    return $('#password');
  }

  get btnLogin() {
    return $('input[type="submit"]');
  }

  async errInput(error_input) {
    return $(`div[data-test="${error_input}-error"`);
  }

  async getErrorText(error_input) {
    await this.errInput(error_input).waitForExist({ timeout: 5000 });
    await this.errInput(error_input).waitForDisplayed();
  }

  async login(email, password) {
    await this.inputEmail.setValue(email);
    await this.inputPassword.setValue(password);
    await this.btnLogin.click();
  }

  open() {
    return super.open('auth/login');
  }
}

module.exports = new LoginPage();
