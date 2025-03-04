import Link from 'next/link';
import React from 'react';
import { AiFillGithub, AiFillTwitterCircle, AiFillLinkedin } from 'react-icons/ai';
import { FaLaptopCode } from 'react-icons/fa';
import { useTranslation } from 'next-i18next';

import { Container, Span, Div1, Div2, Div3, SocialIcons } from './HeaderStyles';
import { NavLink } from '../../styles/GlobalComponents/index'
import LanguageSwitcher from '../LanguageSwitcher/LanguageSwitcher';

const Header = () => {
  const { t } = useTranslation('common');

  return (
    <Container>
      <Div1>
        <Link href="/" style={{ display: "flex", alignItems: "center", color: "white" }}>
          <FaLaptopCode size="50" style={{ marginRight: "10px" }}/> <Span>dip.ing. Samir Alibabic</Span>
        </Link>
      </Div1>
      <Div2>
          <Link href="#projects" scroll={false}>
            <NavLink>{t('navigation.projects')}</NavLink>
          </Link>
          <Link href="#tech" scroll={false}>
            <NavLink>{t('navigation.technologies')}</NavLink>
          </Link>
          <Link href="#contact" scroll={false}>
            <NavLink>{t('navigation.contact')}</NavLink>
          </Link>
          <Link href="https://blog.samiralibabic.com" target="_blank" rel="noopener noreferrer">
            <NavLink>Blog</NavLink>
          </Link>
          <LanguageSwitcher />
      </Div2>
      <Div3>
        <SocialIcons href='https://github.com/samiralibabic' target='_blank'>
          <AiFillGithub size="30" />
        </SocialIcons>
        <SocialIcons href='https://www.linkedin.com/in/samiralibabic/' target='_blank'>
          <AiFillLinkedin size="30" />
        </SocialIcons>
        <SocialIcons href='https://twitter.com/samiralibabic' target='_blank'>
          <AiFillTwitterCircle size="30" />
        </SocialIcons>
      </Div3>
    </Container>
  );
};

export default Header;
