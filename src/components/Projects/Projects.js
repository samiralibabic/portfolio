import React from 'react';
import Masonry from 'react-masonry-css';
import { BlogCard, CardInfo, ExternalLinks, HeaderThree, Hr, Tag, TagList, TitleContent, UtilityList, Img } from './ProjectsStyles';
import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { projects } from '../../constants/constants';

const Projects = () => (
  <Section id='projects'>
    <SectionDivider />
    <SectionTitle main>Projects</SectionTitle>
    <Masonry
      breakpointCols={{
        default: 3,
        1100: 2,
        700: 1
      }}
      className="my-masonry-grid"
      columnClassName="my-masonry-grid_column"
    >
      {projects.slice().reverse().map(({ id, image, title, description, tags, visit }) => (
        <BlogCard key={id}>
          {image && (
            <a href={visit} target="_blank" rel="noopener noreferrer">
              <Img src={image} alt={title} />
            </a>
          )}
          <TitleContent>
            <HeaderThree title={title}>
              <a href={visit} target="_blank" rel="noopener noreferrer">
                {title}
              </a>
            </HeaderThree>
            <Hr />
          </TitleContent>
          <CardInfo>{description}</CardInfo>
          <div>
            <TagList>
              {tags.map((tag, i) => (
                <Tag key={i}>{tag}</Tag>
              ))}
            </TagList>
          </div>
        </BlogCard>
      ))}
    </Masonry>
  </Section>
);

export default Projects;