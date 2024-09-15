module.exports = {
    async rewrites() {
      return [
        {
          source: '/blog',
          destination: 'https://blog.samiralibabic.com',
        },
        {
          source: '/blog/:path*',
          destination: 'https://blog.samiralibabic.com/:path*',
        },
      ]
    },
  }