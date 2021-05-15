import React, { useState, useEffect } from 'react';
import { FaBars } from 'react-icons/fa';
import { animateScroll as scroll } from 'react-scroll';
import {
  Nav,
  NavbarContainer,
  NavLogo,
  MobileIcon,
  NavItem,
  NavMenu,
  NavLinks,
  NavRouterLinks,
  NavAvatar,
} from './NabvarElements';
import logoDarkMode from '../../images/Logo.png';
import logoLightMode from '../../images/Logo-White.png';
import ThemeToggler from '../../components/ThemeToggler/ThemeToggler';
import { useGlobalContext } from '../../context/context';

const Navbar = () => {
  const { toggleSidebar, themeToggler, theme } = useGlobalContext();
  const [scrollNav, setScrollNav] = useState(false);

  const changeNav = () => {
    if (window.scrollY >= 80) {
      setScrollNav(true);
    } else {
      setScrollNav(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', changeNav);

    return () => {
      window.removeEventListener('scroll', changeNav);
    };
  }, []);

  const toggleHome = () => {
    scroll.scrollToTop();
  };

  return (
    <>
      <Nav scrollNav={scrollNav}>
        <NavbarContainer>
          <NavLogo to="/" onClick={toggleHome}>
            <NavAvatar
              src={theme === 'dark' ? logoDarkMode : logoLightMode}
              alt="My logo"
            />
          </NavLogo>
          <MobileIcon onClick={toggleSidebar}>
            <FaBars />
          </MobileIcon>
          <NavMenu>
            <NavItem>
              <NavLinks
                to="home"
                smooth={true}
                duration={1000}
                spy={true}
                exact="true"
                offset={-80}
              >
                About
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks
                to="skills"
                smooth={true}
                duration={1000}
                spy={true}
                exact="true"
                offset={-80}
              >
                Skills
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks
                to="portfolio"
                smooth={true}
                duration={1000}
                spy={true}
                exact="true"
                offset={-80}
              >
                Projects
              </NavLinks>
            </NavItem>

            <NavItem>
              <NavLinks
                to="footer"
                smooth={true}
                duration={1000}
                spy={true}
                exact="true"
                offset={-80}
              >
                Contact
              </NavLinks>
            </NavItem>
            <NavRouterLinks to="/resume">Resume</NavRouterLinks>
          </NavMenu>
          <ThemeToggler themeToggler={themeToggler} />
        </NavbarContainer>
      </Nav>
    </>
  );
};

export default Navbar;
