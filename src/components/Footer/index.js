import React from 'react';
import { animateScroll as scroll } from 'react-scroll';
import CanadaFlag from '../../images/canada.png';
import logoDarkMode from '../../images/Logo.png';
import logoLightMode from '../../images/Logo-Light.png';

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
import { useGlobalContext } from '../../context/context';

const Footer = () => {
  const { theme } = useGlobalContext();
  const toggleHome = () => {
    scroll.scrollToTop();
  };
  return (
    <FooterContainer>
      <FooterImageContainer>
        <FooterCanada src={CanadaFlag} alt="Canada is the Best!" />
        <FooterLogo
          src={theme === 'dark' ? logoDarkMode : logoLightMode}
          alt="My logo"
          onClick={toggleHome}
        />
      </FooterImageContainer>

      <FooterCopyright>Handcrafted by me &copy; 2021</FooterCopyright>

      <Divider />

      <SocialLinksWrapper>
        <SocialIconLink
          href="https://github.com/vovaushenko"
          target="_blank"
          rel="noreferrer"
          aria-label="GitHub"
        >
          <FaGithub />
        </SocialIconLink>
        <SocialIconLink
          href="https://www.codewars.com/users/VovaCodes"
          target="_blank"
          rel="noreferrer"
          aria-label="Code Wars"
        >
          <SiCodewars />
        </SocialIconLink>
        <SocialIconLink
          href="https://www.linkedin.com/in/volodymyr-ushenko-5087a87b/"
          target="_blank"
          rel="noreferrer"
          aria-label="LinkedIn"
        >
          <FaLinkedin />
        </SocialIconLink>
        <SocialIconLink
          href="//www.twitter.com/Vova79605562"
          target="_blank"
          rel="noreferrer"
          aria-label="Twitter"
        >
          <FaTwitter />
        </SocialIconLink>
        <SocialIconLink
          href="https://dev.to/vovaushenko"
          target="_blank"
          rel="noreferrer"
          aria-label="Dev.to"
        >
          <FaDev />
        </SocialIconLink>
      </SocialLinksWrapper>

      <Divider />
    </FooterContainer>
  );
};

export default Footer;
