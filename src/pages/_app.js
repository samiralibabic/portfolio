import Theme from '../styles/theme';
import { Analytics } from '@vercel/analytics/react';
import { Space_Grotesk } from 'next/font/google'

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  display: 'swap',
  weight: ['300', '400', '500', '600', '700'],
})

export default function App({ Component, pageProps }) {
  return (
    <>
      <Theme>
      <style jsx global>{`
        html {
          font-family: ${spaceGrotesk.style.fontFamily};
        }
      `}</style>
        <Component {...pageProps} />
        <Analytics />
      </Theme>
    </>
  );
}