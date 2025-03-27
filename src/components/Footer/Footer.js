import React from 'react';
import Link from 'next/link';
import { useTranslation } from 'next-i18next';

import SocialIconsGroup from '../SocialIcons/SocialIcons';
import { CompanyContainer, FooterWrapper, LinkColumn, LinkItem, LinkList, LinkTitle, Slogan, LegalLinks, LegalNavLink, SocialIconsContainer } from './FooterStyles';

const Footer = () => {
  const { t } = useTranslation('common');
  
  return (
    <FooterWrapper>

      <LinkList id='contact'>
        <LinkColumn>
          <LinkTitle>{t('footer.email', 'E-Mail')}</LinkTitle>
          <LinkItem>kontakt-at-samiralibabic.de</LinkItem>
        </LinkColumn>
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
