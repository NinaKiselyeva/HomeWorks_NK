const Base = require("../base");

class Cookies extends Base {
  constructor(page) {
    super(page);
  }
  get acceptCookiesButtonSelector() {
    return "button#onetrust-accept-btn-handler";
  }

  async acceptCookies() {
    try {
      await this.page.waitForSelector("div#onetrust-banner-sdk", { timeout: 5000 });
      await this.page.click(this.acceptCookiesButtonSelector);
      console.log("cookies are accepted");
    } catch (error) {
      console.error("ERROR: cookies are not accepted");
    }
  }
}

module.exports = Cookies;
