const { Given, When, Then } = require('@wdio/cucumber-framework');
const { expect } = require('@wdio/globals');

const LoginPage = require('../pageobjects/login.page');
const AccountPage = require('../pageobjects/account.page');
const MainPage = require('../pageobjects/main.page');
const Page = require('../pageobjects/page');
const pageWeb = new Page();

const pages = {
  main: '',
  login: '#/auth/login',
};

Given(/^I navigate to "(.*)" page$/, async function (page) {
  const path = pages[page];
  await browser.maximizeWindow();
  await pageWeb.open(path);
});

When(/^I click "(.*)" button$/, async function (buttonName) {
  await MainPage.mainMenuBtn('Sign In');
  await MainPage.mainMenuBtnClick(buttonName);
});

When(/^I login as "(.*)" with email "(.*)" and password "(.*)"$/, async function (account, email, password) {
  await LoginPage.login(email, password);
});

Then(/^I should see text "(.*)" as page title$/, async function (page_title) {
  await expect(AccountPage.accoutTitle).toBeExisting();
  await expect(AccountPage.accoutTitle).toHaveText(page_title);
});

When(/^I logout$/, async function () {
  await AccountPage.clickSignoutBtn();
});

Then(/^I should see button "(.*)" at navigation bar$/, async function (page_title) {
  await expect(await MainPage.mainMenuBtn('Sign In')).toBeExisting();
});

Then(/^I should see error "(.*)" under "(.*)"$/, async function (error_message, error_input) {
  await expect(await LoginPage.errInput(error_input)).toBeExisting();
  await expect(await LoginPage.errInput(error_input)).toHaveText(error_message);
});
