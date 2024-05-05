const { $ } = require('@wdio/globals');
const Page = require('./page');

class AccountPage extends Page {
  get accoutTitle() {
    return $('h1[data-test="page-title"]');
  }

  get accountMenu() {
    return $('a#menu');
  }

  get btnSignout() {
    return $('a[data-test="nav-sign-out"]');
  }

  async clickSignoutBtn() {
    await this.accountMenu.click();
    await this.btnSignout.click();
  }
}

module.exports = new AccountPage();
