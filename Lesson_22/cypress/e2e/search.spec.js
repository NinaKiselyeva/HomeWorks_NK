const mainPage = require('../../page_object/mainPage');
const search = require('../../page_object/components/search');
const searchResultsPage = require('../../page_object/searchResultsPage');
const cookiesPopup = require('../../page_object/components/cookiesPopup');
const productFilters = require('../../page_object/components/productFilters');
const { ITEM } = require('../../helpers/constants');

describe('NEXT Product Searching and filtering at Product page', () => {
  beforeEach(() => {
    mainPage.navigate('https://www.next.pl/en');
    cookiesPopup.closeCookiesDialog();
  });

  it('Should go to Product page by searching its article number', () => {
    search.searchAllResults(ITEM.ITEM_TEXT1);
    searchResultsPage.productTitles.should('contain', 'Pull-On Skirt');
  });

  it('Should show filtered parameters for Product', () => {
    search.searchAllResults(ITEM.ITEM_TEXT1);
    productFilters.getProductColorFilter(ITEM.COLOR);
    productFilters.colorCombobox.should('contain', ITEM.COLOR_VALUE);
    productFilters.getProductSizeFilter(ITEM.SIZE);
    productFilters.sizeCombobox.should('contain', ITEM.SIZE_VALUE);
  });
});
