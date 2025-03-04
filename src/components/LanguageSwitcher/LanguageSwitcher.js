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
`;

const LanguageContainer = styled.div`
  display: flex;
  align-items: center;
  margin-left: 1.5rem;
`;

const LanguageSwitcher = () => {
  const router = useRouter();
  const { t } = useTranslation('common');
  const { pathname, asPath, query } = router;

  const changeLanguage = (locale) => {
    // In production, switch domains based on language selection
    if (typeof window !== 'undefined' && process.env.NODE_ENV === 'production') {
      const hostname = window.location.hostname;
      const isMainDomain = hostname.includes('.com');
      const isGermanDomain = hostname.includes('.de');
      
      if (locale === 'de' && isMainDomain) {
        // Switch to German domain
        window.location.href = window.location.href.replace('.com', '.de');
        return;
      } else if (locale === 'en' && isGermanDomain) {
        // Switch to English domain
        window.location.href = window.location.href.replace('.de', '.com');
        return;
      }
    }
    
    // In development or if no domain switch needed, use Next.js i18n routing
    router.push({ pathname, query }, asPath, { locale });
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