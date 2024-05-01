const { defineConfig } = require('cypress');

module.exports = defineConfig({
  viewportWidth: 1920,
  viewportHeight: 1280,
  chromeWebSecurity: false,
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    specPattern: 'cypress/**/*.spec.js',
    browsers: [
      {
        name: 'chrome',
        family: 'chromium',
        channel: 'stable',
        displayName: 'Chrome',
        version: '123.0.0.0',
        path: 'C:Program FilesGoogleChromeApplicationchrome.exe',
        minSupportedVersion: 64,
        majorVersion: '123',
        launchOptions: {
          args: ['--wm-window-animations-disabled', '--animation-duration-scale=0'],
        },
      },
    ],
  },
});
