const Base = require("../POM/base");

class DocsPage extends Base {
  get pageTheme() {
    return $("//html");
  }

  get subTitle() {
    return $('//*[@class="hero__subtitle"]');
  }

  async getSuggestItemByName(itemName) {
    return $(`//*[contains(@class,"services-suggest__item-title") and text()='${itemName}']//ancestor::a`);
  }
}

module.exports = new DocsPage();
