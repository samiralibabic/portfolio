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
              "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://testimonial.to https://*.testimonial.to https://www.googletagmanager.com https://www.google-analytics.com https://vitals.vercel-insights.com https://analytics.tierarzt-liste.de",
              "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com https://*.testimonial.to",
              "img-src 'self' data: https://*.testimonial.to https://www.google-analytics.com",
              "font-src 'self' https://fonts.gstatic.com",
              "connect-src 'self' https://*.testimonial.to https://www.google-analytics.com https://vitals.vercel-insights.com https://analytics.tierarzt-liste.de",
              "frame-src https://embed-v2.testimonial.to https://testimonial.to https://*.testimonial.to",
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
  },
  // Add image optimization configuration
  images: {
    domains: ['samiralibabic.com', 'samiralibabic.de'],
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 60,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**.testimonial.to',
      },
    ],
  }
}
