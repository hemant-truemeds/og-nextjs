const withPlugins = require("next-compose-plugins");

module.exports = withPlugins([], {
  images: {
    domains: ["assets.truemeds.in", "truemedsblog.in", "www.truemeds.in"],
  },
  experimental: {
    largePageDataBytes: 500 * 1000,
    concurrentFeatures: true,
  },
  i18n: {
    locales: ["en"],
    defaultLocale: "en",
  },
});
