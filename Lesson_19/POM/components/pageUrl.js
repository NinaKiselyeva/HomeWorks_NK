const Base = require("../base");

class PageUrl extends Base {
  async getPageUrl() {
    return await browser.getUrl();
  }
}
module.exports = new PageUrl();
