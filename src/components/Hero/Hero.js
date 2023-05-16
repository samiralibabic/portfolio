import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';
import Link from 'next/link';

const Hero = (props) => (
    <LeftSection>
      <SectionTitle main center>
        Discover the transformative power of captivating digital experiences.
      </SectionTitle>
      <SectionText>
        Welcome to my developer portfolio, where I combine a passion for coding,
        a creative mindset, and the utilization of emerging technologies to deliver
        innovative and impactful solutions to challenges.
      </SectionText>
      <Button onClick={() => window.location = '#contact'}>Contact me</Button>
    </LeftSection>
);

export default Hero;