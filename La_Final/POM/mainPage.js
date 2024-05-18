const Base = require('./base');

class MainPage extends Base {
  get paginationBar() {
    return $('ul.pagination');
  }

  get productCardLink() {
    return $$('div.card-body');
  }

  async pageByNumber(pageNumber) {
    if (pageNumber === 1) {
      return $('ul.pagination li:first-child a');
    } else if (pageNumber === 'last') {
      return $('ul.pagination li:last-child a');
    } else return $(`//a[contains(text(), "${pageNumber}")]/ancestor::li`);
  }

  async goToProductByIndex(productIndex) {
    await browser.pause(2000);
    await this.productCardLink[productIndex].waitForExist({ timeout: 3000 });
    await this.productCardLink[productIndex].click();
  }

  async goToPageByNumber(pageNumber) {
    await this.paginationBar.waitForExist({ timeout: 3000 });
    const numberPage = await this.pageByNumber(pageNumber);
    await this.baseClick(numberPage);
  }
}

module.exports = new MainPage();
