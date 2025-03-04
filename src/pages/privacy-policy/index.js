import React from 'react'
import { useTranslation } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { Layout } from '../../layout/Layout'
import { StaticPageWrapper, LegalSectionText, LegalSectionH3, LegalSectionH4, LegalSectionList, LegalSectionListItem, LegalNavLink } from '../../styles/styleLegal'
import { NavLink, SectionDivider, SectionSubText, Section, SectionTitle } from '../../styles/GlobalComponents'
import Link from 'next/link'
import Head from 'next/head';

const PrivacyPolicy = () => {
  const { t } = useTranslation('privacy');

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

          <LegalSectionText>{t('section1.title')}</LegalSectionText>

          <LegalSectionH3>{t('section1.generalInfo.title')}</LegalSectionH3>
          <SectionSubText>{t('section1.generalInfo.text')}</SectionSubText>

          <LegalSectionH3>{t('section1.dataCollection.title')}</LegalSectionH3>
          <LegalSectionH4>{t('section1.dataCollection.who.title')}</LegalSectionH4>
          <SectionSubText>{t('section1.dataCollection.who.text')}</SectionSubText>
          <LegalSectionH4>{t('section1.dataCollection.how.title')}</LegalSectionH4>
          <SectionSubText>{t('section1.dataCollection.how.text1')}</SectionSubText>
          <SectionSubText>{t('section1.dataCollection.how.text2')}</SectionSubText>
          <LegalSectionH4>{t('section1.dataCollection.what.title')}</LegalSectionH4>
          <SectionSubText>{t('section1.dataCollection.what.text')}</SectionSubText>
          <LegalSectionH4>{t('section1.dataCollection.rights.title')}</LegalSectionH4>
          <SectionSubText>{t('section1.dataCollection.rights.text1')}</SectionSubText>
          <SectionSubText>{t('section1.dataCollection.rights.text2')}</SectionSubText>

          <LegalSectionH3>{t('section1.analysis.title')}</LegalSectionH3>
          <SectionSubText>{t('section1.analysis.text')}</SectionSubText>

          <LegalSectionText>{t('hosting.title')}</LegalSectionText>

          <SectionSubText>{t('hosting.intro')}</SectionSubText>
          <LegalSectionH3>{t('hosting.external.title')}</LegalSectionH3>
          <SectionSubText>{t('hosting.external.text1')}</SectionSubText>
          <SectionSubText>{t('hosting.external.text2')}</SectionSubText>
          <SectionSubText>{t('hosting.external.text3')}</SectionSubText>
          <SectionSubText>{t('hosting.external.hostIntro')}</SectionSubText><br />
          <SectionSubText>
            {t('hosting.external.hostInfo.name')}<br />
            {t('hosting.external.hostInfo.address1')}<br />
            {t('hosting.external.hostInfo.address2')}<br />
            {t('hosting.external.hostInfo.email')}
          </SectionSubText><br />
          <LegalSectionH4>{t('hosting.external.dpa.title')}</LegalSectionH4>
          <SectionSubText>{t('hosting.external.dpa.text')}</SectionSubText>

          <LegalSectionText>{t('generalInfo.title')}</LegalSectionText>
          <LegalSectionH3>{t('generalInfo.dataProtection.title')}</LegalSectionH3>
          <SectionSubText>{t('generalInfo.dataProtection.text1')}</SectionSubText>
          <SectionSubText>{t('generalInfo.dataProtection.text2')}</SectionSubText>
          <SectionSubText>{t('generalInfo.dataProtection.text3')}</SectionSubText>
          
          <LegalSectionH3>{t('generalInfo.controller.title')}</LegalSectionH3>
          <SectionSubText>{t('generalInfo.controller.intro')}</SectionSubText>
          <SectionSubText>
            {t('generalInfo.controller.name')}<br />
            {t('generalInfo.controller.address1')}<br />
            {t('generalInfo.controller.address2')}
          </SectionSubText>
          <SectionSubText>
            {t('generalInfo.controller.email')}
          </SectionSubText><br />
          <SectionSubText>{t('generalInfo.controller.explanation')}</SectionSubText>

          <LegalSectionH3>{t('generalInfo.storageDuration.title')}</LegalSectionH3>
          <SectionSubText>{t('generalInfo.storageDuration.text')}</SectionSubText>
          
          <LegalSectionH3>{t('generalInfo.legalBases.title')}</LegalSectionH3>
          <SectionSubText>{t('generalInfo.legalBases.text')}</SectionSubText>
          
          <LegalSectionH3>{t('generalInfo.revocation.title')}</LegalSectionH3>
          <SectionSubText>{t('generalInfo.revocation.text')}</SectionSubText>
          
          <LegalSectionH3>{t('generalInfo.objection.title')}</LegalSectionH3>
          <SectionSubText>{t('generalInfo.objection.text1')}</SectionSubText>
          <SectionSubText>{t('generalInfo.objection.text2')}</SectionSubText>
          
          <LegalSectionH3>{t('generalInfo.complaint.title')}</LegalSectionH3>
          <SectionSubText>{t('generalInfo.complaint.text')}</SectionSubText>
          
          <LegalSectionH3>{t('generalInfo.dataPortability.title')}</LegalSectionH3>
          <SectionSubText>{t('generalInfo.dataPortability.text')}</SectionSubText>
          
          <LegalSectionH3>{t('generalInfo.info.title')}</LegalSectionH3>
          <SectionSubText>{t('generalInfo.info.text')}</SectionSubText>
          
          <LegalSectionH3>{t('generalInfo.restriction.title')}</LegalSectionH3>
          <SectionSubText>{t('generalInfo.restriction.text')}</SectionSubText>
          <LegalSectionList>
            {t('generalInfo.restriction.cases', { returnObjects: true }).map((item, index) => (
              <LegalSectionListItem key={index}>{item}</LegalSectionListItem>
            ))}
          </LegalSectionList>
          <SectionSubText>{t('generalInfo.restriction.afterRestriction')}</SectionSubText>
          
          <LegalSectionH3>{t('generalInfo.sslTls.title')}</LegalSectionH3>
          <SectionSubText>{t('generalInfo.sslTls.text1')}</SectionSubText>
          <SectionSubText>{t('generalInfo.sslTls.text2')}</SectionSubText>
          
          <LegalSectionText>{t('dataCollection.title')}</LegalSectionText>
          <LegalSectionH3>{t('dataCollection.serverLogs.title')}</LegalSectionH3>
          <SectionSubText>{t('dataCollection.serverLogs.intro')}</SectionSubText>
          <LegalSectionList>
            {t('dataCollection.serverLogs.items', { returnObjects: true }).map((item, index) => (
              <LegalSectionListItem key={index}>{item}</LegalSectionListItem>
            ))}
          </LegalSectionList>
          <SectionSubText>{t('dataCollection.serverLogs.merge')}</SectionSubText>
          <SectionSubText>{t('dataCollection.serverLogs.basis')}</SectionSubText>
          
          <LegalSectionH3>{t('dataCollection.inquiry.title')}</LegalSectionH3>
          <SectionSubText>{t('dataCollection.inquiry.text1')}</SectionSubText>
          <SectionSubText>{t('dataCollection.inquiry.text2')}</SectionSubText>
          <SectionSubText>{t('dataCollection.inquiry.text3')}</SectionSubText>
          
          <LegalSectionText>{t('newsletter.title')}</LegalSectionText>
          <SectionSubText>{t('newsletter.text1')}</SectionSubText>
          <SectionSubText>{t('newsletter.text2')}</SectionSubText>
          <SectionSubText>{t('newsletter.text3')}</SectionSubText>
          <SectionSubText>{t('newsletter.text4')}</SectionSubText>
          <SectionSubText>{t('newsletter.text5')}</SectionSubText>
          
          <LegalSectionText>{t('plugins.title')}</LegalSectionText>
          <LegalSectionH3>{t('plugins.fontAwesome.title')}</LegalSectionH3>
          <SectionSubText>{t('plugins.fontAwesome.text1')}</SectionSubText>
          <SectionSubText>
            {t('plugins.fontAwesome.text2')} <Link href="https://fontawesome.com/privacy" target="_blank" rel="noopener noreferrer">
              <LegalNavLink>https://fontawesome.com/privacy</LegalNavLink>
            </Link>.
          </SectionSubText><br />
          
          <SectionSubText>
            {t('source')}
          </SectionSubText>
        </StaticPageWrapper>
      </Layout>
    </>
  )
}

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common', 'privacy'])),
    },
  }
}

export default PrivacyPolicy