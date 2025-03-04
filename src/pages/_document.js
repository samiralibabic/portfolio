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
          <meta name="keywords" content="software engineer, indiehacker, entrepreneur, portfolio, web development" />
          <meta name="author" content="Samir Alibabic" />
          <link rel="icon" href="/favicon.ico" />
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