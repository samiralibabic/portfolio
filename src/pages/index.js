import Acomplishments from '../components/Acomplishments/Acomplishments';
import BgAnimation from '../components/BackgrooundAnimation/BackgroundAnimation';
import Hero from '../components/Hero/Hero';
import Projects from '../components/Projects/Projects';
import Testimonials from '../components/Testimonials/Testimonials';
import Technologies from '../components/Technologies/Technologies';
import Timeline from '../components/TimeLine/TimeLine';
import { Layout } from '../layout/Layout';
import { Section } from '../styles/GlobalComponents';
import JsonLd from '../components/JsonLd';
import Head from 'next/head';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next';

const Home = () => {
  const { t } = useTranslation(['common', 'projects']);
  
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Samir Alibabic",
    "jobTitle": "Software Engineer & Digital Entrepreneur",
    "url": "https://www.samiralibabic.com",
    "sameAs": [
      "https://github.com/samiralibabic",
      "https://linkedin.com/in/samiralibabic",
      "https://twitter.com/samiralibabic"
    ]
  };

  return (
    <>
      <Head>
        <title>{t('meta.title', { defaultValue: 'Samir Alibabic - Software Engineer & Digital Entrepreneur' })}</title>
        <meta name="description" content={t('meta.description', { defaultValue: 'Portfolio of Samir Alibabic - Showcasing projects and skills in software engineering, indie hacking, and entrepreneurship.' })} />
        <meta property="og:title" content={t('meta.title', { defaultValue: 'Samir Alibabic - Software Engineer & Digital Entrepreneur' })} />
        <meta property="og:description" content={t('meta.description', { defaultValue: 'Portfolio of Samir Alibabic - Showcasing projects and skills in software engineering, indie hacking, and entrepreneurship.' })} />
        <meta property="og:image" content="https://www.samiralibabic.com/og-image.jpg" />
        <meta property="og:url" content="https://www.samiralibabic.com" />
        <meta name="twitter:card" content="summary_large_image" />
        <link rel="canonical" href="https://www.samiralibabic.com" />
      </Head>
      <Layout>
        <JsonLd data={jsonLd} />
        <Section grid>
          <Hero />
          <BgAnimation />
        </Section>
        <Projects />
        <Technologies />
        <Timeline />
        <Testimonials />
        {/* <Acomplishments /> */}
      </Layout>
    </>
  );
};

// This function gets called at build time on server-side
export async function getStaticProps({ locale }) {
  const translations = await serverSideTranslations(locale, ['common', 'projects']);
  console.log('Building page for locale:', locale);
  console.log('Translations loaded:', Object.keys(translations._nextI18Next.initialI18nStore[locale]));
  
  return {
    props: {
      ...translations,
    },
  }
}

export default Home;
