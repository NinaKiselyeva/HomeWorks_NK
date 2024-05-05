const { $ } = require('@wdio/globals');
const Page = require('./page');

class MainPage extends Page {
  async mainMenuBtn(buttonName) {
    return $(`a[data-test="nav-${buttonName.replace(/\s+/g, '-').toLowerCase()}"]`);
  }

  async mainMenuBtnClick(buttonName) {
    const button = await this.mainMenuBtn(buttonName);
    await button.click();
  }
}

module.exports = new MainPage();
