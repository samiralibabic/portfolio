import React from 'react';
import { DiGoogleCloudPlatform, DiJava, DiReact, DiWordpress } from 'react-icons/di';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { TechGridContainer, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';
import { BlogCard, GridColumn } from '../Projects/ProjectsStyles';
import { technologies } from '../../constants/constants';

const Technologies = () => (
  <Section id='tech'>
    <SectionDivider />
    <SectionTitle main>Technologies</SectionTitle>
    <SectionText>Over the course of my career, I have worked with a wide range of technologies,
      with different levels of proficiency, but nowadays I mostly ship fast with no-code/low-code tools.
    </SectionText>
    <TechGridContainer>
      <GridColumn>
        <BlogCard>
          <ListContainer>
            <ListTitle><DiReact size='30' style={{ minWidth: '30px', marginRight: '10px' }} />Front-End</ListTitle>
            {technologies.frontEnd.map((feTech) => (
              <ListItem key={feTech}><ListParagraph>{feTech}</ListParagraph></ListItem>
            ))}
          </ListContainer>
        </BlogCard>
        <BlogCard>
          <ListContainer>
            <ListTitle><DiJava size='30' style={{ minWidth: '30px', marginRight: '10px' }} />Back-End</ListTitle>
            {technologies.backEnd.map((beTech) => (
              <ListItem key={beTech}><ListParagraph>{beTech}</ListParagraph></ListItem>
            ))}
          </ListContainer>
        </BlogCard>
      </GridColumn>
      <GridColumn>
        <BlogCard>
          <ListContainer>
            <ListTitle><DiGoogleCloudPlatform size='30' style={{ minWidth: '30px', marginRight: '10px' }} />DevOps</ListTitle>
            {technologies.devOps.map((devOps) => (
              <ListItem key={devOps}><ListParagraph>{devOps}</ListParagraph></ListItem>
            ))}
          </ListContainer>
        </BlogCard>
        <BlogCard>
          <ListContainer>
            <ListTitle><DiWordpress size='30' style={{ minWidth: '30px', marginRight: '10px' }} /> Additional Skills and Practices</ListTitle>
            {technologies.additionalSkills.map((additionalSkills) => (
              <ListItem key={additionalSkills}><ListParagraph>{additionalSkills}</ListParagraph></ListItem>
            ))}
          </ListContainer>
        </BlogCard>
      </GridColumn>
    </TechGridContainer>
  </Section>
);

export default Technologies;