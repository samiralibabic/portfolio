import React from 'react';
import Masonry from 'react-masonry-css';
import { useTranslation } from 'next-i18next';
import { BlogCard, CardInfo, ExternalLinks, HeaderThree, Hr, Tag, TagList, TitleContent, UtilityList, Img } from './ProjectsStyles';
import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { projects } from '../../constants/constants';

// Style for the discontinued banner
const DiscontinuedBanner = {
  position: 'absolute',
  top: '40px',
  right: '-40px',
  backgroundColor: '#FF0000',
  color: 'white',
  padding: '8px 45px',
  transform: 'rotate(45deg)',
  transformOrigin: 'center',
  fontWeight: 'bold',
  zIndex: 10,
  boxShadow: '0 2px 5px rgba(0,0,0,0.3)',
  fontSize: '14px',
  letterSpacing: '1px'
};

const Projects = () => {
  const { t } = useTranslation(['common', 'projects']);
  
  return (
    <Section id='projects'>
      <SectionDivider />
      <SectionTitle main>{t('projects.title')}</SectionTitle>
      <Masonry
        breakpointCols={{
          default: 3,
          1100: 2,
          700: 1
        }}
        className="my-masonry-grid"
        columnClassName="my-masonry-grid_column"
      >
        {projects.slice().reverse().map(({ id, image, title, description, tags, visit }) => {
          // Try to get translated description from projects.json
          const translatedDescription = t(`projects.${id}.description`, { defaultValue: description, ns: 'projects' });
          
          // Check if project is discontinued
          const isDiscontinued = translatedDescription.includes('[DISCONTINUED]') || 
                                translatedDescription.includes('[EINGESTELLT]');
          
          // Clean description text by removing the discontinued tag
          const cleanDescription = isDiscontinued 
            ? translatedDescription.replace('[DISCONTINUED]', '').replace('[EINGESTELLT]', '').trim() 
            : translatedDescription;
          
          return (
            <BlogCard key={id} style={isDiscontinued ? { opacity: 0.7, position: 'relative', overflow: 'hidden' } : {}}>
              {isDiscontinued && <div style={DiscontinuedBanner}>{t('common:projects.discontinued', 'DISCONTINUED')}</div>}
              
              {image && (
                isDiscontinued ? (
                  <Img src={image} alt={title} style={{ filter: 'grayscale(100%)' }} />
                ) : (
                  <a href={visit} target="_blank" rel="noopener noreferrer">
                    <Img src={image} alt={title} />
                  </a>
                )
              )}
              
              <TitleContent>
                <HeaderThree title={title}>
                  {isDiscontinued ? (
                    <span>{title}</span>
                  ) : (
                    <a href={visit} target="_blank" rel="noopener noreferrer">
                      {title}
                    </a>
                  )}
                </HeaderThree>
                <Hr />
              </TitleContent>
              <CardInfo>{cleanDescription}</CardInfo>
              <div>
                <TagList>
                  {tags.map((tag, i) => (
                    <Tag key={i}>{tag}</Tag>
                  ))}
                </TagList>
              </div>
            </BlogCard>
          );
        })}
      </Masonry>
    </Section>
  );
};

export default Projects;