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
      Welcome to my developer portfolio, where I combine a passion for <Link href="https://github.com/samiralibabic" 
      style={{ color: "white" }} target='_blank'> coding</Link>, a <Link href="https://samiralibabic.hashnode.dev/" 
      style={{ color: "white" }} target='_blank'>creative</Link> mindset, and the utilization of emerging <Link href='#tech'
      style={{ color: "white" }} scroll={false}>technologies</Link> to deliver
      innovative and impactful solutions to challenges.
    </SectionText>
    <Button onClick={() => window.location = '#contact'}>Contact me</Button>
  </LeftSection>
);

export default Hero;