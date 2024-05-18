const Base = require("../base");

class LeftSideBar extends Base {
  get navButton() {
    return $("//button[@aria-label='Toggle navigation bar']");
  }

  get leftSideBarItems() {
    return $('//*[@class="navbar-sidebar__items"]');
  }

  async getSuggestItemByName(itemName) {
    return $(`//*[contains(@class, "menu__link") and text()='${itemName}']//ancestor::a`);
  }

  async switchToSmallWindowSize(width, hight) {
    await browser.setWindowSize(width, hight);
    await this.navButton.waitForDisplayed({ timeout: 2000 });
    expect(await this.navButton.isDisplayed()).toBe(true);
  }

  async clickNavButton() {
    await this.navButton.waitForDisplayed();
    await this.navButton.click();
  }

  async goToSuggestItemByName(itemName) {
    await this.clickNavButton();
    await (await this.getSuggestItemByName(itemName)).waitForDisplayed();
    await (await this.getSuggestItemByName(itemName)).click();
  }
}

module.exports = new LeftSideBar();
