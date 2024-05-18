const { test: base, expect } = require('@playwright/test');
const HomePage = require('../page_object/homePage');
const Cookies = require('../page_object/components/acceptCookies');
const Popup = require('../page_object/components/popupStart');
const MainNavigationPanel = require('../page_object/components/mainNavigationPanel');
const KidsPage = require('../page_object/kidsPage');
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

test.describe('George test. Checking opening Kids page, switch to Girls/Boys dept, using filtering and sorting of products', async function () {
  let homePage;
  let mainNavigationPanel;
  let kidsPage;
  let filterByContainer;

  test.beforeEach(async ({ page, context }) => {
    homePage = new HomePage(page);
    kidsPage = new KidsPage(page);
    mainNavigationPanel = new MainNavigationPanel(page);
    filterByContainer = new FilterByContainer(page);
  });

  test('Should open Kids > Girls subcategory page and apply filters', async ({ page }) => {
    await homePage.navigate('https://direct.asda.com/');
    await mainNavigationPanel.goToNavPanelElementByName('Kids');
    await kidsPage.goToModuleByNameAndPosition('SHOP GIRLS', 1);
    await filterByContainer.goToPageBySelectParametersItems('Category', 'Multipacks');
    await expect(page.url()).toContain('george/kids/multipacks/');
    await page.waitForTimeout(3000);
    await filterByContainer.goToPageBySelectParametersItems('Size', '4-5 Years');
    await page.waitForTimeout(3000);
    await filterByContainer.goToPageBySelectParametersItems('Product Type', 'Dresses');
    await page.waitForTimeout(5000);
    await filterByContainer.goToPageBySelectParametersItems('Colour', 'Multi-coloured');
    await expect(await filterByContainer.getAppliedFiltersPanel()).toContainText(
      '4-5 Years' + 'Dresses' + 'Multi-coloured'
    );
  });

  test('Should open Kids > Boys subcategory page and apply sorting', async ({ page }) => {
    await homePage.navigate('https://direct.asda.com/');
    await mainNavigationPanel.goToNavPanelElementByName('Kids');
    await kidsPage.goToModuleByNameAndPosition('SHOP BOYS', 2);
    await filterByContainer.goToPageBySelectParametersItems('Sort By', 'Low - High');
    await expect(await filterByContainer.getAppliedSorting()).toContainText('Low - High');
  });
});
