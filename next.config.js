const path = require("path");
const withPWA = require("next-pwa");
const isProd = process.env.NODE_ENV === "production";

module.exports = withPWA({
  swcMinify: true,
  experimental: {
    esmExternals: false,
    concurrentFeatures: false,
  },
  i18n: {
    locales: ["en-US", "pt-BR", "en"],
    defaultLocale: "en-US",
    localeDetection: false,
  },
  sassOptions: {
    includePaths: [path.join(__dirname, "styles")],
  },
  pwa: {
    dest: "public",
    disable: !isProd,
  },
  images: {
    domains: ["pbs.twimg.com", "bit.ly"],
  },
});
