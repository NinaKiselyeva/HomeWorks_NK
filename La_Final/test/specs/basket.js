const mainPage = require('../../POM/mainPage');
const productPage = require('../../POM/productPage');
const { TEXT, URL, COUNTER } = require('../../helpers/constants');
const navBar = require('../../POM/components/navBar');
const filterPanel = require('../../POM/components/filterPanel');
const productsContainer = require('../../POM/components/productsContainer');
const cartPage = require('../../POM/cartPage');

describe('Apply filters on Products', function () {
  beforeEach(async () => {
    await browser.maximizeWindow();
    await mainPage.navigate(URL.MAIN_PAGE_URL);
  });

  afterEach(async () => {
    await navBar.homeNavBarLogo.click();
  });

  it('Should run search with search Criterion and receive results contain search criterion in Name', async () => {
    await filterPanel.searchByText(TEXT.SEARCH1);
    await expect(await productsContainer.productCard[COUNTER.FIRST_PRODUCT]).toBeExisting();
    await expect(await productsContainer.productCard[COUNTER.FIRST_PRODUCT]).toHaveTextContaining(TEXT.SEARCH1_RES);
    await expect(await productsContainer.productCard[4]).toHaveTextContaining(TEXT.SEARCH1_RES);
  });

  it('Should put in basket product from product page and then clear basket', async () => {
    await filterPanel.searchByText(TEXT.SEARCH2);
    await expect(await productsContainer.productCard[COUNTER.FIRST_PRODUCT]).toBeExisting();
    await mainPage.goToProductByIndex(COUNTER.FIRST_PRODUCT);
    await productPage.addToCart(COUNTER.PRODUCT_QUANTITY);
    await expect(await navBar.getCartCounter()).toEqual(COUNTER.PRODUCT_QUANTITY);
    await navBar.baseClick(navBar.buttonCart);
    await cartPage.baseClick(cartPage.buttonDeleteProducts);
    await expect(await cartPage.isCartQuantityEmpty()).toEqual(TEXT.CART_TOTAL_EMPTY);
  });

  it('Should be able to change product quantity in basket', async () => {
    await filterPanel.searchByText(TEXT.SEARCH2);
    await expect(await productsContainer.productCard[COUNTER.FIRST_PRODUCT]).toBeExisting();
    await mainPage.goToProductByIndex(COUNTER.FIRST_PRODUCT);
    await productPage.addToCart(COUNTER.PRODUCT_QUANTITY);
    await navBar.addToCartNotification.waitForDisplayed();
    await mainPage.navigate(URL.MAIN_PAGE_URL);
    await filterPanel.searchByText(TEXT.SEARCH3);
    await expect(await productsContainer.productCard[COUNTER.FIRST_PRODUCT]).toBeExisting();
    await mainPage.goToProductByIndex(COUNTER.FIRST_PRODUCT);
    await productPage.addToCart(COUNTER.PRODUCT_QUANTITY + COUNTER.PRODUCT_QUANTITY_EXTRA);
    await navBar.addToCartNotification.waitForDisplayed();
    await expect(await navBar.getCartCounter()).toEqual(COUNTER.PRODUCT_QUANTITY * 2 + COUNTER.PRODUCT_QUANTITY_EXTRA);
    await navBar.baseClick(navBar.buttonCart);
    await expect(await cartPage.getproductQuantityInCart(TEXT.SEARCH3)).toEqual(
      COUNTER.PRODUCT_QUANTITY + COUNTER.PRODUCT_QUANTITY_EXTRA
    );
    await cartPage.clearAndSetProductQuantity(TEXT.SEARCH3, COUNTER.PRODUCT_QUANTITY_EXTRA);
    await expect(await cartPage.getproductQuantityInCart(TEXT.SEARCH3)).toEqual(COUNTER.PRODUCT_QUANTITY_EXTRA);
    await expect(await navBar.getCartCounter()).toEqual(COUNTER.PRODUCT_QUANTITY + COUNTER.PRODUCT_QUANTITY_EXTRA);
  });
});
