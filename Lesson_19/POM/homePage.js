const Base = require("../POM/base");

class HomePage extends Base {
  get pageTheme() {
    return $("//html");
  }
}

module.exports = new HomePage();
