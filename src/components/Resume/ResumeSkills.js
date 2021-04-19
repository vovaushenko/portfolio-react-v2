import styled from 'styled-components';
import ReusableContainer from './ReusableContainer';
import ReusableSectionHeader from './ReusableSectionHeader';
import ReusableSectionSubHeader from './ReusableSectionSubHeader';
import reactLogo from '../../images/react-original.svg';
import javascriptLogo from '../../images/javascript-original.svg';
import htmlLogo from '../../images/html5-original.svg';
import cssLogo from '../../images/css3-original.svg';
import nodeLogo from '../../images/nodejs-original.svg';
import mongoLogo from '../../images/mongodb-original.svg';
import pythonLogo from '../../images/python-original.svg';
import mySqlLogo from '../../images/mysql-original.svg';
import { useOnScreen } from '../../hooks/useOnScreen';
import { useGlobalContext } from '../../context/context';
import { useEffect } from 'react';

const StyledIcons = styled.div`
  display: flex;
  margin-bottom: 1rem;

  img {
    margin-left: 1rem;
    width: 3rem;
  }
  img:first-child {
    margin-left: 0;
  }
  .reactLogo {
    animation-name: spin;
    animation-duration: 8000ms;
    animation-iteration-count: infinite;
    animation-timing-function: linear;
  }

  @keyframes spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
`;

const StyledSkillPair = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  text-align: center;
  border-bottom: 2px solid ${({ theme }) => theme.mainColor};
  margin-bottom: 0.5rem;
  h4 {
    margin-bottom: 0;
    letter-spacing: 2px;
  }
  p {
    margin-bottom: 0;
  }
`;

const ResumeSkills = () => {
  const [setRef, visible] = useOnScreen({ threshold: 0.8 });
  const { setCurrentlyInViewport } = useGlobalContext();

  useEffect(() => {
    if (visible) {
      setCurrentlyInViewport('skills');
    }
  });

  return (
    <ReusableContainer id="skills">
      <ReusableSectionHeader>Skills</ReusableSectionHeader>

      {/* Frontend Section */}
      <ReusableSectionSubHeader>Frontend</ReusableSectionSubHeader>
      <StyledIcons>
        <img className="reactLogo" src={reactLogo} alt="React" ref={setRef} />
        <img src={javascriptLogo} alt="Javascript" />
        <img src={htmlLogo} alt="Javascript" />
        <img src={cssLogo} alt="Javascript" />
      </StyledIcons>

      <StyledSkillPair>
        <h4> • Languages</h4>
        <p>Javascript, Typescript</p>
      </StyledSkillPair>
      <StyledSkillPair>
        <h4> • Frameworks</h4>
        <p>React, Next.js</p>
      </StyledSkillPair>
      <StyledSkillPair>
        <h4> • Core</h4>
        <p>HTML & CSS</p>
      </StyledSkillPair>
      <StyledSkillPair>
        <h4> • Libraries</h4>
        <p>
          Redux, Webpack, Babel, styled-components, Semantic-UI, Bootstrap, Sass
        </p>
      </StyledSkillPair>
      <StyledSkillPair>
        <h4> • Testing</h4>
        <p>TDD with Mocha, Jest and Enzyme</p>
      </StyledSkillPair>

      {/* Backend section */}
      <ReusableSectionSubHeader marginTop="2rem">
        Backend
      </ReusableSectionSubHeader>
      <StyledIcons>
        <img src={nodeLogo} alt="React" />
        <img src={pythonLogo} alt="Javascript" />
        <img src={mongoLogo} alt="Javascript" />
        <img src={mySqlLogo} alt="Javascript" />
      </StyledIcons>

      <StyledSkillPair>
        <h4> • Languages</h4>
        <p>Node.js(Javascript/Typescript), Python</p>
      </StyledSkillPair>

      <StyledSkillPair>
        <h4> • Frameworks</h4>
        <p>Express, Next.js</p>
      </StyledSkillPair>

      <StyledSkillPair>
        <h4> • Web</h4>
        <p>REST, JSON, GraphQL</p>
      </StyledSkillPair>

      <StyledSkillPair>
        <h4> • Databases</h4>
        <p>MongoDB, MySQL</p>
      </StyledSkillPair>

      <StyledSkillPair>
        <h4> • Deployment</h4>
        <p>Netlify, Heroku, AWS</p>
      </StyledSkillPair>

      <StyledSkillPair>
        <h4> • Tools</h4>
        <p>VSCode, Atom, Vim</p>
      </StyledSkillPair>

      <StyledSkillPair>
        <h4> • Code Management</h4>
        <p>Git, GitHub, GitLab</p>
      </StyledSkillPair>
    </ReusableContainer>
  );
};

export default ResumeSkills;
