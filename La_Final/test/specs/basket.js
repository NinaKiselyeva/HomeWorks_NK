const mainPage = require('../../POM/mainPage');
const productPage = require('../../POM/productPage');
const { TEXT, URL, COUNTER } = require('../../helpers/constants');
const navBar = require('../../POM/components/navBar');
const filterPanel = require('../../POM/components/filterPanel');
const productsContainer = require('../../POM/components/productsContainer');

describe('Apply filters on Products', function () {
  beforeEach(async () => {
    await browser.maximizeWindow();
    await mainPage.navigate(URL.MAIN_PAGE_URL);
  });

  afterEach(async () => {
    await navBar.homeNavBarLogo.click();
  });

  it('Should run search with search Criterion and receive results contain search criterion in Name', async () => {
    await filterPanel.searchByText(TEXT.SEARCH_SCREW);
    await expect(await productsContainer.productCard[COUNTER.FIRST_PRODUCT]).toBeExisting();
    await expect(await productsContainer.productCard[COUNTER.FIRST_PRODUCT]).toHaveTextContaining(
      TEXT.SEARCH_SCREW_RES
    );
    await expect(await productsContainer.productCard[4]).toHaveTextContaining(TEXT.SEARCH_SCREW_RES);
  });

  it('Should put in basket product from product page', async () => {
    await filterPanel.searchByText(TEXT.SEARCH_CUT);
    await expect(await productsContainer.productCard[0]).toBeExisting();
    await mainPage.goToProductByIndex(COUNTER.FIRST_PRODUCT);
    await productPage.addToCart(COUNTER.PRODUCT_QUANTITY);
  });
});
