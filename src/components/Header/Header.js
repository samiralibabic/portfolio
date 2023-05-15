import Link from 'next/link';
import React from 'react';
import { AiFillGithub, AiFillTwitterCircle, AiFillLinkedin } from 'react-icons/ai';
import { DiCssdeck } from 'react-icons/di';

import { Container, Span, Div1, Div2, Div3, NavLink, SocialIcons } from './HeaderStyles';

const Header = () => (
  <Container>
    <Div1>
      <Link href="/" style={{ display: "flex", alignItems: "center", color: "white", marginBottom: "20px" }}>
        <DiCssdeck size="3rem" /> <Span>Portfolio</Span>
      </Link>
    </Div1>
    <Div2>
        <Link href="#projects">
          <NavLink>Projects</NavLink>
        </Link>
        <Link href="#tech">
          <NavLink>Techonologies</NavLink>
        </Link>
        <Link href="#about">
          <NavLink>About</NavLink>
        </Link>
    </Div2>
    <Div3>
      <SocialIcons href='https://github.com/samiralibabic' target='_blank'>
        <AiFillGithub size="3rem" />
      </SocialIcons>
      <SocialIcons href='https://www.linkedin.com/in/samiralibabic/' target='_blank'>
        <AiFillLinkedin size="3rem" />
      </SocialIcons>
      <SocialIcons href='https://twitter.com/samiralibabic' target='_blank'>
        <AiFillTwitterCircle size="3rem" />
      </SocialIcons>
    </Div3>
  </Container>
);

export default Header;
