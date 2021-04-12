import styled from 'styled-components';
import { Link as LinkRouter } from 'react-router-dom';
import { Link as LinkScroll } from 'react-scroll';

// ************ NAVBAR **************************
export const Nav = styled.nav`
  background: ${({ scrollNav, theme }) =>
    scrollNav ? theme.navBg : theme.navGlass};
  height: 80px;
  margin-top: -80px;
  display: flex;
  justify-content: center;
  font-size: 1rem;
  position: sticky;
  top: 0;
  z-index: 10;

  @media screen and (max-width: 960px) {
    transition: 0.8s all ease;
  }
`;

// ************ NAVBAR CONTAINER *****************
export const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 80px;
  z-index: 1;
  width: 100%;
  padding: 0 24px;
  max-width: 1100px;
`;

// ************ LOGO ***********************
export const NavLogo = styled(LinkRouter)`
  cursor: pointer;
`;

// ************ Mobile Icons ***********************
export const MobileIcon = styled.div`
  display: none;

  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 60%);
    font-size: 1.8rem;
    cursor: pointer;
    color: #fff;
  }
`;

// ************ Nav Menu ***********************

export const NavMenu = styled.div`
  display: flex;
  align-items: center;
  list-style: none;
  text-align: center;
  margin-right: 4rem;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

// ************ Nav Item ***********************
export const NavItem = styled.div`
  height: 80px;
`;

// ************ Nav Links ***********************
export const NavLinks = styled(LinkScroll)`
  color: #fff;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;
  font-size: 1rem;
  letter-spacing: 1.1px;

  &:active {
    border-bottom: 3px solid #01bf71;
    color: #01bf71;
  }

  &:hover {
    color: ${({ theme }) => theme.mainColor};
  }
`;

// ************Nav Avatar*************************
export const NavAvatar = styled.img`
  margin-left: 1rem;
  width: 50px;
`;
