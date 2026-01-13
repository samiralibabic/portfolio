import React from 'react';
import Link from 'next/link';
import { useTranslation } from 'next-i18next';

import SocialIconsGroup from '../SocialIcons/SocialIcons';
import { CompanyContainer, FooterWrapper, LinkColumn, LinkItem, LinkList, LinkTitle, Slogan, LegalLinks, LegalNavLink, SocialIconsContainer, ContactButton, ContactHints, ContactHintItem, ContactSection, NowSection, NowText } from './FooterStyles';

const Footer = () => {
  const { t } = useTranslation('common');
  
  return (
    <FooterWrapper>

      <LinkList id='contact'>
        <ContactSection>
          <LinkTitle>{t('footer.email', 'E-Mail')}</LinkTitle>
          <LinkItem>kontakt-at-samiralibabic.de</LinkItem>
          <ContactButton href="mailto:kontakt@samiralibabic.de">
            {t('contact.sendEmail')}
          </ContactButton>
          <ContactHints>
            <span style={{ fontWeight: 500, marginBottom: '8px', display: 'block' }}>{t('contact.pleaseInclude')}</span>
            <ContactHintItem>• {t('contact.whatAbout')}</ContactHintItem>
            <ContactHintItem>• {t('contact.linkProduct')}</ContactHintItem>
            <ContactHintItem>• {t('contact.nextStep')}</ContactHintItem>
          </ContactHints>
        </ContactSection>
        
        <NowSection>
          <LinkTitle>{t('now.title')}</LinkTitle>
          <NowText>{t('now.focus')}</NowText>
          <NowText>{t('now.openTo')}</NowText>
        </NowSection>
      </LinkList>

      <SocialIconsContainer>
        <CompanyContainer>
          <Slogan>{t('footer.slogan', 'Innovating one project at a time')}</Slogan>
        </CompanyContainer>
        <SocialIconsGroup />
      </SocialIconsContainer>

      <LegalLinks>
        <Link href='/legal-notice'>
          <LegalNavLink>{t('footer.legal')}</LegalNavLink>
        </Link>
        <Link href='/privacy-policy'>
          <LegalNavLink>{t('footer.privacy')}</LegalNavLink>
        </Link>
      </LegalLinks>

    </FooterWrapper>
  );
};

export default Footer;
