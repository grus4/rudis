const { defineConfig } = require( 'cypress' );

module.exports = defineConfig( {
    e2e: {
        watchForFileChanges: false,
        defaultCommandTimeout: 20000,
        viewportWidth: 1920,
        viewportHeight: 1080,
        screenshotsFolder: 'cypress/screenshots',
        videosFolder: 'cypress/videos',
        trashAssetsBeforeRuns: true,
        chromeWebSecurity: true,
        setupNodeEvents ( on, config ) {
        },
        reporter: 'cypress-mochawesome-reporter',
        reporterOptions: {
            charts: true,
            reportPageTitle: 'custom-title',
            embeddedScreenshots: true,
            inlineAssets: true,
            saveAllAttempts: false,
            reportDir: 'cypress/reports/',
            html: true,
            json: true
        },

    },
} );


