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
  
  @media ${(props) => props.theme.breakpoints.sm} {
    font-size: 0.9rem;
    margin: 0 0.3rem;
    padding: 0.3rem;
  }
`;

const LanguageContainer = styled.div`
  display: flex;
  align-items: center;
  margin-left: 1.5rem;
  
  @media ${(props) => props.theme.breakpoints.sm} {
    margin-left: 0.5rem;
  }
`;

const LanguageSwitcher = () => {
  const router = useRouter();
  const { t } = useTranslation('common');
  const { pathname, asPath, query } = router;

  const changeLanguage = (locale) => {
    // In production, switch domains based on language selection
    if (typeof window !== 'undefined' && process.env.NODE_ENV === 'production') {
      try {
        const mapping = JSON.parse(process.env.NEXT_PUBLIC_LOCALE_DOMAIN_MAPPING || '{}');
        const currentHostname = window.location.hostname;
        
        // Find the target domain for the selected locale
        let targetDomain = null;
        for (const domain in mapping) {
          if (mapping[domain] === locale) {
            targetDomain = domain;
            break;
          }
        }
        
        // If we found a target domain and it's different from the current one
        if (targetDomain && !currentHostname.includes(targetDomain)) {
          // Get the current URL and replace the domain
          let newUrl = window.location.href;
          
          // Replace the domain part
          for (const domain in mapping) {
            if (currentHostname.includes(domain)) {
              newUrl = newUrl.replace(domain, targetDomain);
              window.location.href = newUrl;
              return;
            }
          }
          
          // Fallback if direct replacement didn't work
          const protocol = window.location.protocol;
          const path = window.location.pathname;
          const search = window.location.search;
          window.location.href = `${protocol}//${targetDomain}${path}${search}`;
          return;
        }
      } catch (e) {
        console.error('Error processing domain switch:', e);
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