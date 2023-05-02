const withPlugins = require("next-compose-plugins");

module.exports = withPlugins([], {
  images: {
    domains: ["assets.truemeds.in", "truemedsblog.in"],
  },
  experimental: {
    largePageDataBytes: 500 * 1000,
  },
  i18n: {
    locales: ["en"],
    defaultLocale: "en",
  },
});
