const mainPage = require('../../POM/mainPage');
const { TEXT, BUTTON, DATA, URL } = require('../../helpers/constants');
const loginPage = require('../../POM/loginPage');
const accountPage = require('../../POM/accountPage');
const navBar = require('../../POM/components/navBar');

describe.skip('Login form testing with valid cridentials', function () {
  beforeEach(async () => {
    await browser.maximizeWindow();
    await mainPage.navigate(URL.MAIN_PAGE_URL);
    await navBar.clickMainMenuBtn(BUTTON.SIGN_IN);
  });

  afterEach(async () => {
    await accountPage.clickSignoutBtn();
  });

  it('Should switch to Admin page after login with admin email and password', async () => {
    await loginPage.login(DATA.EMAIL_ADMIN, DATA.PASSWORD_VALID);
    await expect(await accountPage.accoutTitle).toBeExisting();
    await expect(await accountPage.accoutTitle).toHaveText(TEXT.ADMIN_TITLE);
  });

  it('Should switch to User page after login with user email and password', async () => {
    await loginPage.login(DATA.EMAIL_USER1, DATA.PASSWORD_VALID);
    await expect(await accountPage.accoutTitle).toBeExisting();
    await expect(await accountPage.accoutTitle).toHaveText(TEXT.USER_TITLE);
  });
});
