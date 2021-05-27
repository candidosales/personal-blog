const path = require('path');
const withPWA = require('next-pwa');
const isProd = process.env.NODE_ENV === 'production';

module.exports = withPWA({
  i18n: {
    locales: ['en-US', 'pt-BR', 'es'],
    defaultLocale: 'en-US',
    localeDetection: false
  },
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')]
  },
  pwa: {
    dest: 'public',
    disable: !isProd
  },
  future: {
    webpack5: true
  },
  images: {
    domains: ['pbs.twimg.com', 'bit.ly']
  }
});
