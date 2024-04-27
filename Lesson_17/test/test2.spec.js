import { By, Builder, until } from "selenium-webdriver";
import { expect } from "chai";
describe("SECOND Chromedriver.chromium.org test, at Firefox browser", function () {
  let driver;

  before(async () => {
    driver = new Builder().forBrowser("firefox").build();
    await driver.manage().window().setSize({ width: 1920, height: 1080 });
  });

  after(async () => {
    await driver.quit();
  });

  it('Should confirm page is switched to "Search page"', async () => {
    await driver.get("https://chromedriver.chromium.org/home");
    //1. Перейти на страницу поиска;
    const searchButton = await driver.findElement(By.css('div [data-tooltip="Open search bar"]'));
    await searchButton.click();
    const searchField = await driver.findElement(By.css("div.Xb9hP > input"));
    expect(await searchField.isDisplayed()).to.be.true;
  });

  it('Should confirm first link of searching with ctiterion "driver" contains this criterion', async () => {
    //2. Ввести driver в поиск;
    const searchField = await driver.findElement(By.css("div.Xb9hP > input"));
    await searchField.sendKeys("driver");
    await driver.findElement(By.css("div.U26fgb.mUbCce.fKz7Od.i3PoXe")).click();
    //3. Проверить что первая ссылка содержит слово driver;
    const firstSearchElement = await driver.wait(
      until.elementLocated(By.css(".lZsZxe .gtazFe:first-child .yDWqEe")),
      5000
    );
    expect((await firstSearchElement.getText()).toLowerCase()).to.include("driver");
  });
});
