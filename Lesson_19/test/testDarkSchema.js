const homePage = require("../POM/homePage");
const rightNavBar = require("../POM/components/rightNavbar");

describe("webdriver.io / Check User can switch between dark and light modes", function () {
  before(async () => {});

  after(async () => {});

  it("Should open light mode by default, confirm tooltip on hovering contains 'currently light mode'", async () => {
    await homePage.navigate("https://webdriver.io/");
    await rightNavBar.goToModeButton();
    expect(rightNavBar.modeButton).toHaveAttribute("title", expect.stringContaining("currently light mode"));
    expect(homePage.pageTheme).toHaveAttribute("data-theme", expect.stringContaining("light"));
  });

  it("Should switch to dark mode on clicking to 'Sun' buton at right navigation bar, confirm tooltip on hovering contains 'currently dark mode'", async () => {
    await homePage.navigate("https://webdriver.io/");
    await rightNavBar.clickModeButton();
    await rightNavBar.goToModeButton();
    expect(rightNavBar.modeButton).toHaveAttribute("title", expect.stringContaining("currently dark mode"));
    expect(homePage.pageTheme).toHaveAttribute("data-theme", expect.stringContaining("dark"));
  });
});
