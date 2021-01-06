import React from 'react';
import { HeroBg, HeroContainer, VideoBg } from './HeroElements';
import Video from '../../video/video.mp4';

const HeroSection = () => {
    return (
        <HeroContainer id="home">
            <HeroBg>
                <VideoBg autoPlay loop muted src={Video} type="video/mp4" />
            </HeroBg>
        </HeroContainer>
    );
};

export default HeroSection;
