const { test: base, expect } = require('@playwright/test');
const HomePage = require('../page_object/homePage');
const Cookies = require('../page_object/components/acceptCookies');
const Popup = require('../page_object/components/popupStart');
const MainNavigationPanel = require('../page_object/components/mainNavigationPanel');
const LeftNavMenu = require('../page_object/components/leftNavMenu');
const BreadCrumpsContainer = require('../page_object/components/breadCrumpsContainer');
const CategoryPage = require('../page_object/categoryPage');
const ProductPage = require('../page_object/productPage');

const exp = require('constants');

const test = base.extend({
  page: async ({ page, context }, use) => {
    const homePage = new HomePage(page);
    const cookies = new Cookies(page);
    const popup = new Popup(page);
    await homePage.navigate('https://direct.asda.com/');
    await popup.closePopup();
    await cookies.acceptCookies();
    await use(page);
  },
});

test.describe('George test. Checking opening Women page, selecting products category using LeftNavPanel', async function () {
  let homePage;
  let mainNavigationPanel;
  let leftNavMenu;
  let breadCrumpsContainer;
  let categoryPage;
  let productPage;

  test.beforeEach(async ({ page, context }) => {
    homePage = new HomePage(page);
    mainNavigationPanel = new MainNavigationPanel(page);
    leftNavMenu = new LeftNavMenu(page);
    breadCrumpsContainer = new BreadCrumpsContainer(page);
    categoryPage = new CategoryPage(page);
    productPage = new ProductPage(page);
  });

  test("Should switch to Women's Shoes products page by clicking on 'All Shoes' link by 'Shoes & Accessories' category in left navigation menu", async ({
    page,
  }) => {
    await homePage.navigate('https://direct.asda.com/');
    await mainNavigationPanel.goToNavPanelElementByName('Women');
    await leftNavMenu.goToPageByLeftNavMenu('Shoes & Accessories', 'All Shoes');
    await expect(await breadCrumpsContainer.breadCrumpsNavigation()).toContainText('Women' + "Women's Shoes");
  });

  test('Should open the 1st Product at opened Category page  Women>Shoes & Accessories', async ({ page }) => {
    await homePage.navigate('https://direct.asda.com/');
    await mainNavigationPanel.goToNavPanelElementByName('Women');
    await leftNavMenu.goToPageByLeftNavMenu('Shoes & Accessories', 'All Shoes');
    await categoryPage.openProductByIndexAtPage(1);
    await page.waitForTimeout(3000);
    await expect(productPage.productBuyingBlock).toBeVisible();
  });
});
