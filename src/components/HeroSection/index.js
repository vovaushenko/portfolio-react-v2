import React, { useState } from 'react';

import {
  ArrowForward,
  ArrowRight,
  HeroBg,
  HeroBtnWrapper,
  HeroContainer,
  HeroContent,
  HeroH1,
  HeroP,
  VideoBg,
} from './HeroElements';
import Video from '../../video/video.mp4';
import { Button } from '../ButtonElement';

const HeroSection = () => {
  const [hover, setHover] = useState(false);

  const onHover = () => {
    setHover(!hover);
  };
  return (
    <HeroContainer id="home">
      <HeroBg>
        <VideoBg autoPlay loop muted src={Video} type="video/mp4" />
      </HeroBg>
      <HeroContent>
        <HeroH1>Hi there! 👋</HeroH1>
        <HeroP>
          Glad to meet you! I'm Vova, an interactive web-developer currently
          based in Ottawa
        </HeroP>

        <HeroBtnWrapper>
          <Button
            to="skills"
            onMouseEnter={onHover}
            onMouseLeave={onHover}
            primary={+false}
            dark={+false}
            smooth={true}
            duration={1000}
            spy={true}
            exact="true"
            offset={-80}
          >
            Get Started {hover ? <ArrowForward /> : <ArrowRight />}
          </Button>
        </HeroBtnWrapper>
      </HeroContent>
    </HeroContainer>
  );
};

export default HeroSection;
