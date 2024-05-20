const mainPage = require('../../POM/mainPage');
const { DATA, URL, ERROR } = require('../../helpers/constants');
const loginPage = require('../../POM/loginPage');

describe('Login form testing with invalid cridentials', function () {
  beforeEach(async () => {
    await browser.maximizeWindow();
    await mainPage.navigate(URL.LOGIN_PAGE_URL);
  });

  afterEach(async () => {
    await browser.refresh();
  });

  it('Should receive 2 error messages required password & email when no email & No password are used for login', async () => {
    await loginPage.login(DATA.EMAIL_EMPTY, DATA.PASSWORD_EMPTY);
    await expect(await loginPage.errInput(ERROR.EMAIL_INP)).toBeExisting();
    await expect(await loginPage.errInput(ERROR.PASSWORD_INP)).toBeExisting();
    await expect(await loginPage.errInput(ERROR.EMAIL_INP)).toHaveText(ERROR.ERR_MSG4);
    await expect(await loginPage.errInput(ERROR.PASSWORD_INP)).toHaveText(ERROR.ERR_MSG1);
  });

  it('Should receive an error message regarding required password when valid email & empty password are used for login', async () => {
    await loginPage.login(DATA.EMAIL_USER1, DATA.PASSWORD_EMPTY);
    await expect(await loginPage.errInput(ERROR.PASSWORD_INP)).toBeExisting();
    await expect(await loginPage.errInput(ERROR.PASSWORD_INP)).toHaveText(ERROR.ERR_MSG1);
  });

  it('Should receive an error message when valid email & invalid password are used for login', async () => {
    await loginPage.login(DATA.EMAIL_ADMIN, DATA.PASSWORD_FAIL);
    await expect(await loginPage.errInput(ERROR.LOGIN_INP)).toBeExisting();
    await expect(await loginPage.errInput(ERROR.LOGIN_INP)).toHaveText(ERROR.ERR_MSG2);
  });

  it('Should receive an error message about password length when valid email & too short password (<3symb) are used for login', async () => {
    await loginPage.login(DATA.EMAIL_USER1, DATA.PASSWORD_SMALL);
    await expect(await loginPage.errInput(ERROR.PASSWORD_INP)).toBeExisting();
    await expect(await loginPage.errInput(ERROR.PASSWORD_INP)).toHaveText(ERROR.ERR_MSG3);
  });

  it('Should receive an error message required email when valid password +  No email are used for login', async () => {
    await loginPage.login(DATA.EMAIL_EMPTY, DATA.PASSWORD_VALID);
    await expect(await loginPage.errInput(ERROR.EMAIL_INP)).toBeExisting();
    await expect(await loginPage.errInput(ERROR.EMAIL_INP)).toHaveText(ERROR.ERR_MSG4);
  });

  it('Should receive an error message when invalid credentials are used for login 3rd time', async () => {
    await loginPage.login(DATA.EMAIL_USER1, DATA.PASSWORD_FAIL);
    await expect(await loginPage.errInput(ERROR.LOGIN_INP)).toHaveText(ERROR.ERR_MSG5);
  });

  it('Should receive an error message when invalid email + invalid password are used for login', async () => {
    await loginPage.login(DATA.EMAIL_FAIL, DATA.PASSWORD_FAIL);
    await expect(await loginPage.errInput(ERROR.LOGIN_INP)).toBeExisting();
    await expect(await loginPage.errInput(ERROR.LOGIN_INP)).toHaveText(ERROR.ERR_MSG5);
  });
});
