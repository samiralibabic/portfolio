import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { FaLaptopCode } from 'react-icons/fa';
import { useTranslation } from 'next-i18next';

import { Container, Span, Div1, Div2, Div3 } from './HeaderStyles';
import { NavLink } from '../../styles/GlobalComponents/index'
import LanguageSwitcher from '../LanguageSwitcher/LanguageSwitcher';
import SocialIconsGroup from '../SocialIcons/SocialIcons';

const Header = () => {
  const { t } = useTranslation('common');
  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 640);
      setIsTablet(window.innerWidth > 640 && window.innerWidth <= 1024);
    };
    
    // Set initial value
    handleResize();
    
    // Add event listener
    window.addEventListener('resize', handleResize);
    
    // Clean up
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <Container>
      <Div1>
        <Link href="/" style={{ 
          display: "flex", 
          alignItems: "center", 
          color: "white",
          justifyContent: isMobile ? "center" : "flex-start" 
        }}>
          <FaLaptopCode size={isMobile ? "24" : "30"} style={{ marginRight: "10px" }}/>
          <Span>dip.ing. Samir Alibabic</Span>
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
        <SocialIconsGroup />
      </Div3>
    </Container>
  );
};

export default Header;
