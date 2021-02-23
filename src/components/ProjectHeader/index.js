import React from 'react';
import styled from 'styled-components';

const ProjectSection = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  text-align: center;
  width: 90%;
  margin: 0 auto;
`;

const ProjectHeader = styled.h2`
  font-size: 2.5rem;
  letter-spacing: 1.1px;
  color: #01bf71;
  margin-bottom: 1rem;

  @media screen and (max-width: 768px) {
    font-size: 2rem;
  }
`;

const ProjectDescription = styled.p`
  letter-spacing: 1.1px;
  font-size: 1.5rem;
  margin-bottom: 2rem;

  @media screen and (max-width: 768px) {
    font-size: 1rem;
  }
`;

const index = () => {
  return (
    <>
      <ProjectSection id="portfolio">
        <ProjectHeader>My Recent Work</ProjectHeader>
        <ProjectDescription>
          Here are a few cool projects I've worked on recently
        </ProjectDescription>
      </ProjectSection>
    </>
  );
};

export default index;
