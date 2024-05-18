const Base = require('../base');

class NavBar extends Base {
  async mainMenuBtn(buttonName) {
    return $(`a[data-test="nav-${buttonName.replace(/\s+/g, '-').toLowerCase()}"]`);
  }

  get homeNavBarLogo() {
    return $('a.navbar-brand');
  }

  get buttonCart() {
    return $('a[data-test="nav-cart"]');
  }

  async getCartCounter() {
    await this.buttonCart.waitForExist();
    return this.buttonCart.getValue();
  }

  async subCategories(categoryName) {
    return $(`a[href="#/category/${categoryName.replace(/\s+/g, '-').toLowerCase()}"]`);
  }

  async clickMainMenuBtn(buttonName) {
    const button = await this.mainMenuBtn(buttonName);
    await this.baseClick(button);
    // await button.waitForExist({ timeout: 10000 });
    // await button.click();
  }

  async clickCategoryOption(categoryName) {
    //this.clickMainMenuBtn('Categories');
    const category = await this.subCategories(categoryName);
    await this.baseClick(category);
    // await category.waitForExist();
    // await category.click();
  }

  //     get searchButton() {
  //     return $("//button[@class='DocSearch DocSearch-Button']");
  //   }

  //   get modeButton() {
  //     return $("//button[@class='clean-btn toggleButton_gllP']");
  //   }

  //   get modeButton() {
  //     return $("//button[@class='clean-btn toggleButton_gllP']");
  //   }

  //   async goToModeButton() {
  //     await this.modeButton.waitForDisplayed();
  //     await this.modeButton.moveTo();
  //   }

  //   async clickModeButton() {
  //     await this.modeButton.waitForDisplayed();
  //     await this.modeButton.click();
  //   }

  //   async goToSearchModalFromKeyboard() {
  //     await this.searchButton.waitForDisplayed({ timeout: 2000 });
  //     await browser.keys([Key.Ctrl, 'k']);
  //   }
}

module.exports = new NavBar();
