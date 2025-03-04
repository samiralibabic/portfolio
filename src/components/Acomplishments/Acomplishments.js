import React from 'react';
import { useTranslation } from 'next-i18next';

import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { Box, Boxes, BoxNum, BoxText } from './AcomplishmentsStyles';

const Acomplishments = () => {
  const { t } = useTranslation('common');
  
  const data = [
    { number: 20, text: t('acomplishments.projects') },
    { number: 1000, text: t('acomplishments.students') },
    { number: 1900, text: t('acomplishments.followers') },
    { number: 5000, text: t('acomplishments.stars') }
  ];

  return (
    <Section>
      <SectionTitle main>{t('acomplishments.title')}</SectionTitle>
      <Boxes>
        {data.map((card, index) => (
          <Box key={index}>
            <BoxNum>{card.number}</BoxNum>
            <BoxText>{card.text}</BoxText>
          </Box>
        ))}
      </Boxes>
    </Section>
  );
};

export default Acomplishments;
