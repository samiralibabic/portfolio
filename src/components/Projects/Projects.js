import React, { useState } from 'react';
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
  ProjectCardLink,
  ProjectsControlsRow,
  ProjectGroupsWrapper,
  ProjectGroupDetails,
  ProjectGroupSummary,
  ProjectGroupHelper,
  ProjectGroupContent,
} from './ProjectsStyles';
import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { projects } from '../../constants/constants';

// Masonry breakpoints
const breakpointColumnsObj = {
  default: 2,
  900: 1
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
const FEATURED_PROJECT_IDS = [12, 13, 8, 2]; // PODB, tierarzt-liste, print2social, lustigedruckshirts.de - ClipClean moved to utilities

const Projects = () => {
  const { t } = useTranslation(['common', 'projects']);
  const [showMoreProjects, setShowMoreProjects] = useState(false);

  const orderedProjects = projects.slice().reverse();

  const isInactiveProjectId = (id) =>
    DISCONTINUED_PROJECT_IDS.includes(id) || SOLD_PROJECT_IDS.includes(id);

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
    const isDiscontinued = DISCONTINUED_PROJECT_IDS.includes(id);
    const isSold = SOLD_PROJECT_IDS.includes(id);
    const isInactive = isDiscontinued || isSold;

    // Get translated description with correct path
    const translatedDescription = t(`projects:projects.${id}.description`, { defaultValue: description });

    // Clean description text by removing status tags
    const cleanDescription = translatedDescription
      .replace('[DISCONTINUED]', '')
      .replace('[EINGESTELLT]', '')
      .trim();

    const linkProps = isInactive
      ? { 'data-disabled': 'true', 'aria-disabled': 'true', tabIndex: -1 }
      : { target: '_blank', rel: 'noopener noreferrer' };

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

        <ProjectCardLink href={visit} {...linkProps}>
          {/* Image */}
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
                    filter: isInactive ? 'grayscale(100%)' : 'none',
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
        </ProjectCardLink>
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
          <Button
            onClick={() => setShowMoreProjects((prev) => !prev)}
            aria-expanded={showMoreProjects}
            aria-controls="project-groups"
          >
            {showMoreProjects ? t('common:projects.showLess') : t('common:projects.showMore')}
          </Button>
        </ProjectsControlsRow>
      )}

      {(utilitiesProjects.length > 0 || inactiveProjects.length > 0) && (
        <ProjectGroupsWrapper
          id="project-groups"
          data-expanded={showMoreProjects ? 'true' : 'false'}
        >
          {utilitiesProjects.length > 0 && (
            <ProjectGroupDetails open>
              <ProjectGroupSummary>
                {t('common:projects.utilities')} ({utilitiesProjects.length})
              </ProjectGroupSummary>
              <ProjectGroupContent>
                <ProjectGroupHelper>{t('common:projects.utilitiesHelper')}</ProjectGroupHelper>
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
                <ProjectGroupHelper>{t('common:projects.inactiveHelper')}</ProjectGroupHelper>
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
