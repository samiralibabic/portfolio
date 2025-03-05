import React, { useEffect, useState } from 'react';
import { AiFillGithub, AiFillTwitterCircle, AiFillLinkedin } from 'react-icons/ai';
import { FaMastodon } from 'react-icons/fa';
import { FaBluesky } from 'react-icons/fa6';

import { SocialIconsContainer, SocialIcon } from './SocialIconsStyles';

const SocialIconsGroup = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 1024);
    };
    
    // Set initial value
    handleResize();
    
    // Add event listener
    window.addEventListener('resize', handleResize);
    
    // Clean up
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const iconSize = isMobile ? "20" : "25";

  return (
    <SocialIconsContainer>
      <SocialIcon href='https://github.com/samiralibabic' target='_blank'>
        <AiFillGithub size={iconSize} />
      </SocialIcon>
      <SocialIcon href='https://www.linkedin.com/in/samiralibabic/' target='_blank'>
        <AiFillLinkedin size={iconSize} />
      </SocialIcon>
      <SocialIcon href='https://twitter.com/samiralibabic' target='_blank'>
        <AiFillTwitterCircle size={iconSize} />
      </SocialIcon>
      <SocialIcon href='https://bsky.app/profile/samiralibabic.bsky.social' target='_blank'>
        <FaBluesky size={iconSize} />
      </SocialIcon>
      <SocialIcon rel="me" href='https://mastodon.social/@samiralibabic' target='_blank'>
        <FaMastodon size={iconSize} />
      </SocialIcon>
    </SocialIconsContainer>
  );
};

export default SocialIconsGroup; 