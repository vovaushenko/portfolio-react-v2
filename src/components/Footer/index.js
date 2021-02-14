import React from 'react';
import { animateScroll as scroll } from 'react-scroll';

import {
  FooterContainer,
  SocialIconLink,
  SocialLinksWrapper,
  ToTop,
  ToTopWrapper,
} from './FooterElements';

import { FaGithub, FaLinkedin, FaTwitter, FaDev } from 'react-icons/fa';

import { AiOutlineToTop } from 'react-icons/ai';
import { SiCodewars } from 'react-icons/si';

const Footer_new = () => {
  const toggleHome = () => {
    scroll.scrollToTop();
  };
  return (
    <FooterContainer id="footer">
      <SocialLinksWrapper>
        <SocialIconLink href="https://github.com/vovaushenko" target="_blank">
          <FaGithub />
        </SocialIconLink>
        <SocialIconLink
          href="https://www.codewars.com/users/RampCV"
          target="_blank"
        >
          <SiCodewars />
        </SocialIconLink>
        <SocialIconLink
          href="https://www.linkedin.com/in/volodymyr-ushenko-5087a87b/"
          target="_blank"
        >
          <FaLinkedin />
        </SocialIconLink>
        <SocialIconLink href="//www.twitter.com/Vova79605562" target="_blank">
          <FaTwitter />
        </SocialIconLink>
        <SocialIconLink href="https://dev.to/vovaushenko" target="_blank">
          <FaDev />
        </SocialIconLink>
      </SocialLinksWrapper>
      <ToTopWrapper>
        <ToTop to="/" onClick={toggleHome}>
          <AiOutlineToTop />
        </ToTop>
      </ToTopWrapper>
    </FooterContainer>
  );
};

export default Footer_new;
