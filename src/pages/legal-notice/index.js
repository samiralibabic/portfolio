import React from 'react'
import { Layout } from '../../layout/Layout'
import { LegalContentColumn, StaticPageWrapper, LegalSectionText, LegalNavLink } from '../../styles/styleLegal'
import { NavLink, SectionDivider, SectionSubText, Section, SectionTitle } from '../../styles/GlobalComponents'
import Link from 'next/link'
import Head from 'next/head';



const LegalNotice = () => {
  return (
    <>
      <Head>
        <title>Legal Notice - Samir Alibabic</title>
        <meta name="description" content="Legal Notice for Samir Alibabic's website" />
      </Head>
      <Layout>

        <Section>
          <Link href="/">
            <NavLink>Back to Home</NavLink>
          </Link>
          <SectionDivider />
        </Section>

        <StaticPageWrapper>
          <LegalContentColumn>

            <SectionTitle>Impressum</SectionTitle>

            <SectionSubText>Dieses Impressum gilt für alle Websites, die von Dipl.-Ing. Samir Alibabic betrieben werden, sowie für alle damit verbundenen Social-Media-Konten.</SectionSubText><br />
            <SectionSubText>Dieses Impressum entspricht den deutschen Gesetzen gemäß § 5 TMG und § 55 RStV.</SectionSubText>

            <LegalSectionText>Angaben gemäß § 5 TMG</LegalSectionText>
            <SectionSubText>
              Samir Alibabic<br />
              Klugstraße 99<br />
              80637 München
            </SectionSubText>

            <LegalSectionText>Kontakt</LegalSectionText>
            <SectionSubText>
              E-Mail: kontakt-at-samiralibabic.de
            </SectionSubText>

            <LegalSectionText>Redaktionell verantwortlich</LegalSectionText>
            <SectionSubText>
              E-Mail: kontakt-at-samiralibabic.de
            </SectionSubText><br />
            
              <SectionSubText>
                Quelle: <Link href="https://www.e-recht24.de" target='_blank'>
                  <LegalNavLink>e-recht24.de</LegalNavLink>
                </Link>
              </SectionSubText>

            <LegalSectionText>Haftung für Inhalte</LegalSectionText>

            <SectionSubText>Die Inhalte dieser Website wurden mit größtmöglicher Sorgfalt erstellt. Wir können jedoch nicht für die Richtigkeit, Vollständigkeit und Aktualität der Inhalte garantieren. Gemäß § 7 Absatz 1 TMG (Telemediengesetz) sind wir als Diensteanbieter für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte externe Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen. Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach den allgemeinen Gesetzen bleiben hiervon unberührt. Eine diesbezügliche Haftung ist jedoch erst ab dem Zeitpunkt der Kenntnis einer konkreten Rechtsverletzung möglich. Bei Bekanntwerden von entsprechenden Rechtsverletzungen werden wir diese Inhalte umgehend entfernen.</SectionSubText>

            <LegalSectionText>Haftung für Links</LegalSectionText>

            <SectionSubText>Unsere Website enthält Links zu externen Websites, auf deren Inhalte wir keinen Einfluss haben. Daher können wir für diese externen Inhalte keine Gewähr übernehmen. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich. Die verlinkten Seiten wurden zum Zeitpunkt der Verlinkung auf mögliche Rechtsverstöße überprüft. Rechtswidrige Inhalte waren zum Zeitpunkt der Verlinkung nicht erkennbar. Eine permanente inhaltliche Kontrolle der verlinkten Seiten ist jedoch ohne konkrete Anhaltspunkte einer Rechtsverletzung nicht zumutbar. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Links umgehend entfernen.</SectionSubText>

            <LegalSectionText>Urheberrecht</LegalSectionText>

            <SectionSubText>Die auf dieser Website erstellten Inhalte und Werke unterliegen dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechts bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers. Downloads und Kopien dieser Seiten sind nur für den privaten, nicht kommerziellen Gebrauch gestattet. Soweit die Inhalte auf dieser Seite nicht vom Betreiber erstellt wurden, werden die Urheberrechte Dritter beachtet. Insbesondere werden Inhalte Dritter als solche gekennzeichnet. Sollten Sie trotzdem auf eine Urheberrechtsverletzung aufmerksam werden, bitten wir um einen entsprechenden Hinweis. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Inhalte umgehend entfernen.</SectionSubText>

          </LegalContentColumn>

          <LegalContentColumn>
            <SectionTitle>Legal Notice</SectionTitle>

            <SectionSubText>This imprint is valid for all websites operated by dipl.ing. Samir Alibabic as well as for all associated social media accounts.</SectionSubText><br />
            <SectionSubText>This Legal Notice complies with the German laws under § 5 TMG and § 55 RStV.</SectionSubText>

            <LegalSectionText>Information in accordance with § 5 TMG</LegalSectionText>
            <SectionSubText>
              Samir Alibabic<br />
              Klugstrasse 99<br />
              80637 Munich <br />
              Bavaria, Germany
            </SectionSubText>

            <LegalSectionText>Contact</LegalSectionText>
            <SectionSubText>
              Email: kontakt-at-samiralibabic.de
            </SectionSubText>

            <LegalSectionText>Responsible for content</LegalSectionText>
            <SectionSubText>
              Email: kontakt-at-samiralibabic.de
            </SectionSubText>

            <LegalSectionText>Liability for Content</LegalSectionText>

            <SectionSubText>The contents of this website has been created with the greatest possible care. However, we cannot guarantee the contents' accuracy, completeness, or topicality. According to Section 7, paragraph 1 of the TMG (Telemediengesetz - German Telemedia Act), we as service providers are liable for our content on these pages by general laws. However, according to Sections 8 to 10 of the TMG, we service providers are not obliged to monitor external information transmitted or stored or investigate circumstances pointing to illegal activity. Obligations to remove or block the use of information under general laws remain unaffected. However, a liability in this regard is only possible from the moment of knowledge of a specific infringement. Upon notification of such violations, we will remove the content immediately.</SectionSubText>

            <LegalSectionText>Liability for Links</LegalSectionText>

            <SectionSubText>Our website contains links to external websites, over whose contents we have no control. Therefore, we cannot accept any liability for these external contents. The respective provider or operator of the websites is always responsible for the contents of the linked pages. The linked pages were checked for possible legal violations at the time of linking. Illegal contents were not identified at the time of linking. However, permanent monitoring of the contents of the linked pages is not reasonable without specific indications of a violation. Upon notification of violations, we will remove such links immediately.</SectionSubText>

            <LegalSectionText>Copyright</LegalSectionText>

            <SectionSubText>The contents and works on these pages created by the site operator are subject to German copyright law. The duplication, processing, distribution, and any kind of utilization outside the limits of copyright require the written consent of the respective author or creator. Downloads and copies of these pages are only permitted for private, non-commercial use. In so far as the contents on this site were not created by the operator, the copyrights of third parties are respected. In particular, third-party content is marked as such. Should you become aware of a copyright infringement, please inform us accordingly. Upon notification of violations, we will remove such contents immediately.</SectionSubText>

            <br />
            <SectionSubText>Last Updated: 26.07.2023.</SectionSubText>
            <br />
            
              <SectionSubText>
                Source: <Link href="https://www.e-recht24.de/impressum/13120-impressum-auf-englisch-fuer-ihre-website.html" target='_blank'>
                  <LegalNavLink>e-recht24.de</LegalNavLink>
                </Link>
              </SectionSubText><br />

          </LegalContentColumn>

        </StaticPageWrapper>

      </Layout>
    </>
  )
}

export default LegalNotice