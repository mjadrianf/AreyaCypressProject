const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      
    },
  },
  "experimentalSessionAndOrigin": true,
  "chromeWebSecurity": true
});
