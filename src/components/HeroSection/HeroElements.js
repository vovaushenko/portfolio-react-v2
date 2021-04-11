import styled from 'styled-components';
import { MdKeyboardArrowRight, MdArrowForward } from 'react-icons/md';

// ***********Hero Container**************
export const HeroContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 2rem;
  height: 100vh;
  position: relative;
  z-index: 1;
`;

// ***********Hero Bg******************
export const HeroBg = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
`;

// ***********Video Bg******************
export const VideoBg = styled.video`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

// **********Hero Content******************

export const HeroContent = styled.div`
  width: 95%;
  max-width: 600px;
  padding: 1em;
  display: flex;
  flex-direction: column;
  align-items: center;

  background: rgba(11, 156, 49, 0.1);
  border-radius: 20px;
  backdrop-filter: blur(3px);
  border: solid 0px transparent;
  background-clip: padding-box;
  box-shadow: 1px 5px 10px 5px rgba(1, 191, 113, 0.2);
  z-index: 1;
`;

// **********Hero H1******************

export const HeroH1 = styled.h1`
  color: #01bf71;
  font-size: 2.5rem;
  text-align: center;
  letter-spacing: 1.5px;
  text-shadow: -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000,
    1px 1px 0 #000;

  @media screen and (max-width: 768px) {
    font-size: 2rem;
  }

  @media screen and (max-width: 480px) {
    font-size: 1.5rem;
  }
`;

// **********Hero P******************

export const HeroP = styled.p`
  color: #fff;
  opacity: 0.8;
  font-size: 1.5rem;
  text-align: center;
  text-shadow: -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000,
    1px 1px 0 #000;

  @media screen and (max-width: 768px) {
    font-size: 1rem;
  }

  @media screen and (max-width: 480px) {
    font-size: 1rem;
  }
`;
// **********Hero P******************

export const HeroBtnWrapper = styled.div`
  margin-top: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

// **********Hero Icons******************
export const ArrowForward = styled(MdArrowForward)`
  margin-left: 8px;
  font-size: 20px;
`;

export const ArrowRight = styled(MdKeyboardArrowRight)`
  margin-left: 8px;
  font-size: 20px;
`;
export const Flag = styled.img`
  width: 2.5rem;
`;
