import React, { useEffect, useState } from 'react';
import Masonry from 'react-masonry-css';
import { useTranslation } from 'next-i18next';
import Image from 'next/image';
import { BlogCard, CardInfo, HeaderThree, Hr, Tag, TagList, TitleContent, ImgOverlay } from './ProjectsStyles';
import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { projects } from '../../constants/constants';

// Simplified custom CSS for the discontinued banner
const customStyles = `
  .discontinued-banner {
    position: absolute;
    top: 30px;
    right: -30px;
    background-color: #FF0000;
    color: white;
    padding: 3px 30px;
    transform: rotate(45deg);
    font-weight: bold;
    z-index: 2;
    font-size: 10px;
    letter-spacing: 1px;
    pointer-events: none;
    box-shadow: 0 1px 3px rgba(0,0,0,0.3);
  }
  
  .my-masonry-grid {
    display: flex;
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
  }
  
  .my-masonry-grid_column {
    padding-left: 20px; /* gutter size */
    background-clip: padding-box;
  }
  
  /* Style your items */
  .my-masonry-grid_column > div {
    margin-bottom: 30px;
  }
  
  @media (max-width: 1024px) {
    .my-masonry-grid {
      margin: 0 auto;
    }
  }
  
  @media (max-width: 768px) {
    .my-masonry-grid_column {
      padding-left: 15px;
    }
    .my-masonry-grid_column > div {
      margin-bottom: 20px;
    }
  }
  
  @media (max-width: 640px) {
    .my-masonry-grid_column {
      padding-left: 0;
    }
    .my-masonry-grid_column > div {
      margin-bottom: 15px;
    }
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
  justifyContent: 'center',
  alignItems: 'center',
  margin: '0 auto',
  padding: '0'
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
    <Section id="projects">
      <SectionDivider />
      <SectionTitle main>{t('common:projects.title')}</SectionTitle>
      <div style={containerStyle}>
        <Masonry
          breakpointCols={breakpointColumnsObj}
          className="my-masonry-grid"
          columnClassName="my-masonry-grid_column"
        >
          {projects.slice().reverse().map(({ id, image, title, description, tags, visit }) => {
            // Check if this project is in our hardcoded discontinued list
            const isDiscontinued = discontinuedProjects.includes(id);
            
            // Get translated description with correct path
            const translatedDescription = t(`projects:projects.${id}.description`, { defaultValue: description });
            
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
                        <div style={{ position: 'relative', width: '100%', height: '200px' }}>
                          <Image 
                            src={image} 
                            alt={title} 
                            fill
                            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                            style={{ 
                              objectFit: 'cover',
                              filter: 'grayscale(100%)',
                              borderRadius: '12px 12px 0 0'
                            }}
                            priority={id === 12}
                            loading={id === 12 ? "eager" : "lazy"}
                            quality={id === 12 ? 90 : 75}
                            placeholder="blur"
                            blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4gHYSUNDX1BST0ZJTEUAAQEAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADb/2wBDABQODxIPDRQSEBIXFRQdHx4eHRoaHSQtJSEkLzYvLy82NDQ0NDY0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDT/2wBDAR0XFyAeIR4hISE0LSotNDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDT/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAb/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAb/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k="
                          />
                        </div>
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
                        <div style={{ position: 'relative', width: '100%', height: '200px' }}>
                          <Image 
                            src={image} 
                            alt={title} 
                            fill
                            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                            style={{ 
                              objectFit: 'cover',
                              borderRadius: '12px 12px 0 0'
                            }}
                            priority={id === 12}
                            loading={id === 12 ? "eager" : "lazy"}
                            quality={id === 12 ? 90 : 75}
                            placeholder="blur"
                            blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4gHYSUNDX1BST0ZJTEUAAQEAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADb/2wBDABQODxIPDRQSEBIXFRQdHx4eHRoaHSQtJSEkLzYvLy82NDQ0NDY0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDT/2wBDAR0XFyAeIR4hISE0LSotNDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDT/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAb/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAb/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k="
                          />
                        </div>
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