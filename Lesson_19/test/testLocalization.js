const homePage = require("../POM/homePage");
const languageMenu = require("../POM/components/languageMenu");
const pageTitle = require("../POM/components/pageTitle");

describe("webdriver.io / Check that default localization is English, can be changed to Украіньска", function () {
  before(async () => {});
  after(async () => {});

  it("Should display 'English' as default website language", async () => {
    await homePage.navigate("https://webdriver.io/");
    expect(await languageMenu.languageButton.getText()).toEqual("English");
  });

  it("Should expand languages menu on hovering 'English'", async () => {
    await homePage.navigate("https://webdriver.io/");
    await languageMenu.goToLanguageButton();
    expect(await languageMenu.languageNavMenu.isDisplayed()).toBe(true);
  });

  it("Should switch to 'Українська' language and show content in ukranian", async () => {
    await homePage.navigate("https://webdriver.io/");
    await languageMenu.goToSuggestLangByNumber(5);
    expect((await pageTitle.subTitle.getText()).includes("Тестовий фреймворк наступного покоління")).toBe(true);
  });
});
