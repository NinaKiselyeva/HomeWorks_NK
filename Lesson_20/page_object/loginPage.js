const Base = require('./base');

class LoginPage extends Base {
  constructor(page) {
    super(page);
  }
  // get loginContainer() {
  //   return 'div.loginlogin';
  // }

  async loginContainer() {
    return this.page.locator('div.main-container');
  }

  async emailInput() {
    return this.page.locator('input.email-phone-input');
  }

  async passwordInput() {
    return this.page.locator('input.show-password');
  }

  get signInButton() {
    return "//button[contains(text(), 'Sign in')]";
  }

  async fillLoginForm(login, password) {
    //await (await this.loginContainer()).waitFor();
    //await this.loginContainer.isVisible();
    if (login && password) {
      await (await this.emailInput()).fill(login);
      await (await this.passwordInput()).fill(password);
      console.log('L&P are set');
    } else if (login) {
      await (await this.emailInput()).fill(login);
    } else if (password) {
      await (await this.passwordInput()).fill(password);
    } else {
      throw new Error('Both login and password are required.');
    }
    await newPage.pause();
    await (await this.signInButton).click();
  }
}

module.exports = LoginPage;
