import React from 'react';
import { animateScroll as scroll } from 'react-scroll';
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter, FaYoutube } from 'react-icons/fa';
import {
    FooterContainer,
    FooterLink,
    FooterLinkItems,
    FooterLinksContainer,
    FooterLinksWrapper,
    FooterLinkTitle,
    FooterWrap,
    SocialIconLink,
    SocialIcons,
    SocialLogo,
    SocialMedia,
    SocialMediaWrap,
    WebsiteRight,
} from './FooterElements';

const Footer = () => {
    const toggleHome = () => {
        scroll.scrollToTop();
    };
    return (
        <FooterContainer>
            <FooterWrap>
                <FooterLinksContainer>
                    <FooterLinksWrapper>
                        <FooterLinkItems>
                            <FooterLinkTitle>Feel free to contact</FooterLinkTitle>
                            <FooterLink to="/signin">LinkedIn</FooterLink>
                            <FooterLink to="/signin">Twitter</FooterLink>
                            <FooterLink to="/signin">Github</FooterLink>
                            <FooterLink to="/signin">Codewars</FooterLink>
                            <FooterLink to="/signin">Facebook</FooterLink>
                        </FooterLinkItems>
                        <FooterLinkItems>
                            <FooterLinkTitle>Feel free to contact</FooterLinkTitle>
                            <FooterLink to="/signin">LinkedIn</FooterLink>
                            <FooterLink to="/signin">Twitter</FooterLink>
                            <FooterLink to="/signin">Github</FooterLink>
                            <FooterLink to="/signin">Codewars</FooterLink>
                            <FooterLink to="/signin">Facebook</FooterLink>
                        </FooterLinkItems>
                    </FooterLinksWrapper>

                    <FooterLinksWrapper>
                        <FooterLinkItems>
                            <FooterLinkTitle>Feel free to contact</FooterLinkTitle>
                            <FooterLink to="/signin">LinkedIn</FooterLink>
                            <FooterLink to="/signin">Twitter</FooterLink>
                            <FooterLink to="/signin">Github</FooterLink>
                            <FooterLink to="/signin">Codewars</FooterLink>
                            <FooterLink to="/signin">Facebook</FooterLink>
                        </FooterLinkItems>
                        <FooterLinkItems>
                            <FooterLinkTitle>Feel free to contact</FooterLinkTitle>
                            <FooterLink to="/signin">LinkedIn</FooterLink>
                            <FooterLink to="/signin">Twitter</FooterLink>
                            <FooterLink to="/signin">Github</FooterLink>
                            <FooterLink to="/signin">Codewars</FooterLink>
                            <FooterLink to="/signin">Facebook</FooterLink>
                        </FooterLinkItems>
                    </FooterLinksWrapper>
                </FooterLinksContainer>
                <SocialMedia>
                    <SocialMediaWrap>
                        <SocialLogo to="/" onClick={toggleHome}>
                            Logo
                        </SocialLogo>
                        <WebsiteRight>
                            Vova Ushenko 🤝 {new Date().getFullYear()} All Rights Reserved
                        </WebsiteRight>
                        <SocialIcons>
                            <SocialIconLink href="/" target="_blank" aria-label="Instagram">
                                <FaInstagram />
                            </SocialIconLink>
                            <SocialIconLink href="/" target="_blank" aria-label="Facebook">
                                <FaFacebook />
                            </SocialIconLink>
                            <SocialIconLink href="/" target="_blank" aria-label="YouTube">
                                <FaYoutube />
                            </SocialIconLink>
                            <SocialIconLink
                                href="//www.twitter.com/Vova79605562"
                                target="_blank"
                                aria-label="Twitter"
                            >
                                <FaTwitter />
                            </SocialIconLink>
                            <SocialIconLink href="/" target="_blank" aria-label="Linkedin">
                                <FaLinkedin />
                            </SocialIconLink>
                        </SocialIcons>
                    </SocialMediaWrap>
                </SocialMedia>
            </FooterWrap>
        </FooterContainer>
    );
};

export default Footer;
