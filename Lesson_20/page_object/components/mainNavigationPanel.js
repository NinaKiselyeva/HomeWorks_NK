const Base = require('../base');

class MainNavigationPanel extends Base {
  constructor(page) {
    super(page);
    this.page = page;
  }

  get navPanel() {
    return '.navigation';
  }

  async getNavPanelItemByName(navPanelItemName) {
    return this.page.locator(`//a[@title = '${navPanelItemName}' and .//ancestor::nav[@aria-label="Main navigation"]]`);
  }

  async goToNavPanelElementByName(navPanelItemName) {
    await (await this.getNavPanelItemByName(navPanelItemName)).click();
  }
}

module.exports = MainNavigationPanel;
