import { By, Builder, until } from "selenium-webdriver";
import { expect } from "chai";
describe("THIRD Chromedriver.chromium.org test, at MicrosoftEdge browser", function () {
  let driver;

  before(async () => {
    driver = await new Builder().forBrowser("MicrosoftEdge").build();
    await driver.manage().window().maximize();
  });

  after(async () => {
    await driver.quit();
  });

  it('Should click "More" menu button and confirm "Mobile Emulation" point is present in expanded submenu', async () => {
    await driver.get("https://chromedriver.chromium.org/home");
    //1. Открыть в меню "Дополнительно"
    await driver.wait(until.elementLocated(By.linkText("More")), 3000); // ожидание 3сек
    await driver.findElement(By.linkText("More")).click();
    //Проверить , что "Mobile Emulation" пункт меню виден в распахнутом дропдауне
    const menuButtonMobileEmulation = await driver.wait(until.elementLocated(By.linkText("Mobile Emulation")), 5000); // ожидание 5сек
    expect(await menuButtonMobileEmulation.isDisplayed()).to.be.true;
  });

  it('Should confirm "Mobile Emulation" button is clicked, browser switched to new page with URL contains "/mobile-emulation"', async () => {
    //2. Нажать "Mobile Emulation"
    await driver.findElement(By.linkText("Mobile Emulation")).click();
    //3. Проверить что url содержит /mobile-emulation
    const currentUrl = await driver.getCurrentUrl();
    expect(currentUrl).to.include("/mobile-emulation");
  });
});
