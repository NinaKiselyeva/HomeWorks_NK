const Base = require('../base');

class FilterByContainer extends Base {
  constructor(page) {
    super(page);
    this.page = page;
  }

  get filterGrid() {
    return "//div[@class = 'refinements__groups flex-grid']";
  }

  async getAppliedFiltersPanel() {
    return this.page.locator('//div[@data-id="refinements-list-wrap"]');
  }

  async getAppliedSorting() {
    return this.page.locator('//*[@data-id="sorting_dropdown"]');
  }

  async getParameterButton(buttonName) {
    if (buttonName !== 'Sort By') {
      return this.page.locator(
        `//div[@class = 'refinements__groups flex-grid']//descendant::button[@data-id='${buttonName}']`,
        { timeout: 5000 }
      );
    } else {
      return this.page.locator(
        `//div[@class = 'refinements__groups flex-grid']//descendant::button[@data-id='sorting_dropdown']`,
        { timeout: 5000 }
      );
    }
  }
  async getCategorySubItem(buttonName, itemName) {
    if (buttonName === 'Category') {
      return this.page.locator(
        `//*[@id="flyout__content-${buttonName.toLowerCase()}"]//descendant::a[contains(text(),'${itemName}')]`,
        {
          timeout: 7000,
        }
      );
    } else if (buttonName === 'Sort By') {
      return this.page.locator(
        `//*[@class="dropdown__list scrollbar-view active"]//descendant::button[contains(@data-value, '${itemName}')]`,
        {
          timeout: 7000,
        }
      );
    } else {
      return this.page.locator(
        `//*[@id="flyout__content-${buttonName
          .toLowerCase()
          .replace(/\s+/g, '')}"]//descendant::div[@data-id="${itemName}"]`,
        {
          timeout: 7000,
        }
      );
    }
  }

  async goToPageBySelectParametersItems(buttonName, itemName) {
    await (await this.getParameterButton(buttonName)).click();
    console.log(buttonName);
    await (await this.getCategorySubItem(buttonName, itemName, { timeout: 5000 })).click();
    console.log(buttonName, itemName + ' is clicked');
    await (await this.getParameterButton(buttonName)).click();
  }
}

module.exports = FilterByContainer;
