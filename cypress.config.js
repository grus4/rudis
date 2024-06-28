const { defineConfig } = require('cypress');

module.exports = defineConfig({
    e2e: {
        setupNodeEvents(on, config) {
            // implement node event listeners here
        },
    },
    baseUrl: 'https://www.rudis.com',
    watchForFileChanges: false,
    defaultCommandTimeout: 20000,
    viewportWidth: 1920,
    viewportHeight: 1080,
    screenshotsFolder: 'cypress/screenshots',
    videosFolder: 'cypress/videos',
    trashAssetsBeforeRuns: true,
    chromeWebSecurity: true,
});
