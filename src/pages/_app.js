import Theme from '../styles/theme';
import { appWithTranslation } from 'next-i18next';
import { Analytics } from '@vercel/analytics/react';
import { Space_Grotesk } from 'next/font/google';
import Script from 'next/script';
import { useEffect, useState } from 'react';
import '../styles/masonry.css';

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  style: ['normal'],
  display: 'swap',
})

const UMAMI_WEBSITE_IDS = {
  'tierarzt-liste.com': '6e08ea50-4ca6-434a-9615-c52e47371a2f',
  'tierarzt-liste.de': 'd7457f3d-15d3-4d6d-b662-ae2dc867064d',
};

const UMAMI_SCRIPT_SRC = 'https://analytics.tierarzt-liste.de/script.js';

function App({ Component, pageProps }) {
  const [umamiWebsiteId, setUmamiWebsiteId] = useState(null);

  useEffect(() => {
    const hostname = window.location.hostname.replace(/^www\./, '');
    const websiteId = UMAMI_WEBSITE_IDS[hostname];

    if (websiteId) {
      setUmamiWebsiteId(websiteId);
    }
  }, []);

  return (
    <>
      <style jsx global>{`
        :root {
          --space-grotesk-font: ${spaceGrotesk.style.fontFamily};
        }
      `}</style>
      <Theme>
        {umamiWebsiteId && (
          <Script
            src={UMAMI_SCRIPT_SRC}
            data-website-id={umamiWebsiteId}
            strategy="afterInteractive"
          />
        )}
        <Component {...pageProps} />
        <Analytics />
      </Theme>
    </>
  );
}

export default appWithTranslation(App);
