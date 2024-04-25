const Base = require("./base");

class KidsPage extends Base {
  constructor(page) {
    super(page);
  }

  async getModuleByName(moduleName, position) {
    return this.page.locator(
      `(//a[contains(text(), '${moduleName}') and //ancestor::section[contains(@class, 'js-bl-tier--66cbbe90-ba26-435c-a01f-4567f89210d9')]])[${position}]`,
      { timeout: 5000 }
    );
  }

  async goToModuleByNameAndPosition(moduleName, position) {
    await (await this.getModuleByName(moduleName, position)).click();
  }
}

module.exports = KidsPage;
