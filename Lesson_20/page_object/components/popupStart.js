const Base = require('../base');

class Popup extends Base {
  constructor(page) {
    super(page);
  }
  get closePopupButtonSelector() {
    return '.gePopupsContainer .glClose';
  }

  async closePopup() {
    try {
      await this.page.waitForTimeout(2000);
      await this.page.waitForSelector('#globale_popup .gePopupsContainer');
      await this.page.click(this.closePopupButtonSelector);
      console.log('popup is closed');
    } catch (error) {
      console.error('ERROR: popup is not closed');
    }
  }
}

module.exports = Popup;
