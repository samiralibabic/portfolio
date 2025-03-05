import React from 'react';
import { DiGoogleCloudPlatform, DiJava, DiReact, DiWordpress } from 'react-icons/di';
import { useTranslation } from 'next-i18next';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { TechGridContainer, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';
import { BlogCard } from '../Projects/ProjectsStyles';
import { technologies } from '../../constants/constants';

// Container style for better centering
const containerStyle = {
  width: '100%',
  display: 'flex',
  justifyContent: 'center'
};

// Card style to make them narrower
const cardStyle = {
  width: '100%',
  maxWidth: '400px',
  margin: '0 auto'
};

const Technologies = () => {
  const { t } = useTranslation('common');
  
  return (
    <Section id='tech'>
      <SectionDivider />
      <SectionTitle main>{t('technologies.title')}</SectionTitle>
      <SectionText>
        {t('technologies.subtitle')}
      </SectionText>
      <div style={containerStyle}>
        <TechGridContainer>
          <BlogCard style={cardStyle}>
            <ListContainer>
              <ListTitle><DiReact size='30' style={{ minWidth: '30px', marginRight: '10px' }} />{t('technologies.frontend', 'Front-End')}</ListTitle>
              {technologies.frontEnd.map((feTech) => (
                <ListItem key={feTech}><ListParagraph>{feTech}</ListParagraph></ListItem>
              ))}
            </ListContainer>
          </BlogCard>
          
          <BlogCard style={cardStyle}>
            <ListContainer>
              <ListTitle><DiJava size='30' style={{ minWidth: '30px', marginRight: '10px' }} />{t('technologies.backend', 'Back-End')}</ListTitle>
              {technologies.backEnd.map((beTech) => (
                <ListItem key={beTech}><ListParagraph>{beTech}</ListParagraph></ListItem>
              ))}
            </ListContainer>
          </BlogCard>
          
          <BlogCard style={cardStyle}>
            <ListContainer>
              <ListTitle><DiGoogleCloudPlatform size='30' style={{ minWidth: '30px', marginRight: '10px' }} />{t('technologies.devops', 'DevOps')}</ListTitle>
              {technologies.devOps.map((devOps) => (
                <ListItem key={devOps}><ListParagraph>{devOps}</ListParagraph></ListItem>
              ))}
            </ListContainer>
          </BlogCard>
          
          <BlogCard style={cardStyle}>
            <ListContainer>
              <ListTitle><DiWordpress size='30' style={{ minWidth: '30px', marginRight: '10px' }} />{t('technologies.additional', 'Additional Skills and Practices')}</ListTitle>
              {technologies.additionalSkills.map((additionalSkills) => (
                <ListItem key={additionalSkills}><ListParagraph>{additionalSkills}</ListParagraph></ListItem>
              ))}
            </ListContainer>
          </BlogCard>
        </TechGridContainer>
      </div>
    </Section>
  );
};

export default Technologies;