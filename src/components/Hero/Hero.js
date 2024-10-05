import React from 'react';

import { SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';
import Link from 'next/link';

const Hero = (props) => (
  <LeftSection>
    <SectionTitle main center>
      Software Engineer | Indiehacker | Entrepreneur
    </SectionTitle>
    <SectionText>
      Hi there! I'm Samir. I love creating things with code (and no-code). Check out my <Link href='#projects' style={{ color: "white" }} scroll={false}>projects</Link> to see what I've built.
    </SectionText>
    <Button onClick={() => window.location = '#contact'}>Contact me</Button>
  </LeftSection>
);

export default Hero;