import React from 'react';
import { animateScroll as scroll } from 'react-scroll';
import CanadaFlag from '../../images/canada.png';
import CanadaIcon from '../../images/canada_round.png';
import logoDarkMode from '../../images/Logo.png';
import logoLightMode from '../../images/Logo-Light.png';

import {
  FooterContainer,
  FooterCopyright,
  FooterImageContainer,
  FooterCanada,
  FooterLogo,
  Divider,
} from './FooterElements';

import { useGlobalContext } from '../../context/context';
import SocialLinks from '../SocialLinks';

const Footer = () => {
  const { theme } = useGlobalContext();
  const toggleHome = () => {
    scroll.scrollToTop();
  };
  return (
    <FooterContainer>
      <FooterImageContainer>
        <FooterCanada src={CanadaIcon} alt="Canada is the Best!" />
        <FooterLogo
          src={theme === 'dark' ? logoDarkMode : logoLightMode}
          alt="My logo"
          onClick={toggleHome}
        />
      </FooterImageContainer>

      <FooterCopyright>Handcrafted by me &copy; 2021</FooterCopyright>

      <Divider />

      <SocialLinks />

      <Divider />
    </FooterContainer>
  );
};

export default Footer;
