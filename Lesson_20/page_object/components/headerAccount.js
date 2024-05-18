const Base = require("../base");

class HeaderAccount extends Base {
  constructor(page) {
    super(page);
  }

  get notificationContainer() {
    return ".notification-container";
  }

  async getHeaderAccountItemByName(itemName) {
    return this.page.locator(
      `//a[contains(text(), "${itemName}") and .//ancestor::div[contains(@class, 'inner-content')]]`,
      { timeout: 5000 }
    );
  }

  async goToElementByName(itemName) {
    await (await this.getHeaderAccountItemByName(itemName)).click();
  }
}

module.exports = HeaderAccount;
