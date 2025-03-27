import React from 'react'
import { useTranslation } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { Layout } from '../../layout/Layout'
import { StaticPageWrapper, LegalSectionText, LegalNavLink } from '../../styles/styleLegal'
import { NavLink, SectionDivider, SectionSubText, Section, SectionTitle } from '../../styles/GlobalComponents'
import Link from 'next/link'
import Head from 'next/head';

const LegalNotice = () => {
  const { t } = useTranslation('legal');

  return (
    <>
      <Head>
        <title>{t('meta.title')}</title>
        <meta name="description" content={t('meta.description')} />
      </Head>
      <Layout>

        <Section>
          <Link href="/">
            <NavLink>{t('backToHome')}</NavLink>
          </Link>
          <SectionDivider />
        </Section>

        <StaticPageWrapper style={{ flexDirection: 'column' }}>
          <SectionTitle>{t('title')}</SectionTitle>

          <SectionSubText>{t('intro')}</SectionSubText><br />
          <SectionSubText>{t('compliance')}</SectionSubText>

          <LegalSectionText>{t('information')}</LegalSectionText>
          <SectionSubText>
            {t('name')}<br />
            {t('address')}<br />
            {t('city')}
          </SectionSubText>

          <LegalSectionText>{t('contact')}</LegalSectionText>
          <SectionSubText>
            {t('email')}
          </SectionSubText>

          <LegalSectionText>{t('responsible')}</LegalSectionText>
          <SectionSubText>
            {t('email')}
          </SectionSubText><br />
          
          <LegalSectionText>{t('liability')}</LegalSectionText>
          <SectionSubText>{t('liabilityText')}</SectionSubText>

          <LegalSectionText>{t('liabilityLinks')}</LegalSectionText>
          <SectionSubText>{t('liabilityLinksText')}</SectionSubText>

          <LegalSectionText>{t('copyright')}</LegalSectionText>
          <SectionSubText>{t('copyrightText')}</SectionSubText>

          <br />
          <SectionSubText>{t('lastUpdated')}</SectionSubText>
          <br />
          
          <SectionSubText>
            {t('source')} <Link href="https://www.e-recht24.de" target='_blank'>
              <LegalNavLink>{t('sourceLink')}</LegalNavLink>
            </Link>
          </SectionSubText>

          <SectionDivider />
          
          {/* Footer Navigation */}
          <div style={{ marginTop: '2rem' }}>
            <LegalSectionText>{t('common:navigation.related')}</LegalSectionText>
            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', marginBottom: '1rem' }}>
              <Link href="/privacy-policy">
                <LegalNavLink>{t('common:navigation.privacy')}</LegalNavLink>
              </Link>
              <Link href="/#contact">
                <LegalNavLink>{t('common:navigation.contact')}</LegalNavLink>
              </Link>
              <Link href="/#projects">
                <LegalNavLink>{t('common:navigation.projects')}</LegalNavLink>
              </Link>
            </div>
            
            <LegalSectionText>{t('common:navigation.social')}</LegalSectionText>
            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              <Link href="https://github.com/samiralibabic" target="_blank" rel="noopener noreferrer">
                <LegalNavLink>GitHub</LegalNavLink>
              </Link>
              <Link href="https://linkedin.com/in/samiralibabic" target="_blank" rel="noopener noreferrer">
                <LegalNavLink>LinkedIn</LegalNavLink>
              </Link>
              <Link href="https://twitter.com/samiralibabic" target="_blank" rel="noopener noreferrer">
                <LegalNavLink>Twitter</LegalNavLink>
              </Link>
            </div>
          </div>
        </StaticPageWrapper>

      </Layout>
    </>
  )
}

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common', 'legal'])),
    },
  }
}

export default LegalNotice