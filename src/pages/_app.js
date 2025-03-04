import Theme from '../styles/theme';
import { appWithTranslation } from 'next-i18next';
import { Analytics } from '@vercel/analytics/react';
import { Space_Grotesk } from 'next/font/google';
import { useEffect, useState } from 'react';
import '../utils/i18n';

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  style: ['normal'],
  display: 'swap',
})

function App({ Component, pageProps }) {
  // Use this to prevent hydration issues
  const [mounted, setMounted] = useState(false);
  
  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <>
      <style jsx global>{`
        :root {
          --space-grotesk-font: ${spaceGrotesk.style.fontFamily};
        }
      `}</style>
      <Theme key={`theme-provider-${mounted ? 'mounted' : 'unmounted'}`}>
        {mounted ? <Component {...pageProps} /> : <div style={{ visibility: 'hidden' }} />}
        <Analytics />
      </Theme>
    </>
  );
}

export default appWithTranslation(App);