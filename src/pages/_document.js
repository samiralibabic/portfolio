import Document, { Html, Head, Main, NextScript } from 'next/document'
import { ServerStyleSheet } from 'styled-components'

export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const sheet = new ServerStyleSheet()
    const originalRenderPage = ctx.renderPage

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) =>
            sheet.collectStyles(<App {...props} />),
        })

      const initialProps = await Document.getInitialProps(ctx)
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
      }
    } finally {
      sheet.seal()
    }
  }
  render() {
    return (
      <Html lang='en-GB'>
        <Head>
          <meta charSet="utf-8" />
          <meta name="keywords" content="software engineer, digital entrepreneur, portfolio, web development" />
          <meta name="author" content="Samir Alibabic" />
          <link rel="icon" href="/favicon.ico" />
          {/* Content Security Policy */}
          <meta
            httpEquiv="Content-Security-Policy"
            content={`
              default-src 'self';
              script-src 'self' 'unsafe-inline' 'unsafe-eval' https://testimonial.to https://*.testimonial.to https://www.googletagmanager.com https://www.google-analytics.com https://vitals.vercel-insights.com;
              style-src 'self' 'unsafe-inline' https://fonts.googleapis.com https://*.testimonial.to;
              img-src 'self' data: https://*.testimonial.to https://www.google-analytics.com;
              font-src 'self' https://fonts.gstatic.com;
              connect-src 'self' https://*.testimonial.to https://www.google-analytics.com https://vitals.vercel-insights.com;
              frame-src https://embed-v2.testimonial.to https://testimonial.to https://*.testimonial.to;
              object-src 'none';
            `.replace(/\s+/g, ' ').trim()}
          />
          {/* Preconnect to Google Fonts to avoid 400 errors */}
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
          {/* Override system-ui font to prevent 400 errors */}
          <style>
            {`
              @font-face {
                font-family: 'system-ui';
                font-style: normal;
                font-weight: 400;
                src: local(".SFNS-Regular"), local("BlinkMacSystemFont"), local("Segoe UI"), local("Roboto"), local("Oxygen"), local("Ubuntu"), local("Cantarell"), local("Fira Sans"), local("Droid Sans"), local("Helvetica Neue");
              }
            `}
          </style>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}