const Base = require("../base");

class SearchModal extends Base {
  get searchInput() {
    return $("//input[@class='DocSearch-Input']");
  }

  async searchResult(index) {
    return $(`//*[@id="docsearch-item-${index}"]/descendant::*[@class="DocSearch-Hit-title"]`);
  }

  async searchByCriterion(searchCriterion) {
    await this.searchInput.waitForDisplayed({ timeout: 2000 });
    await this.searchInput.setValue(searchCriterion);
  }

  async goToSearchResultByIndex(index) {
    const resultElement = await this.searchResult(index);
    await resultElement.waitForDisplayed({ timeout: 2000 });
    await resultElement.click();
  }
}

module.exports = new SearchModal();
