import React from 'react';
import { Nav, NavbarContainer, NavLogo } from './NabvarElements';

const Navbar = () => {
    return (
        <>
            <Nav>
                <NavbarContainer>
                    <NavLogo to="/">Logo</NavLogo>
                    <h1>Hey</h1>
                </NavbarContainer>
            </Nav>
        </>
    );
};

export default Navbar;
