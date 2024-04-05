import { By, Builder, until } from "selenium-webdriver";
import { expect } from "chai";
describe("FIRST Chromedriver.chromium.org test, at Chrome browser ", function () {
  let driver;

  before(async () => {
    driver = new Builder().forBrowser("chrome").build();
    await driver.manage().window().setSize({ width: 1960, height: 1280 });
  });

  after(async () => {
    await driver.quit();
  });

  it('Should confirm main title text is "ChromeDriver"', async () => {
    //1. зайти на сайт https://chromedriver.chromium.org/home;
    await driver.get("https://chromedriver.chromium.org/home");
    //2. проверить текст основного тайтла "ChromeDriver";
    const mainTitleElement = await driver.findElement(By.css(".lkHyyc h1 span"));
    expect(await mainTitleElement.getText()).to.equal("ChromeDriver");
  });

  it('Should confirm "Chrome Extensions" button is clicked and new main title text corresponds to "Chrome Extensions"', async () => {
    //3. кликнуть в хедере на пункт "Chrome Extensions";
    await driver.wait(until.elementLocated(By.linkText("Chrome Extensions")), 5000); // ожидание 5сек
    await driver.findElement(By.linkText("Chrome Extensions")).click();
    //5. проверить что новый тайтл стал "Chrome Extensions";
    const newTitle = await driver.findElement(By.css(".lkHyyc h1 span"));
    expect(await newTitle.getText()).to.equal("Chrome Extensions");
  });

  it('Should confirm "Chrome Extensions" title has bg-color PURPLE', async () => {
    //4. сделать хайлайт для нового основного хедера страницы;
    const mainTitleElementChromeExtension = await driver.findElement(By.css(".lkHyyc h1 span"));
    driver.executeScript('arguments[0].style.backgroundColor = "purple"', mainTitleElementChromeExtension);
    await driver.wait(until.elementIsVisible(mainTitleElementChromeExtension), 5000); // Ожидаем хайлайт 5сек
    const backgroundColor = await mainTitleElementChromeExtension.getCssValue("background-color"); // CSS-свойство background-color для элемента
    // Проверить, соответствует ли цвет хайлайта ожидаемому цвету (purple = rgba(128, 0, 128, 1))
    expect(backgroundColor).to.equal("rgba(128, 0, 128, 1)");
  });
});
