const { i18n } = require('./next-i18next.config');

module.exports = {
  i18n,
  output: 'standalone',
  // Remove the async rewrites() function if it's only used for the blog
  // If you have other rewrites, keep them and just remove the blog-related ones
  
  // Add security headers
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'Content-Security-Policy',
            value: [
              "default-src 'self'",
              "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://testimonial.to https://*.testimonial.to https://www.googletagmanager.com https://www.google-analytics.com",
              "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
              "img-src 'self' data: https://*.testimonial.to https://www.google-analytics.com",
              "font-src 'self' https://fonts.gstatic.com",
              "connect-src 'self' https://*.testimonial.to https://www.google-analytics.com",
              "frame-src 'self' https://*.testimonial.to",
              "object-src 'none'"
            ].join('; ')
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff'
          },
          {
            key: 'X-Frame-Options',
            value: 'SAMEORIGIN'
          },
          {
            key: 'X-XSS-Protection',
            value: '1; mode=block'
          }
        ]
      }
    ];
  }
}