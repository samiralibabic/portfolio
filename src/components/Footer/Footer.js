import React from 'react';
import Link from 'next/link';
import { useTranslation } from 'next-i18next';
import { AiFillGithub, AiFillTwitterCircle, AiFillLinkedin } from 'react-icons/ai';
import { FaMastodon } from 'react-icons/fa';

import { SocialIcons } from '../Header/HeaderStyles';
import { CompanyContainer, FooterWrapper, LinkColumn, LinkItem, LinkList, LinkTitle, Slogan, LegalLinks, LegalNavLink, SocialIconsContainer } from './FooterStyles';

const Footer = () => {
  const { t } = useTranslation('common');
  
  return (
    <FooterWrapper>

      <LinkList id='contact'>
        <LinkColumn>
          <LinkTitle>{t('footer.email', 'E-Mail')}</LinkTitle>
          <LinkItem href='kontakt-at-samiralibabic.de'>kontakt-at-samiralibabic.de</LinkItem>
        </LinkColumn>
      </LinkList>

      <SocialIconsContainer>
        <CompanyContainer>
          <Slogan>{t('footer.slogan', 'Innovating one project at a time')}</Slogan>
        </CompanyContainer>
        <SocialIcons href='https://github.com/samiralibabic' target='_blank'>
          <AiFillGithub size="30" />
        </SocialIcons>
        <SocialIcons href='https://www.linkedin.com/in/samiralibabic/' target='_blank'>
          <AiFillLinkedin size="30" />
        </SocialIcons>
        <SocialIcons href='https://twitter.com/samiralibabic' target='_blank'>
          <AiFillTwitterCircle size="30" />
        </SocialIcons>
        <SocialIcons rel="me" href='https://mastodon.social/@samiralibabic' target='_blank'>
          <FaMastodon size="30" />
        </SocialIcons>
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
