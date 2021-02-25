import React from 'react';
import { animateScroll as scroll } from 'react-scroll';
import CanadaFlag from '../../images/canada.png';
import logo from '../../images/Logo.png';

import {
  FooterContainer,
  FooterCopyright,
  SocialIconLink,
  SocialLinksWrapper,
  FooterImageContainer,
  FooterCanada,
  FooterLogo,
  Divider,
} from './FooterElements';

import { FaGithub, FaLinkedin, FaTwitter, FaDev } from 'react-icons/fa';
import { SiCodewars } from 'react-icons/si';

const Footer_new = () => {
  const toggleHome = () => {
    scroll.scrollToTop();
  };
  return (
    <FooterContainer>
      <FooterImageContainer>
        <FooterCanada src={CanadaFlag} alt="Canada is the Best!" />
        <FooterLogo src={logo} alt="My logo" onClick={toggleHome} />
      </FooterImageContainer>

      <FooterCopyright>Handcrafted by me &copy; 2021</FooterCopyright>

      <Divider />

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

      <Divider />
    </FooterContainer>
  );
};

export default Footer_new;
