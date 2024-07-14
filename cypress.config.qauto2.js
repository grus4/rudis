const { defineConfig } = require('cypress');


module.exports = defineConfig({
    e2e: {
        watchForFileChanges: false,
        defaultCommandTimeout: 20000,
        viewportWidth: 1920,
        viewportHeight: 1080,
        screenshotsFolder: 'cypress/screenshots',
        videosFolder: 'cypress/videos',
        trashAssetsBeforeRuns: true,
        chromeWebSecurity: true,
        setupNodeEvents(on, config) {},
        reporter: 'mochawesome',
        reporterOptions: {
            charts: true,
            reportFilename: 'my-report',
            embeddedScreenshots: true,
            inlineAssets: true,
            saveAllAttempts: false,
            reportDir: 'reports/your-reports-folder',
            html: true,
        },

        baseUrl: 'https://guest:welcome2qauto@qauto2.forstudy.space',
        env: {
            email: 'test20@yopmail.com',
            password: 'Qwert_1234',
        },
    },
});
