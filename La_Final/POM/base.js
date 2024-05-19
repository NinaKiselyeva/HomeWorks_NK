class Base {
  async navigate(url) {
    await browser.url(url);
  }
  async baseClick(selector) {
    await selector.waitForDisplayed();
    await selector.click();
  }
}

module.exports = Base;
