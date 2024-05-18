const Base = require("../base");

class PageTitle extends Base {
  async getPageTitle() {
    return await browser.getTitle();
  }

  get subTitle() {
    return $('//*[@class="hero__subtitle"]');
  }
}
module.exports = new PageTitle();
