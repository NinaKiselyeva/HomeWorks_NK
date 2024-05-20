const Base = require('./base');

class LoginPage extends Base {
  get inputEmail() {
    return $('#email');
  }

  get inputPassword() {
    return $('#password');
  }

  get btnLogin() {
    return $('input[type="submit"]');
  }

  get btnSignGoogle() {
    return $('button.google-sign-in-button');
  }

  async errInput(error_input) {
    return $(`div[data-test="${error_input}-error"`);
  }

  async getErrorText(error_input) {
    await this.errInput(error_input).waitForExist({ timeout: 10000 });
    await this.errInput(error_input).waitForDisplayed();
  }

  async login(email, password) {
    await this.inputEmail.setValue(email);
    await this.inputPassword.setValue(password);
    await this.btnLogin.click();
    await browser.pause(3000);
  }
}

module.exports = new LoginPage();
