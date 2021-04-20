import { useGlobalContext } from '../../context/context';
import {
  CloseIcon,
  Icon,
  SidebarContainer,
  SidebarLink,
  SidebarMenu,
  SidebarWrapper,
  SidebarRouterLink,
} from './SidebarElements';

const Sidebar = () => {
  const { toggleSidebar: toggle, isSidebarOpen } = useGlobalContext();

  return (
    <SidebarContainer isOpen={isSidebarOpen} onClick={toggle}>
      <Icon onClick={toggle}>
        <CloseIcon onClick={toggle} />
      </Icon>

      <SidebarWrapper>
        <SidebarMenu>
          <SidebarLink to="home" onClick={toggle}>
            About
          </SidebarLink>
          <SidebarLink to="portfolio" onClick={toggle}>
            Portfolio
          </SidebarLink>
          <SidebarLink to="skills" onClick={toggle}>
            Skills
          </SidebarLink>
          <SidebarLink to="footer" onClick={toggle}>
            Contact
          </SidebarLink>
          <SidebarRouterLink to="/resume" onClick={toggle}>
            Resume
          </SidebarRouterLink>
        </SidebarMenu>
      </SidebarWrapper>
    </SidebarContainer>
  );
};

export default Sidebar;
