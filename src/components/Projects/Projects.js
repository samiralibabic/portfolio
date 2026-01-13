import React, { useEffect, useState } from 'react';
import Masonry from 'react-masonry-css';
import { useTranslation } from 'next-i18next';
import Image from 'next/image';
import {
  BlogCard,
  CardInfo,
  HeaderThree,
  Hr,
  Tag,
  TagList,
  TitleContent,
  ImgOverlay,
  ProjectStatusBanner,
  ProjectsControlsRow,
  ProjectGroupsWrapper,
  ProjectGroupDetails,
  ProjectGroupSummary,
  ProjectGroupContent,
} from './ProjectsStyles';
import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { projects } from '../../constants/constants';

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

// Hardcoded list of discontinued and sold project IDs
// POD stores are 2–6; only lustigedruckshirts.de (id: 2) is still active.
// LinkTracker (id: 0) is also discontinued.
const DISCONTINUED_PROJECT_IDS = [0, 1, 3, 4, 5, 6];
const SOLD_PROJECT_IDS = [11]; // affiliatecompanies.net
const FEATURED_PROJECT_IDS = [2, 8, 12, 13, 14]; // lustigedruckshirts.de, print2social, PODB, tierarzt-liste, clipclean

const Projects = () => {
  const { t, i18n } = useTranslation(['common', 'projects']);
  const [discontinuedProjects, setDiscontinuedProjects] = useState(DISCONTINUED_PROJECT_IDS);
  const [soldProjects, setSoldProjects] = useState(SOLD_PROJECT_IDS);
  const [showMoreProjects, setShowMoreProjects] = useState(false);
  
  useEffect(() => {
    // Force re-render when language changes
    setDiscontinuedProjects([...DISCONTINUED_PROJECT_IDS]);
    setSoldProjects([...SOLD_PROJECT_IDS]);
  }, [i18n.language]);

  const orderedProjects = projects.slice().reverse();

  const isInactiveProjectId = (id) =>
    discontinuedProjects.includes(id) || soldProjects.includes(id);

  const featuredProjects = orderedProjects.filter(({ id }) =>
    FEATURED_PROJECT_IDS.includes(id)
  );

  const utilitiesProjects = orderedProjects.filter(
    ({ id }) => !FEATURED_PROJECT_IDS.includes(id) && !isInactiveProjectId(id)
  );

  const inactiveProjects = orderedProjects.filter(
    ({ id }) => !FEATURED_PROJECT_IDS.includes(id) && isInactiveProjectId(id)
  );

  const renderProjectCard = ({ id, image, title, description, tags, visit }) => {
    // Check project status
    const isDiscontinued = discontinuedProjects.includes(id);
    const isSold = soldProjects.includes(id);

    // Get translated description with correct path
    const translatedDescription = t(`projects:projects.${id}.description`, { defaultValue: description });

    // Clean description text by removing status tags
    const cleanDescription = translatedDescription
      .replace('[DISCONTINUED]', '')
      .replace('[EINGESTELLT]', '')
      .trim();

    return (
      <BlogCard key={id}>
        {/* Status banner */}
        {isDiscontinued && (
          <ProjectStatusBanner status="discontinued">
            {t('common:projects.discontinued')}
          </ProjectStatusBanner>
        )}
        {isSold && (
          <ProjectStatusBanner status="sold">
            {t('common:projects.sold')}
          </ProjectStatusBanner>
        )}

        {/* Wrap the entire card in a link if not discontinued or sold */}
        {(isDiscontinued || isSold) ? (
          <>
            {/* Image with grayscale for discontinued/sold projects */}
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
  };
  
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
          {featuredProjects.map(renderProjectCard)}
        </Masonry>
      </div>

      {(utilitiesProjects.length > 0 || inactiveProjects.length > 0) && (
        <ProjectsControlsRow>
          <Button onClick={() => setShowMoreProjects((prev) => !prev)}>
            {showMoreProjects ? t('common:projects.showLess') : t('common:projects.showMore')}
          </Button>
        </ProjectsControlsRow>
      )}

      {showMoreProjects && (
        <ProjectGroupsWrapper>
          {utilitiesProjects.length > 0 && (
            <ProjectGroupDetails open>
              <ProjectGroupSummary>
                {t('common:projects.utilities')} ({utilitiesProjects.length})
              </ProjectGroupSummary>
              <ProjectGroupContent>
                <div style={containerStyle}>
                  <Masonry
                    breakpointCols={breakpointColumnsObj}
                    className="my-masonry-grid"
                    columnClassName="my-masonry-grid_column"
                  >
                    {utilitiesProjects.map(renderProjectCard)}
                  </Masonry>
                </div>
              </ProjectGroupContent>
            </ProjectGroupDetails>
          )}

          {inactiveProjects.length > 0 && (
            <ProjectGroupDetails>
              <ProjectGroupSummary>
                {t('common:projects.inactive')} ({inactiveProjects.length})
              </ProjectGroupSummary>
              <ProjectGroupContent>
                <div style={containerStyle}>
                  <Masonry
                    breakpointCols={breakpointColumnsObj}
                    className="my-masonry-grid"
                    columnClassName="my-masonry-grid_column"
                  >
                    {inactiveProjects.map(renderProjectCard)}
                  </Masonry>
                </div>
              </ProjectGroupContent>
            </ProjectGroupDetails>
          )}
        </ProjectGroupsWrapper>
      )}
    </Section>
  );
};

export default Projects;