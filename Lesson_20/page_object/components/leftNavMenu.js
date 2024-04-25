const Base = require('../base');

class LeftNavMenu extends Base {
  constructor(page) {
    super(page);
  }

  async getMenuItem(itemCategory, itemName) {
    return this.page.locator(
      `//*[text() = '${itemCategory}']/parent::h4//following::ul//child::a[text() = '${itemName}']`
    );
  }

  async goToPageByLeftNavMenu(itemCategory, itemName) {
    await (await this.getMenuItem(itemCategory, itemName)).click();
  }
}

module.exports = LeftNavMenu;
