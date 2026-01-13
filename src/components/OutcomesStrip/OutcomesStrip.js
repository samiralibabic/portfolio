import React from 'react';
import { useTranslation } from 'next-i18next';
import {
  OutcomesContainer,
  OutcomesList,
  OutcomesItem,
  OutcomesIcon
} from './OutcomesStripStyles';

const OutcomesStrip = () => {
  const { t } = useTranslation('common');

  return (
    <OutcomesContainer>
      <OutcomesList>
        <OutcomesItem>
          <OutcomesIcon>📈</OutcomesIcon>
          {t('outcomes.mau')}
        </OutcomesItem>
        <OutcomesItem>
          <OutcomesIcon>💼</OutcomesIcon>
          {t('outcomes.portfolio')}
        </OutcomesItem>
        <OutcomesItem>
          <OutcomesIcon>🚀</OutcomesIcon>
          {t('outcomes.experience')}
        </OutcomesItem>
      </OutcomesList>
    </OutcomesContainer>
  );
};

export default OutcomesStrip;
