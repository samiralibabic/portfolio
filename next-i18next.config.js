module.exports = {
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'de'],
    localeDetection: true,
    domains: [
      {
        domain: 'www.samiralibabic.com',
        defaultLocale: 'en',
      },
      {
        domain: 'www.samiralibabic.de',
        defaultLocale: 'de',
        http: process.env.NODE_ENV === 'development',
      }
    ]
  },
  localePath: './public/locales',
}