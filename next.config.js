const path = require("path");
const isProd = process.env.NODE_ENV === "production";

const withPWA = require("next-pwa")({
  dest: "public",
  disable: !isProd,
});

module.exports = withPWA({
  experimental: {
    images: {
      allowFutureImage: true,
    },
  },
  i18n: {
    locales: ["en-US", "pt-BR", "en"],
    defaultLocale: "en-US",
    localeDetection: false,
  },
  sassOptions: {
    includePaths: [path.join(__dirname, "styles")],
  },
  images: {
    domains: ["pbs.twimg.com", "bit.ly"],
  },
});
