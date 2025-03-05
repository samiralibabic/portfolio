import React, { useEffect, useState } from 'react';
import Masonry from 'react-masonry-css';
import { useTranslation } from 'next-i18next';
import { BlogCard, CardInfo, HeaderThree, Hr, Tag, TagList, TitleContent, Img, ImgOverlay } from './ProjectsStyles';
import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { projects } from '../../constants/constants';

// Simplified custom CSS for the discontinued banner
const customStyles = `
  .discontinued-banner {
    position: absolute;
    top: 15px;
    right: -30px;
    background-color: #FF0000;
    color: white;
    padding: 3px 30px;
    transform: rotate(45deg);
    font-weight: bold;
    z-index: 10;
    font-size: 10px;
    letter-spacing: 1px;
    pointer-events: none;
    box-shadow: 0 1px 3px rgba(0,0,0,0.3);
  }
`;

// Masonry breakpoints
const breakpointColumnsObj = {
  default: 3,
  1100: 2,
  700: 1
};

// Container style for better mobile centering
const containerStyle = {
  width: '100%',
  display: 'flex',
  justifyContent: 'center'
};

// Hardcoded list of discontinued project IDs based on translation files
const DISCONTINUED_PROJECT_IDS = [1, 6]; // IDs from the translation files

const Projects = () => {
  const { t, i18n } = useTranslation(['common', 'projects']);
  const [discontinuedProjects, setDiscontinuedProjects] = useState(DISCONTINUED_PROJECT_IDS);
  
  useEffect(() => {
    // Force re-render when language changes
    setDiscontinuedProjects([...DISCONTINUED_PROJECT_IDS]);
    
    // Add custom CSS to the document
    if (!document.getElementById('discontinued-banner-styles')) {
      const styleElement = document.createElement('style');
      styleElement.id = 'discontinued-banner-styles';
      styleElement.innerHTML = customStyles;
      document.head.appendChild(styleElement);
    }
  }, [i18n.language]);
  
  return (
    <Section nopadding id="projects">
      <SectionDivider />
      <SectionTitle main>{t('common:projects.title')}</SectionTitle>
      <div style={containerStyle}>
        <Masonry
          breakpointCols={breakpointColumnsObj}
          className="my-masonry-grid"
          columnClassName="my-masonry-grid_column"
          style={{ width: '100%', maxWidth: '1200px' }}
        >
          {projects.slice().reverse().map(({ id, image, title, description, tags, visit }) => {
            // Check if this project is in our hardcoded discontinued list
            const isDiscontinued = discontinuedProjects.includes(id);
            
            // Try to get translated description from projects.json
            const translatedDescription = t(`projects:${id}.description`, { defaultValue: description });
            
            // Clean description text by removing the discontinued tag
            const cleanDescription = translatedDescription
              .replace('[DISCONTINUED]', '')
              .replace('[EINGESTELLT]', '')
              .trim();
            
            return (
              <BlogCard key={id}>
                {/* Wrap the entire card in a link if not discontinued */}
                {isDiscontinued ? (
                  <>
                    {/* Discontinued banner */}
                    <div className="discontinued-banner">
                      {t('common:projects.discontinued', 'DISCONTINUED')}
                    </div>
                    
                    {/* Image with grayscale for discontinued projects */}
                    {image && (
                      <ImgOverlay>
                        <Img src={image} alt={title} style={{ filter: 'grayscale(100%)' }} />
                      </ImgOverlay>
                    )}
                    
                    <TitleContent>
                      <HeaderThree title={title}>
                        <span>{title}</span>
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
                  </>
                ) : (
                  <a href={visit} target="_blank" rel="noopener noreferrer" style={{ 
                    display: 'block', 
                    textDecoration: 'none',
                    color: 'inherit',
                    height: '100%'
                  }}>
                    {/* Image for active projects */}
                    {image && (
                      <ImgOverlay>
                        <Img src={image} alt={title} />
                      </ImgOverlay>
                    )}
                    
                    <TitleContent>
                      <HeaderThree title={title}>
                        {title}
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
                  </a>
                )}
              </BlogCard>
            );
          })}
        </Masonry>
      </div>
    </Section>
  );
};

export default Projects;