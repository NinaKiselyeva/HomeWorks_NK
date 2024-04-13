const Base = require("../base");
const { Key } = require("webdriverio");

class RightNavBar extends Base {
  get searchButton() {
    return $("//button[@class='DocSearch DocSearch-Button']");
  }

  get modeButton() {
    return $("//button[@class='clean-btn toggleButton_gllP']");
  }

  get modeButton() {
    return $("//button[@class='clean-btn toggleButton_gllP']");
  }

  async goToModeButton() {
    await this.modeButton.waitForDisplayed();
    await this.modeButton.moveTo();
  }

  async clickModeButton() {
    await this.modeButton.waitForDisplayed();
    await this.modeButton.click();
  }

  async goToSearchModalFromKeyboard() {
    await this.searchButton.waitForDisplayed({ timeout: 2000 });
    await browser.keys([Key.Ctrl, "k"]);
  }
}

module.exports = new RightNavBar();
