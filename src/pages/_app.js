import Theme from '../styles/theme';
import { Analytics } from '@vercel/analytics/react';

export default function App({ Component, pageProps }) {
  return (
    <>
      <Theme>
        <Component {...pageProps} />
        <Analytics />
      </Theme>
    </>
  );
}