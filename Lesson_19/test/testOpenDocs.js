const homePage = require("../POM/homePage");
const leftSideBar = require("../POM/components/leftSidebar");
const pageUrl = require("../POM/components/pageUrl");
const pageTitle = require("../POM/components/pageTitle");

describe("webdriver.io / Check User can open NavMenu at at 50% browser's width and select Docs option", function () {
  before(async () => {});

  after(async () => {});

  it("Should Open Navigation sidebar panel on click to Navigation Button when browser is displayed with", async () => {
    await homePage.navigate("https://webdriver.io/");
    await leftSideBar.switchToSmallWindowSize(960, 1080); // Browser window size, needed to show NavButton at page
    await browser.pause(2000);
    await leftSideBar.clickNavButton();
    //await browser.pause(2000);
    expect(await leftSideBar.leftSideBarItems.isDisplayed()).toBe(true);
  });

  it("Should switch to 'Getting Started' page on selecting 'Docs' menu point in NavPanel ", async () => {
    await homePage.navigate("https://webdriver.io/");
    await leftSideBar.switchToSmallWindowSize(960, 1080);
    await leftSideBar.goToSuggestItemByName("Docs");
    console.log(await pageUrl.getPageUrl());
    console.log(await pageTitle.getPageTitle());
    expect(await pageUrl.getPageUrl()).toContain("gettingstarted");
    expect(await pageTitle.getPageTitle()).toEqual("Getting Started | WebdriverIO");
  });
});
