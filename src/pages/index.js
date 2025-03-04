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
    "jobTitle": "Software Engineer",
    "url": "https://samiralibabic.com",
    "sameAs": [
      "https://github.com/samiralibabic",
      "https://linkedin.com/in/samiralibabic",
      "https://twitter.com/samiralibabic"
    ]
  };

  return (
    <>
      <Head>
        <title>{t('meta.title')}</title>
        <meta name="description" content={t('meta.description')} />
        <meta property="og:title" content={t('meta.title')} />
        <meta property="og:description" content={t('meta.description')} />
        <meta property="og:image" content="https://samiralibabic.com/og-image.jpg" />
        <meta property="og:url" content="https://samiralibabic.com" />
        <meta name="twitter:card" content="summary_large_image" />
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
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common', 'projects'])),
    },
  }
}

export default Home;
