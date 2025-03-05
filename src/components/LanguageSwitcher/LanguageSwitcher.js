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
    try {
      // Parse the domain mapping from environment variable
      const mapping = JSON.parse(process.env.NEXT_PUBLIC_LOCALE_DOMAIN_MAPPING || '{}');
      const currentHostname = window.location.hostname;
      
      // In production, switch domains based on locale
      if (process.env.NODE_ENV === 'production') {
        // Find the target domain for the selected locale
        let targetDomain = null;
        for (const domain in mapping) {
          if (mapping[domain] === locale) {
            targetDomain = domain;
            break;
          }
        }
        
        if (targetDomain) {
          // Construct the new URL
          const protocol = window.location.protocol;
          const pathname = locale === 'de' ? 
            // For German, remove the locale path segment if it exists
            window.location.pathname.replace(/^\/(en|de)/, '') || '/' : 
            // For English, keep the path as is (Next.js won't add /en to paths)
            window.location.pathname;
          const search = window.location.search;
          
          // Redirect to the new domain with appropriate path
          window.location.href = `${protocol}//${targetDomain}${pathname}${search}`;
          return;
        }
      }
      
      // Fallback to Next.js routing (for development or if domain mapping fails)
      router.push(router.asPath, router.asPath, { locale, scroll: false });
    } catch (error) {
      console.error('Error switching language:', error);
      // Fallback to Next.js routing
      router.push(router.asPath, router.asPath, { locale, scroll: false });
    }
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