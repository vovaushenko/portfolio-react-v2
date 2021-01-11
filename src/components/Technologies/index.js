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
            <TechContainer id="skills">
                <TechHeader>
                    Without establishing an order of preferences, these are some
                    of the technologies I enjoy working with
                </TechHeader>
                <TechWrapper>
                    <TechCard>
                        <TechIcon src={js} />
                        <TechSubHeader>Javascript</TechSubHeader>
                    </TechCard>
                    <TechCard>
                        <TechIcon src={html} />
                        <TechSubHeader>HTML</TechSubHeader>
                    </TechCard>
                    <TechCard>
                        <TechIcon src={css} />
                        <TechSubHeader>CSS</TechSubHeader>
                    </TechCard>
                    <TechCard>
                        <TechIcon src={react} />
                        <TechSubHeader>React</TechSubHeader>
                    </TechCard>
                    <TechCard>
                        <TechIcon src={redux} />
                        <TechSubHeader>Redux</TechSubHeader>
                    </TechCard>
                    <TechCard>
                        <TechIcon src={node} />
                        <TechSubHeader>Node</TechSubHeader>
                    </TechCard>
                    <TechCard>
                        <TechIcon src={npm} />
                        <TechSubHeader>Npm</TechSubHeader>
                    </TechCard>
                    <TechCard>
                        <TechIcon src={styled} />
                        <TechSubHeader>Styled</TechSubHeader>
                    </TechCard>
                    <TechCard>
                        <TechIcon src={typescript} />
                        <TechSubHeader>TypeScript</TechSubHeader>
                    </TechCard>
                    <TechCard>
                        <TechIcon src={git} />
                        <TechSubHeader>Git</TechSubHeader>
                    </TechCard>
                    <TechCard>
                        <TechIcon src={github} />
                        <TechSubHeader>Github</TechSubHeader>
                    </TechCard>
                    <TechCard>
                        <TechIcon src={mongo} />
                        <TechSubHeader>MongoDB</TechSubHeader>
                    </TechCard>
                </TechWrapper>
            </TechContainer>
        </>
    );
};

export default Tech;
