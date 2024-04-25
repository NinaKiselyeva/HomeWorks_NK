const { test: base, expect } = require('@playwright/test');
const HomePage = require('../page_object/homePage');
const Cookies = require('../page_object/components/acceptCookies');
const Popup = require('../page_object/components/popupStart');
const MainNavigationPanel = require('../page_object/components/mainNavigationPanel');
const LeftNavMenu = require('../page_object/components/leftNavMenu');
const ProductPage = require('../page_object/productPage');
const CategoryPage = require('../page_object/categoryPage');
const HeaderBasket = require('../page_object/components/headerBasket');
const FilterByContainer = require('../page_object/components/filterByContainer');

const exp = require('constants');

const test = base.extend({
  page: async ({ page }, use) => {
    const homePage = new HomePage(page);
    const cookies = new Cookies(page);
    const popup = new Popup(page);
    await homePage.navigate('https://direct.asda.com/');
    await popup.closePopup();
    await cookies.acceptCookies();
    await use(page);
  },
});

test.describe('George test. Checking put Product into basket', async function () {
  let homePage;
  let mainNavigationPanel;
  let leftNavMenu;
  let categoryPage;
  let productPage;
  let headerBasket;
  let filterByContainer;

  test.beforeEach(async ({ page, context }) => {
    homePage = new HomePage(page);
    mainNavigationPanel = new MainNavigationPanel(page);
    leftNavMenu = new LeftNavMenu(page);
    categoryPage = new CategoryPage(page);
    productPage = new ProductPage(page);
    headerBasket = new HeaderBasket(page);
    filterByContainer = new FilterByContainer(page);
  });

  test('Should put into empty basket a Product from Product page and check basket counter became 1', async ({
    page,
  }) => {
    await homePage.navigate('https://direct.asda.com/');
    await expect(await headerBasket.basketCounterLocator).toBeHidden();
    await mainNavigationPanel.goToNavPanelElementByName('Women');
    await leftNavMenu.goToPageByLeftNavMenu('Clothing', 'Dresses');
    await filterByContainer.goToPageBySelectParametersItems('Colour', 'Reds');
    await categoryPage.openProductByIndexAtPage(1);
    await page.waitForTimeout(5000);
    await expect(productPage.productBuyingBlock).toBeVisible();
    await productPage.clickSizeButon('10');
    await productPage.chooseSizeButtonSelector.click();
    await page.waitForTimeout(5000);
    await expect(await headerBasket.basketCounterLocator).toContainText('1');
  });
});
