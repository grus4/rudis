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
            // implement node event listeners here
        },
        baseUrl: 'https://guest:welcome2qauto@qauto2.forstudy.space',
        env: {
          email: 'test20@yopmail.com',
          password: 'Qwert_1234',
        },

    },
} );
