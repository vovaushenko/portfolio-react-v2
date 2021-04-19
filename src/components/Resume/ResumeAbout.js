import React, { useEffect, useRef } from 'react';

import styled from 'styled-components';
import { useGlobalContext } from '../../context/context';
import { useOnScreen } from '../../hooks/useOnScreen';
import SocialLinks from '../SocialLinks';

const StyledAbout = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;

  div {
    width: 70%;
    margin-left: 125px;
    padding: 1rem;

    h1 {
      text-transform: uppercase;
      letter-spacing: 2px;
      font-size: 5rem;
      margin-bottom: 0;
      ${({ theme }) => theme.gradient};
    }
    h3 {
      color: ${({ theme }) => theme.mainColor};
      font-size: 2rem;
      letter-spacing: 2px;
      margin-bottom: 0.5rem;
    }

    a {
      text-decoration: none;
      font-size: 2rem;
      cursor: pointer;
      ${({ theme }) => theme.gradient};
    }

    p {
      font-size: 1.125rem;
      margin-top: 1rem;
      margin-bottom: 0;
    }
  }
`;

const ResumeAbout = () => {
  const [setRef, visible] = useOnScreen({ threshold: 0.8 });

  const { setCurrentlyInViewport } = useGlobalContext();

  useEffect(() => {
    if (visible) {
      setCurrentlyInViewport('about');
    }
  });

  return (
    <StyledAbout id="about">
      <div ref={setRef}>
        <h1>Vova Ushenko</h1>
        <h3>Ottawa-Gatineau Metropolitan Area · Canada ·</h3>

        <a href="mailto:volodymyr@ushenko.gmail.com">contact@vovaushenko.com</a>
        <p>
          I am a developer driven by quality of code and software. I
          continuously strive to improve myself and for opportunities to help my
          team grow.
          <br />
          <br />
          I've created full-stack projects with React & Node.js. Have excellent
          knowledge of modern JS stack for building complex user interfaces for
          the web platform.
          <br />
          <br />
          I Have a strong passion to build elegant, performant and friendly user
          experiences. For the last 2 years mostly worked with React stack and
          building products from the ground up, including collecting business
          requirements, composing full-featured UX designs and architecting
          frontends.
          <br />
          <br />A teacher at heart, I had been fortunate enough to pass what
          little I know with many people, thanks to my professional and
          volunteer activity. I have experience teaching software engineering at
          a University and being a mentor.
        </p>
      </div>
      <SocialLinks />
    </StyledAbout>
  );
};

export default ResumeAbout;
