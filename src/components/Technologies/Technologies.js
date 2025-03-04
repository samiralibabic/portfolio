import React from 'react';
import { DiGoogleCloudPlatform, DiJava, DiReact, DiWordpress } from 'react-icons/di';
import { useTranslation } from 'next-i18next';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { TechGridContainer, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';
import { BlogCard, GridColumn } from '../Projects/ProjectsStyles';
import { technologies } from '../../constants/constants';

const Technologies = () => {
  const { t } = useTranslation('common');
  
  return (
    <Section id='tech'>
      <SectionDivider />
      <SectionTitle main>{t('technologies.title')}</SectionTitle>
      <SectionText>
        {t('technologies.subtitle')}
      </SectionText>
      <TechGridContainer>
        <GridColumn>
          <BlogCard>
            <ListContainer>
              <ListTitle><DiReact size='30' style={{ minWidth: '30px', marginRight: '10px' }} />{t('technologies.frontend', 'Front-End')}</ListTitle>
              {technologies.frontEnd.map((feTech) => (
                <ListItem key={feTech}><ListParagraph>{feTech}</ListParagraph></ListItem>
              ))}
            </ListContainer>
          </BlogCard>
          <BlogCard>
            <ListContainer>
              <ListTitle><DiJava size='30' style={{ minWidth: '30px', marginRight: '10px' }} />{t('technologies.backend', 'Back-End')}</ListTitle>
              {technologies.backEnd.map((beTech) => (
                <ListItem key={beTech}><ListParagraph>{beTech}</ListParagraph></ListItem>
              ))}
            </ListContainer>
          </BlogCard>
        </GridColumn>
        <GridColumn>
          <BlogCard>
            <ListContainer>
              <ListTitle><DiGoogleCloudPlatform size='30' style={{ minWidth: '30px', marginRight: '10px' }} />{t('technologies.devops', 'DevOps')}</ListTitle>
              {technologies.devOps.map((devOps) => (
                <ListItem key={devOps}><ListParagraph>{devOps}</ListParagraph></ListItem>
              ))}
            </ListContainer>
          </BlogCard>
          <BlogCard>
            <ListContainer>
              <ListTitle><DiWordpress size='30' style={{ minWidth: '30px', marginRight: '10px' }} />{t('technologies.additional', 'Additional Skills and Practices')}</ListTitle>
              {technologies.additionalSkills.map((additionalSkills) => (
                <ListItem key={additionalSkills}><ListParagraph>{additionalSkills}</ListParagraph></ListItem>
              ))}
            </ListContainer>
          </BlogCard>
        </GridColumn>
      </TechGridContainer>
    </Section>
  );
};

export default Technologies;