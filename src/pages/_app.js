import Theme from '../styles/theme';
import { appWithTranslation } from 'next-i18next';
import { Analytics } from '@vercel/analytics/react';
import { Space_Grotesk } from 'next/font/google';
import '../styles/masonry.css';

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  style: ['normal'],
  display: 'swap',
})

function App({ Component, pageProps }) {
  return (
    <>
      <style jsx global>{`
        :root {
          --space-grotesk-font: ${spaceGrotesk.style.fontFamily};
        }
      `}</style>
      <Theme>
        <Component {...pageProps} />
        <Analytics />
      </Theme>
    </>
  );
}

export default appWithTranslation(App);