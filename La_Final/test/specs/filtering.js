const mainPage = require('../../POM/mainPage');
const { TEXT, BUTTON, URL, COUNTER } = require('../../helpers/constants');
const filterPanel = require('../../POM/components/filterPanel');
const productsContainer = require('../../POM/components/productsContainer');
const navBar = require('../../POM/components/navBar');

describe('Apply filters on Products', function () {
  beforeEach(async () => {
    await browser.maximizeWindow();
    await mainPage.navigate(URL.MAIN_PAGE_URL);
  });

  afterEach(async () => {
    await navBar.homeNavBarLogo.click();
  });

  it('Should apply category filter on select Category option in Category dropdown', async () => {
    await navBar.clickMainMenuBtn(BUTTON.CATEGORIES);
    await navBar.clickCategoryOption(BUTTON.CAT_POWER_TOOLS);
    await expect(await filterPanel.filterTitle).toHaveText(TEXT.POWER_TOOLS_TITLE);
    await expect(await productsContainer.countProductsPerPage()).toEqual(COUNTER.POWTOOLS);
  });

  it('Should apply filter by tools category in Filter Panel', async () => {
    await navBar.clickMainMenuBtn(BUTTON.CATEGORIES);
    await navBar.clickCategoryOption(BUTTON.CAT_POWER_TOOLS);
    await filterPanel.clickCategoryByName(BUTTON.SUBCAT_SAW);
    await expect(await productsContainer.countProductsPerPage()).toEqual(COUNTER.POWTOOLS_SAW_COUNT);
  });

  it('Should apply a few filters in different categories in Filter Panel', async () => {
    await filterPanel.clickCategoryByName(BUTTON.CAT_OTHER);
    await expect(await productsContainer.productCard[COUNTER.FIRST_PRODUCT]).toBeExisting();
    await expect(await productsContainer.countProductsPerPage()).toEqual(COUNTER.OTHER_1);
    await mainPage.goToPageByNumber(COUNTER.LAST_PAGE);
    await expect(await productsContainer.countProductsPerPage()).toEqual(COUNTER.OTHER_2);
    await filterPanel.clicSubkCategoryByName(BUTTON.CAT_HAND_TOOLS, BUTTON.SUBCAT_PLIERS);
    await expect(await productsContainer.productCard[COUNTER.FIRST_PRODUCT]).toHaveTextContaining(TEXT.PLIERS);
  });

  it('Should apply filters and sorting at the same time', async () => {
    await filterPanel.clicSubkCategoryByName(BUTTON.CAT_HAND_TOOLS, BUTTON.SUBCAT_HANDSAW);
    await filterPanel.clicSubkCategoryByName(BUTTON.CAT_HAND_TOOLS, BUTTON.SUBCAT_WRENCH);
    await expect(await productsContainer.productCard[COUNTER.FIRST_PRODUCT]).toHaveTextContaining(TEXT.WOOD_SAW);
    await expect(await productsContainer.productCard[COUNTER.LAST_PRODUCT]).toHaveTextContaining(TEXT.OPEN_SPANNERS);
    await filterPanel.applySortingByValue(BUTTON.FLTR_NAME_A_Z);
    await expect(await productsContainer.productCard[COUNTER.FIRST_PRODUCT]).toHaveTextContaining(TEXT.ADJ_WRENCH);
    await expect(await productsContainer.productCard[COUNTER.LAST_PRODUCT]).toHaveTextContaining(TEXT.WOOD_SAW);
    await filterPanel.applySortingByValue(BUTTON.FLTR_PRICE_LOW);
    await expect(await productsContainer.productCard[COUNTER.FIRST_PRODUCT]).toHaveTextContaining(TEXT.WOOD_SAW_PRICE);
    await expect(await productsContainer.productCard[COUNTER.LAST_PRODUCT]).toHaveTextContaining(
      TEXT.OPEN_SPANNERS_PRICE
    );
  });
});
