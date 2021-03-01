import styled from 'styled-components';
import { Link as LinkScroll } from 'react-scroll';

import { FaTimes } from 'react-icons/fa';

// **************Sidebar Container****************
export const SidebarContainer = styled.aside`
  /* position above everything */
  position: fixed;
  z-index: 999;
  width: 100%;
  height: 100%;
  display: grid;
  align-items: center;
  top: 0;
  left: 0;
  transition: 0.4s ease-in-out;

  /* glass effect */
  background: rgba(1, 191, 113, 0.1);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  /* toggle visibility */
  opacity: ${({ isOpen }) => (isOpen ? '100%' : '0')};
  top: ${({ isOpen }) => (isOpen ? '0' : '-100%')};
`;

export const Icon = styled.div`
  position: absolute;
  top: 1.2rem;
  right: 1.5rem;
  background: transparent;
  font-size: 2.5rem;
  cursor: pointer;
  outline: none;
`;

export const CloseIcon = styled(FaTimes)`
  color: #fff;

  &:hover {
    color: #01bf71;
    transition: 0.2s ease-in-out;
  }
`;

// **************Sidebar Wrapper****************

export const SidebarWrapper = styled.div`
  color: #fff;
`;

// **************Sidebar Menu****************
export const SidebarMenu = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(6, 80px);
  text-align: center;

  @media screen and (max-width: 480px) {
    grid-template-rows: repeat(6, 60px);
  } ;
`;

// **************Sidebar Link****************

export const SidebarLink = styled(LinkScroll)`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2rem;
  text-decoration: none;
  list-style: none;
  transition: 0.2s ease-in-out;
  text-decoration: none;
  color: #fff;
  cursor: pointer;

  text-shadow: -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000,
    1px 1px 0 #000;

  &:hover {
    color: #01bf71;
    transition: 0.2s ease-in-out;
  }
`;

// **************Sidebar Button Wrapper****************
export const SideBtnWrap = styled.div`
  display: flex;
  justify-content: center;
`;
