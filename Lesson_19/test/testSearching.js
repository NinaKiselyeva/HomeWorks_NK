// 1. Настроить фреймворк WebdriverIO для запуска тестов.
// 2. Подготовить 3-5 тестовых сценария проходящих по официальному сайту фреймворка либо по приложению которое вы выбрали для финального задания;
// 3. Автоматизировать сценарии с использованием выбранного фреймворка используя:
// - Page Object Model;
// - API фреймворка;
// - структуру одного из фреймворков: Jasmine, Mocha;
// 4. Добавить eslint и репортер
const homePage = require("../POM/homePage");
const searchModal = require("../POM/components/searchModal");
const rightNavBar = require("../POM/components/rightNavbar");

describe("webdriver.io / Searching using hotkey, checking search results, open second search result", function () {
  before(async () => {});
  after(async () => {});

  it("Should open SearchInput on hit Ctrl+k from keyboard", async () => {
    await homePage.navigate("https://webdriver.io/");
    await rightNavBar.goToSearchModalFromKeyboard();
    await browser.pause(2000);
    expect(await searchModal.searchInput.isDisplayed()).toBe(true);
  });

  it("Should run search with 'hooks' search criterion, first three results should be Hooks, beforeHook, afterHook ", async () => {
    await searchModal.searchByCriterion("hooks");
    const firstResult = await searchModal.searchResult(0);
    expect(await firstResult.getText()).toEqual("Hooks");
    const secondtResult = await searchModal.searchResult(1);
    expect(await secondtResult.getText()).toEqual("beforeHook");
    const thirdResult = await searchModal.searchResult(2);
    expect(await thirdResult.getText()).toEqual("afterHook");
  });

  it("Shoul open corrrespondent page contains 'beforehook' in URL on clicking to 2nd search result", async () => {
    await searchModal.goToSearchResultByIndex(1);
    await browser.pause(2000);
    expect(await browser.getUrl()).toContain("beforehook");
  });
});
