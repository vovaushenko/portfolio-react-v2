import React from 'react';
import {
    CloseIcon,
    Icon,
    SidebarContainer,
    SidebarLink,
    SidebarMenu,
    SidebarRoute,
    SidebarWrapper,
    SideBtnWrap,
} from './SidebarElements';

const Sidebar = () => {
    return (
        <SidebarContainer>
            <Icon>
                <CloseIcon />
            </Icon>

            <SidebarWrapper>
                <SidebarMenu>
                    <SidebarLink to="about">About</SidebarLink>
                    <SidebarLink to="discover">Portfolio</SidebarLink>
                    <SidebarLink to="services">Skills</SidebarLink>
                    <SidebarLink to="signup">Contact</SidebarLink>
                </SidebarMenu>

                <SideBtnWrap>
                    <SidebarRoute to="/contact">Contact</SidebarRoute>
                </SideBtnWrap>
            </SidebarWrapper>
        </SidebarContainer>
    );
};

export default Sidebar;
