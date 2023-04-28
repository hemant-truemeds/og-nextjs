const withPlugins = require("next-compose-plugins");

module.exports = withPlugins([], {
  i18n: {
    locales: ["en"],
    defaultLocale: "en",
  },
});
