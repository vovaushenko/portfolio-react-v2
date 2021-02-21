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
          <TechCard href="https://www.javascript.com/" target="_blank">
            <TechIcon src={js} />
            <TechSubHeader>Javascript</TechSubHeader>
          </TechCard>
          <TechCard
            href="https://developer.mozilla.org/en-US/docs/Web/HTML"
            target="_blank"
          >
            <TechIcon src={html} />
            <TechSubHeader>HTML</TechSubHeader>
          </TechCard>
          <TechCard
            href="https://developer.mozilla.org/en-US/docs/Web/CSS"
            target="_blank"
          >
            <TechIcon src={css} />
            <TechSubHeader>CSS</TechSubHeader>
          </TechCard>
          <TechCard href="https://reactjs.org/" target="_blank">
            <TechIcon src={react} />
            <TechSubHeader>React</TechSubHeader>
          </TechCard>
          <TechCard href="https://redux.js.org/" target="_blank">
            <TechIcon src={redux} />
            <TechSubHeader>Redux</TechSubHeader>
          </TechCard>
          <TechCard href="https://nodejs.org/en/" target="_blank">
            <TechIcon src={node} />
            <TechSubHeader>Node</TechSubHeader>
          </TechCard>
          <TechCard href="https://www.npmjs.com/" target="_blank">
            <TechIcon src={npm} />
            <TechSubHeader>Npm</TechSubHeader>
          </TechCard>
          <TechCard href="https://styled-components.com/" target="_blank">
            <TechIcon src={styled} />
            <TechSubHeader>Styled</TechSubHeader>
          </TechCard>
          <TechCard href="https://www.typescriptlang.org/" target="_blank">
            <TechIcon src={typescript} />
            <TechSubHeader>TypeScript</TechSubHeader>
          </TechCard>
          <TechCard href="https://git-scm.com/" target="_blank">
            <TechIcon src={git} />
            <TechSubHeader>Git</TechSubHeader>
          </TechCard>
          <TechCard href="https://github.com/" target="_blank">
            <TechIcon src={github} />
            <TechSubHeader>Github</TechSubHeader>
          </TechCard>
          <TechCard href="https://www.mongodb.com/" target="_blank">
            <TechIcon src={mongo} />
            <TechSubHeader>MongoDB</TechSubHeader>
          </TechCard>
        </TechWrapper>
      </TechContainer>
    </>
  );
};

export default Tech;
