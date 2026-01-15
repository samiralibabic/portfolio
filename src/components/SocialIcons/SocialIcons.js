import React, { useEffect, useState } from 'react';
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai';
import { FaMastodon } from 'react-icons/fa';
import { FaBluesky, FaXTwitter } from 'react-icons/fa6';
import { SiBluesky } from 'react-icons/si';

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
      <SocialIcon href='https://github.com/samiralibabic' target='_blank' rel='noopener noreferrer' aria-label='Visit my GitHub profile'>
        <AiFillGithub size={iconSize} />
      </SocialIcon>
      <SocialIcon href='https://www.linkedin.com/in/samiralibabic/' target='_blank' rel='noopener noreferrer' aria-label='Connect with me on LinkedIn'>
        <AiFillLinkedin size={iconSize} />
      </SocialIcon>
      <SocialIcon href='https://twitter.com/samiralibabic' target='_blank' rel='noopener noreferrer' aria-label='Follow me on X'>
        <FaXTwitter size={iconSize} />
      </SocialIcon>
      <SocialIcon href='https://bsky.app/profile/samiralibabic.bsky.social' target='_blank' rel='noopener noreferrer' aria-label='Follow me on Bluesky'>
        <SiBluesky size={iconSize} />
      </SocialIcon>
      <SocialIcon href='https://mastodon.social/@samiralibabic' target='_blank' rel='me noopener noreferrer' aria-label='Follow me on Mastodon'>
        <FaMastodon size={iconSize} />
      </SocialIcon>
    </SocialIconsContainer>
  );
};

export default SocialIconsGroup; 
