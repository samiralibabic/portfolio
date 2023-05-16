import React from 'react';
import { DiGoogleCloudPlatform, DiJava, DiReact, DiWordpress, DiZend } from 'react-icons/di';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';
import { BlogCard, GridContainer } from '../Projects/ProjectsStyles';
import { technologies } from '../../constants/constants';

const Technologies = () => (
  <Section id='tech'>
    <SectionDivider />
    <SectionTitle main>Technologies</SectionTitle>
    <SectionText>Over the course of my career, I have worked with a wide range of technologies,
      with different levels of profficiency, enabling me to deliver robust and efficient solutions.
    </SectionText>
    <GridContainer>
      <BlogCard>
        <ListContainer>
          <ListTitle><DiReact size='3rem' style={{ minWidth: '30px', marginRight: '10px' }} />Front-End</ListTitle>
          {technologies.frontEnd.map((feTech) => (
            <ListItem key={feTech}><ListParagraph>{feTech}</ListParagraph></ListItem>
          ))}
        </ListContainer>
      </BlogCard>
      <BlogCard>
        <ListContainer>
          <ListTitle><DiJava size='3rem' style={{ minWidth: '30px', marginRight: '10px' }} />Back-End</ListTitle>
          {technologies.backEnd.map((beTech) => (
            <ListItem key={beTech}><ListParagraph>{beTech}</ListParagraph></ListItem>
          ))}
        </ListContainer>
      </BlogCard>
      <BlogCard>
        <ListContainer>
          <ListTitle><DiGoogleCloudPlatform size='3rem' style={{ minWidth: '30px', marginRight: '10px' }} />Cloud and Deployment</ListTitle>
          {technologies.cloudAndDeployment.map((cloudAndDeployment) => (
            <ListItem key={cloudAndDeployment}><ListParagraph>{cloudAndDeployment}</ListParagraph></ListItem>
          ))}
        </ListContainer>
      </BlogCard>
      <BlogCard>
        <ListContainer>
          <ListTitle><DiWordpress size='3rem' style={{ minWidth: '30px', marginRight: '10px' }} /> Additional Skills and Practices</ListTitle>
          {technologies.additionalSkills.map((additionalSkills) => (
            <ListItem key={additionalSkills}><ListParagraph>{additionalSkills}</ListParagraph></ListItem>
          ))}
        </ListContainer>
      </BlogCard>
    </GridContainer>


  </Section>
);

export default Technologies;
