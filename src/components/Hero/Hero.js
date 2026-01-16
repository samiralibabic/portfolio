import React from 'react';
import { useTranslation } from 'next-i18next';

import { SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection, ProofChipsContainer, ProofChip, SecondaryButtonsContainer, SecondaryButton } from './HeroStyles';

const Hero = (props) => {
  const { t } = useTranslation('common');
  
  return (
    <LeftSection>
      <SectionTitle main center>
        {t('hero.title')}
      </SectionTitle>
      <SectionText>
        {t('hero.intro')}
        <br />
        <span style={{ opacity: 0.8 }}>{t('hero.introSecondLine')}</span>
      </SectionText>
      <ProofChipsContainer>
        <ProofChip>{t('hero.proofChips.solo')}</ProofChip>
        <ProofChip>{t('hero.proofChips.valtech')}</ProofChip>
        <ProofChip>{t('hero.proofChips.germany')}</ProofChip>
      </ProofChipsContainer>
      <Button onClick={() => window.location = '#contact'}>{t('hero.contact')}</Button>
      <SecondaryButtonsContainer>
        <SecondaryButton href="#projects">{t('hero.exploreProducts')}</SecondaryButton>
        <SecondaryButton href="https://blog.samiralibabic.com" target="_blank" rel="noopener noreferrer">{t('hero.readBlog')}</SecondaryButton>
      </SecondaryButtonsContainer>
    </LeftSection>
  );
};

export default Hero;
