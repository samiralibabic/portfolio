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
  maxWidth: '450px',
  margin: '0 auto'
};

// Style for subgroup titles
const subgroupTitleStyle = {
  fontSize: '18px',
  fontWeight: '600',
  color: '#fff',
  marginTop: '15px',
  marginBottom: '8px',
  textAlign: 'center'
};

// Style for comma-separated tech list
const techListStyle = {
  fontSize: '16px',
  lineHeight: '24px',
  color: 'rgba(255, 255, 255, 0.75)',
  padding: '0 10px 15px',
  textAlign: 'center'
};

const Technologies = () => {
  const { t } = useTranslation('common');
  
  // Translation mapping for subgroup titles
  const getSubgroupTranslation = (category, subgroup) => {
    const translationKey = `technologies.${category}Categories.${subgroup}`;
    // Use the capitalized subgroup name as fallback
    const fallback = subgroup.charAt(0).toUpperCase() + subgroup.slice(1);
    return t(translationKey, fallback);
  };
  
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
              
              {Object.entries(technologies.frontEnd).map(([subgroup, techs]) => (
                <React.Fragment key={subgroup}>
                  <div style={subgroupTitleStyle}>{getSubgroupTranslation('frontend', subgroup)}</div>
                  <div style={techListStyle}>
                    {techs.join(', ')}
                  </div>
                </React.Fragment>
              ))}
            </ListContainer>
          </BlogCard>
          
          <BlogCard style={cardStyle}>
            <ListContainer>
              <ListTitle><DiJava size='30' style={{ minWidth: '30px', marginRight: '10px' }} />{t('technologies.backend', 'Back-End')}</ListTitle>
              
              {Object.entries(technologies.backEnd).map(([subgroup, techs]) => (
                <React.Fragment key={subgroup}>
                  <div style={subgroupTitleStyle}>{getSubgroupTranslation('backend', subgroup)}</div>
                  <div style={techListStyle}>
                    {techs.join(', ')}
                  </div>
                </React.Fragment>
              ))}
            </ListContainer>
          </BlogCard>
          
          <BlogCard style={cardStyle}>
            <ListContainer>
              <ListTitle><DiGoogleCloudPlatform size='30' style={{ minWidth: '30px', marginRight: '10px' }} />{t('technologies.devops', 'DevOps')}</ListTitle>
              
              {Object.entries(technologies.devOps).map(([subgroup, techs]) => (
                <React.Fragment key={subgroup}>
                  <div style={subgroupTitleStyle}>{getSubgroupTranslation('devops', subgroup)}</div>
                  <div style={techListStyle}>
                    {techs.join(', ')}
                  </div>
                </React.Fragment>
              ))}
            </ListContainer>
          </BlogCard>
          
          <BlogCard style={cardStyle}>
            <ListContainer>
              <ListTitle><DiWordpress size='30' style={{ minWidth: '30px', marginRight: '10px' }} />{t('technologies.additional', 'Additional Skills and Practices')}</ListTitle>
              
              {Object.entries(technologies.additionalSkills).map(([subgroup, techs]) => (
                <React.Fragment key={subgroup}>
                  <div style={subgroupTitleStyle}>{getSubgroupTranslation('additional', subgroup)}</div>
                  <div style={techListStyle}>
                    {techs.join(', ')}
                  </div>
                </React.Fragment>
              ))}
            </ListContainer>
          </BlogCard>
        </TechGridContainer>
      </div>
    </Section>
  );
};

export default Technologies;