import Theme from '../styles/theme';
import { appWithTranslation } from 'next-i18next';
import { Analytics } from '@vercel/analytics/react';
import { Space_Grotesk } from 'next/font/google';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { getLocaleFromDomain } from '../utils/localeDetection';
import '../utils/i18n';
import '../styles/masonry.css';

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  style: ['normal'],
  display: 'swap',
})

function App({ Component, pageProps }) {
  // Use this to prevent hydration issues
  const [mounted, setMounted] = useState(false);
  const router = useRouter();
  
  useEffect(() => {
    setMounted(true);
    
    // Only run locale detection on client-side and in production
    if (typeof window !== 'undefined' && process.env.NODE_ENV === 'production') {
      const detectedLocale = getLocaleFromDomain();
      
      // If the current locale doesn't match the domain, change it
      if (router.locale !== detectedLocale) {
        router.push(router.asPath, router.asPath, { locale: detectedLocale, scroll: false });
      }
    }
  }, [router]);

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