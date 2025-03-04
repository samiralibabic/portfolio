import React from 'react';
import { useTranslation } from 'next-i18next';

import { SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';
import Link from 'next/link';

const Hero = (props) => {
  const { t } = useTranslation('common');
  
  return (
    <LeftSection>
      <SectionTitle main center>
        {t('hero.title')}
      </SectionTitle>
      <SectionText>
        {t('hero.intro')}
      </SectionText>
      <Button onClick={() => window.location = '#contact'}>{t('hero.contact')}</Button>
    </LeftSection>
  );
};

export default Hero;