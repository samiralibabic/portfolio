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

const Home = () => {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Samir Alibabic",
    "jobTitle": "Software Engineer",
    "url": "https://samiralibabic.com", // Replace with your actual website URL
    "sameAs": [
      "https://github.com/samiralibabic",
      "https://linkedin.com/in/samiralibabic",
      "https://twitter.com/samiralibabic"
    ]
  };

  return (
    <>
      <Head>
        <title>Samir Alibabic - Software Engineer, Indiehacker, Entrepreneur</title>
        <meta name="description" content="Portfolio of Samir Alibabic - Showcasing projects and skills in software engineering, indie hacking, and entrepreneurship." />
        <meta property="og:title" content="Samir Alibabic - Software Engineer Portfolio" />
        <meta property="og:description" content="Explore the projects and skills of Samir Alibabic, a software engineer, indiehacker, and entrepreneur." />
        <meta property="og:image" content="https://samiralibabic.com/og-image.jpg" /> // Replace with your actual OG image URL
        <meta property="og:url" content="https://samiralibabic.com" /> // Replace with your actual website URL
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

export default Home;
