const { i18n } = require('./next-i18next.config');

module.exports = {
  i18n,
  output: 'standalone',
  // Remove the async rewrites() function if it's only used for the blog
  // If you have other rewrites, keep them and just remove the blog-related ones
}