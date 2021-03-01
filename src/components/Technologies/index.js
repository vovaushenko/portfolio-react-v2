import React from 'react';
import js from '../../images/javascript-original.svg';
import html from '../../images/html5-original.svg';
import css from '../../images/css3-original.svg';
import react from '../../images/react-original.svg';
import node from '../../images/nodejs-original.svg';
import redux from '../../images/redux-original.svg';
import npm from '../../images/npm-original-wordmark.svg';
import git from '../../images/git-icon.svg';
import styled from '../../images/styled-components.svg';
import typescript from '../../images/typescript-original.svg';
import github from '../../images/github-original.svg';
import mongo from '../../images/mongodb-original.svg';
import {
  TechCard,
  TechContainer,
  TechHeader,
  TechSubHeader,
  TechWrapper,
  TechIcon,
} from './TechnologiesElements';

const Tech = () => {
  return (
    <>
      <TechContainer>
        <TechHeader>
          Languages I speak, Dev & Design Tools that I particularly enjoy
        </TechHeader>
        <TechWrapper>
          <TechCard
            href="https://www.javascript.com/"
            target="_blank"
            rel="noreferrer"
          >
            <TechIcon src={js} alt="javascript" />
            <TechSubHeader>Javascript</TechSubHeader>
          </TechCard>
          <TechCard
            href="https://developer.mozilla.org/en-US/docs/Web/HTML"
            target="_blank"
            rel="noreferrer"
          >
            <TechIcon src={html} alt="html" />
            <TechSubHeader>HTML</TechSubHeader>
          </TechCard>
          <TechCard
            href="https://developer.mozilla.org/en-US/docs/Web/CSS"
            target="_blank"
            rel="noreferrer"
          >
            <TechIcon src={css} alt="css" />
            <TechSubHeader>CSS</TechSubHeader>
          </TechCard>
          <TechCard
            href="https://reactjs.org/"
            target="_blank"
            rel="noreferrer"
          >
            <TechIcon src={react} alt="react" />
            <TechSubHeader>React</TechSubHeader>
          </TechCard>
          <TechCard
            href="https://redux.js.org/"
            target="_blank"
            rel="noreferrer"
          >
            <TechIcon src={redux} alt="redux" />
            <TechSubHeader>Redux</TechSubHeader>
          </TechCard>
          <TechCard
            href="https://nodejs.org/en/"
            target="_blank"
            rel="noreferrer"
          >
            <TechIcon src={node} alt="NodeJs" />
            <TechSubHeader>Node</TechSubHeader>
          </TechCard>
          <TechCard
            href="https://www.npmjs.com/"
            target="_blank"
            rel="noreferrer"
          >
            <TechIcon src={npm} alt="npm" />
            <TechSubHeader>Npm</TechSubHeader>
          </TechCard>
          <TechCard
            href="https://styled-components.com/"
            target="_blank"
            rel="noreferrer"
          >
            <TechIcon src={styled} alt="styled components" />
            <TechSubHeader>Styled</TechSubHeader>
          </TechCard>
          <TechCard
            href="https://www.typescriptlang.org/"
            target="_blank"
            rel="noreferrer"
          >
            <TechIcon src={typescript} alt="typescript" />
            <TechSubHeader>TypeScript</TechSubHeader>
          </TechCard>
          <TechCard
            href="https://git-scm.com/"
            target="_blank"
            rel="noreferrer"
          >
            <TechIcon src={git} alt="git" />
            <TechSubHeader>Git</TechSubHeader>
          </TechCard>
          <TechCard href="https://github.com/" target="_blank" rel="noreferrer">
            <TechIcon src={github} alt="github" />
            <TechSubHeader>Github</TechSubHeader>
          </TechCard>
          <TechCard
            href="https://www.mongodb.com/"
            target="_blank"
            rel="noreferrer"
          >
            <TechIcon src={mongo} alt="Mongo DB" />
            <TechSubHeader>MongoDB</TechSubHeader>
          </TechCard>
        </TechWrapper>
      </TechContainer>
    </>
  );
};

export default Tech;
