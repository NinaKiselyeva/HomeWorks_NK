const Base = require('../base');

class FilterPanel extends Base {
  get filterTitle() {
    return $('h2[data-test="page-title"]');
  }

  get filterPanel() {
    return $('div#filters');
  }

  get sortSelect() {
    return $('select.form-select');
  }

  get searchInput() {
    return $('input#search-query');
  }

  get searchButton() {
    return $('button[data-test="search-submit"]');
  }

  get searchFieldFIlled() {
    return $('form.ng-dirty');
  }

  async sortValue(value) {
    return $(`option[value="${value}"]`);
  }

  async filterCheckbox(toolCategoryName) {
    return $(`//label[contains(text(), "${toolCategoryName}")]/input[@type="checkbox"]`);
  }

  async filterCategoryByName(categoryName) {
    return $(`//label[contains(text(), "${categoryName}")]`);
  }

  async filterSubCategoryByName(categoryName, subCategoryName) {
    return $(
      `//label[contains(text(), "${categoryName}")]/parent::div/descendant::div/label[contains(text(), "${subCategoryName}")]`
    );
  }

  async applySortingByValue(value) {
    await this.baseClick(this.sortSelect);
    const option = await this.sortValue(value);
    await this.baseClick(option);
    await browser.pause(3000);
  }

  async clickCategoryByName(categoryName) {
    const category = await this.filterCategoryByName(categoryName);
    await browser.pause(2000);
    await category.waitForExist({ timeout: 3000 });
    await category.click();
    return category;
  }

  async clicSubkCategoryByName(categoryName, subCategoryName) {
    const subCategory = await this.filterSubCategoryByName(categoryName, subCategoryName);
    await subCategory.waitForExist({ timeout: 3000 });
    await subCategory.click();
  }

  async searchByText(searchCriterion) {
    await this.searchInput.waitForExist();
    await this.searchInput.setValue(searchCriterion);
    await this.searchFieldFIlled.waitForExist();
    await this.searchButton.click();
    await browser.pause(2000);
  }
}

module.exports = new FilterPanel();
