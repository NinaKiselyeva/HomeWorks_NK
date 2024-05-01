const mainPage = require('../../page_object/mainPage');
const productPage = require('../../page_object/productPage');
const cookiesPopup = require('../../page_object/components/cookiesPopup');
const header = require('../../page_object/components/header');
const { ITEM } = require('../../helpers/constants');
const mainMenu = require('../../page_object/components/mainMenu');

describe('NEXT put in Basket functionality', () => {
  beforeEach(() => {
    mainPage.navigate('https://www.next.pl/en');
    cookiesPopup.closeCookiesDialog();
  });

  it('Should check initial quantity of Products in nbasket is 0', () => {
    header.getBasketButtonQuantity().should('contain', ITEM.NULL_BASKET_COUNTER);
  });

  it('Should open Category page, selected from Main Menu > Group > Subcategory > Category', () => {
    mainMenu.goToProductCategoryPage(ITEM.PRODUCT_GROUP, ITEM.PRODUCT_SUBCAT, ITEM.PRODUCT_CAT);
    cy.url().should('include', ITEM.URL_PROD1);
  });

  it('Should put Product to empty Basket and return InBasket couner = 1', () => {
    mainMenu.goToProductCategoryPage('Baby', 'Accessories', 'Bibs');
    productPage.goToProductPageByProductNumber(ITEM.PRODUCT_NUMBER);
    productPage.descriptionSection.should('be.visible');
    productPage.putProductInBag();
    header.miniShoppingBagPopup.should('be.visible');
    header.getBasketButtonQuantity().should('contain', ITEM.ONE__BASKET_COUNTER);
  });
});
