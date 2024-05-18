const mainPage = require('../../page_object/mainPage');
const cookiesPopup = require('../../page_object/components/cookiesPopup');
const header = require('../../page_object/components/header');
const loginPage = require('../../page_object/loginPage');
const { ITEM } = require('../../helpers/constants');

describe('NEXT', () => {
  beforeEach(() => {
    mainPage.navigate('https://www.next.pl/en');
    cookiesPopup.closeCookiesDialog();
    cy.clearCookies();
    console.log(cy.getCookies);
  });

  it('Should show an error on login w/o password', () => {
    header.goToLoginPage();
    cy.clearCookies();
    loginPage.setOnlyLoginData(ITEM.EMAIL);
    loginPage.alertMessage.should('contain', ITEM.LOGIN_ALERTMESSAGE);
  });

  it('Should show an error on login w/o email', () => {
    header.goToLoginPage();
    loginPage.setOnlyPasswordData(ITEM.PASSWORD);
    loginPage.alertMessage.should('contain', ITEM.LOGIN_ALERTMESSAGE);
  });

  it('Should show an error on login with incorrect email', () => {
    header.goToLoginPage();
    loginPage.setOnlyPasswordData(ITEM.EMAIL_FALSE);
    loginPage.alertMessage.should('contain', ITEM.LOGIN_ALERTMESSAGE);
  });

  it('Should show an error on login with incorrect password', () => {
    header.goToLoginPage();
    loginPage.setOnlyPasswordData(ITEM.PASSWORD_FALSE);
    loginPage.alertMessage.should('contain', ITEM.LOGIN_ALERTMESSAGE);
  });

  it('Should login with correct login & password', () => {
    header.goToLoginPage();
    loginPage.setLoginData(ITEM.EMAIL, ITEM.PASSWORD);
    cy.url().should('include', '/MyAccount/');
  });
});
