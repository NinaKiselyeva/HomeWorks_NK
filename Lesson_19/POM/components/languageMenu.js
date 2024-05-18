const Base = require("../base");

class LanguageMenu extends Base {
  get languageButton() {
    return $("//*[@class='navbar__item dropdown dropdown--hoverable dropdown--right']");
  }

  get languageNavMenu() {
    return $('//*[@class="dropdown__menu"]');
  }

  async goToLanguageButton() {
    await this.languageButton.waitForDisplayed();
    await this.languageButton.moveTo();
  }

  get suggestLangList() {
    return $$('//*[@class = "dropdown__menu"]/li/a');
  }

  async goToSuggestLangByNumber(suggestLangNumber) {
    await this.languageButton.waitForDisplayed();
    await this.languageButton.moveTo();
    await this.languageNavMenu.waitForDisplayed();
    await this.suggestLangList[suggestLangNumber].waitForDisplayed();
    await this.suggestLangList[suggestLangNumber].click();
    await browser.pause(2000);
  }

  async goToSuggestLangByName(itemName) {
    await this.clickNavButton();
    await (await this.getSuggestItemByName(itemName)).waitForDisplayed();
    await (await this.getSuggestItemByName(itemName)).click();
  }
}

module.exports = new LanguageMenu();
