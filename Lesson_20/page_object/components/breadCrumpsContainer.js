const Base = require("../base");

class BreadCrumpsContainer extends Base {
  constructor(page) {
    super(page);
  }

  async breadCrumpsNavigation() {
    return this.page.locator('//*[@class="breadcrumbs-container"]');
  }

  async getPageContentData() {
    return this.page.locator('//div[@class="page-content"]//div[@class="page-content"]');
  }
}

module.exports = BreadCrumpsContainer;
