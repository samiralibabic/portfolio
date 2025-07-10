import React from 'react';
import { useRouter } from 'next/router';
import { useTranslation } from 'next-i18next';
import styled from 'styled-components';

const LanguageButton = styled.button`
  background: transparent;
  color: ${props => props.active ? "white" : "rgba(255, 255, 255, 0.5)"};
  cursor: pointer;
  border: none;
  font-size: 1rem;
  margin: 0 0.5rem;
  padding: 0.5rem;
  font-family: inherit;
  transition: all 0.3s ease;
  
  &:hover {
    color: white;
  }
  
  @media ${(props) => props.theme.breakpoints.lg} {
    font-size: 0.95rem;
    margin: 0 0.4rem;
    padding: 0.4rem;
  }
  
  @media ${(props) => props.theme.breakpoints.md} {
    font-size: 0.9rem;
    margin: 0 0.35rem;
    padding: 0.35rem;
  }
  
  @media ${(props) => props.theme.breakpoints.sm} {
    font-size: 0.85rem;
    margin: 0 0.25rem;
    padding: 0.25rem;
  }
`;

const LanguageContainer = styled.div`
  display: flex;
  align-items: center;
  margin-left: 1.5rem;
  
  @media ${(props) => props.theme.breakpoints.lg} {
    margin-left: 1.2rem;
  }
  
  @media ${(props) => props.theme.breakpoints.md} {
    margin-left: 0.8rem;
  }
  
  @media ${(props) => props.theme.breakpoints.sm} {
    margin-left: 0.4rem;
  }
`;

const LanguageSwitcher = () => {
  const router = useRouter();
  const { t } = useTranslation('common');
  const { pathname, asPath, query } = router;

  const changeLanguage = (locale) => {
    // Let Next.js handle domain routing via next-i18next.config.js
    router.push(pathname, asPath, { locale });
  };

  return (
    <LanguageContainer>
      <LanguageButton 
        active={router.locale === 'en'} 
        onClick={() => changeLanguage('en')}
      >
        EN
      </LanguageButton>
      <span style={{ color: 'rgba(255, 255, 255, 0.5)' }}>|</span>
      <LanguageButton 
        active={router.locale === 'de'} 
        onClick={() => changeLanguage('de')}
      >
        DE
      </LanguageButton>
    </LanguageContainer>
  );
};

export default LanguageSwitcher; 