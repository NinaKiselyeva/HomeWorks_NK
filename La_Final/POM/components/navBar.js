const Base = require('../base');

class NavBar extends Base {
  async mainMenuBtn(buttonName) {
    return $(`a[data-test="nav-${buttonName.replace(/\s+/g, '-').toLowerCase()}"]`);
  }

  get homeNavBarLogo() {
    return $('a.navbar-brand');
  }

  get addToCartNotification() {
    return $('div#toast-container');
  }

  get buttonCart() {
    return $('a[data-test="nav-cart"] span');
  }

  async getCartCounter() {
    await this.addToCartNotification.waitForDisplayed();
    await this.buttonCart.waitForDisplayed();
    return parseInt(await this.buttonCart.getText());
  }

  async subCategories(categoryName) {
    return $(`a[href="#/category/${categoryName.replace(/\s+/g, '-').toLowerCase()}"]`);
  }

  async clickMainMenuBtn(buttonName) {
    const button = await this.mainMenuBtn(buttonName);
    await this.baseClick(button);
  }

  async clickCategoryOption(categoryName) {
    const category = await this.subCategories(categoryName);
    await this.baseClick(category);
  }
}

module.exports = new NavBar();
