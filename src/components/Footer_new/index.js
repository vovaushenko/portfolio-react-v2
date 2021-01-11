import React from 'react';
import { animateScroll as scroll } from 'react-scroll';
import {
    FooterContainer,
    SocialIconLink,
    SocialLinksWrapper,
    ToTop,
    ToTopWrapper,
} from './FooterElements';

import {
    FaFacebook,
    FaInstagram,
    FaLinkedin,
    FaTwitter,
    FaYoutube,
} from 'react-icons/fa';

import { AiOutlineToTop } from 'react-icons/ai';

const Footer_new = () => {
    const toggleHome = () => {
        scroll.scrollToTop();
    };
    return (
        <FooterContainer>
            <SocialLinksWrapper>
                <SocialIconLink
                    href="//www.twitter.com/Vova79605562"
                    target="_blank"
                >
                    <FaFacebook />
                </SocialIconLink>
                <SocialIconLink
                    href="//www.twitter.com/Vova79605562"
                    target="_blank"
                >
                    <FaInstagram />
                </SocialIconLink>
                <SocialIconLink
                    href="//www.twitter.com/Vova79605562"
                    target="_blank"
                >
                    <FaLinkedin />
                </SocialIconLink>
                <SocialIconLink
                    href="//www.twitter.com/Vova79605562"
                    target="_blank"
                >
                    <FaTwitter />
                </SocialIconLink>
                <SocialIconLink
                    href="//www.twitter.com/Vova79605562"
                    target="_blank"
                >
                    <FaYoutube />
                </SocialIconLink>
            </SocialLinksWrapper>
            <ToTopWrapper>
                <ToTop to="/" onClick={toggleHome}>
                    <AiOutlineToTop />
                </ToTop>
            </ToTopWrapper>
        </FooterContainer>
    );
};

export default Footer_new;
