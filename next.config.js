const withPlugins = require("next-compose-plugins");

module.exports = withPlugins([], {
  images: {
    domains: [
      "assets.truemeds.in",
      "truemedsblog.in",
      "www.truemeds.in",
      "tm-storage-bucket-prod.s3.ap-south-1.amazonaws.com",
    ],
  },
  experimental: {
    largePageDataBytes: 500 * 1000,
  },
  i18n: {
    locales: ["en"],
    defaultLocale: "en",
  },
});
