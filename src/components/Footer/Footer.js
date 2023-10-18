import React from 'react';
import Link from 'next/link';
import { AiFillGithub, AiFillTwitterCircle, AiFillLinkedin } from 'react-icons/ai';
import { FaMastodon } from 'react-icons/fa';

import { SocialIcons } from '../Header/HeaderStyles';
import { CompanyContainer, FooterWrapper, LinkColumn, LinkItem, LinkList, LinkTitle, Slogan, LegalLinks, LegalNavLink, SocialIconsContainer } from './FooterStyles';

const Footer = () => {
  return (
    <FooterWrapper>

      <LinkList id='contact'>
        <LinkColumn>
          <LinkTitle>E-Mail</LinkTitle>
          <LinkItem href='mailto:samir.alibabic@gmail.com'>samir.alibabic@gmail.com</LinkItem>
        </LinkColumn>
      </LinkList>

      <SocialIconsContainer>
        <CompanyContainer>
          <Slogan>Inovating one project at a time</Slogan>
        </CompanyContainer>
        <SocialIcons href='https://github.com/samiralibabic' target='_blank'>
          <AiFillGithub size="3rem" />
        </SocialIcons>
        <SocialIcons href='https://www.linkedin.com/in/samiralibabic/' target='_blank'>
          <AiFillLinkedin size="3rem" />
        </SocialIcons>
        <SocialIcons href='https://twitter.com/samiralibabic' target='_blank'>
          <AiFillTwitterCircle size="3rem" />
        </SocialIcons>
        <SocialIcons rel="me" href='https://mastodon.social/@samiralibabic' target='_blank'>
          <FaMastodon size="3rem" />
        </SocialIcons>
      </SocialIconsContainer>

      <LegalLinks >
        <Link href='/legal-notice'>
          <LegalNavLink>Impressum / Legal Notice</LegalNavLink>
        </Link>
        <Link href='/privacy-policy'>
          <LegalNavLink>Datenschutzerklärung / Privacy Policy</LegalNavLink>
        </Link>
      </LegalLinks>

    </FooterWrapper>
  );
};

export default Footer;
