const Base = require("./base");

class HomePage extends Base {
  constructor(page) {
    super(page);
  }

  get loginTitle() {
    return "//a[contains (text(), 'testgeorgeui@gmail.com')]";
  }

  async acceptCookies() {
    await frame.switchToFrame(frame.acceptCookiesBodySelector);
    await this.acceptAllCookiesButton.waitForDisplayed();
    await this.acceptAllCookiesButton.click();
    await browser.switchToParentFrame();
  }
}

module.exports = HomePage;
