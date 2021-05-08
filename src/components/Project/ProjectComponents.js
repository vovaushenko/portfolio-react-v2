import styled from 'styled-components';

import { FaReact, FaCss3Alt, FaNodeJs, FaGithub } from 'react-icons/fa';
import {
  SiFirebase,
  SiJavascript,
  SiRedux,
  SiMongodb,
  SiStyledComponents,
  SiGoogle,
  SiTypescript,
} from 'react-icons/si';
import { FiMonitor } from 'react-icons/fi';
// *************** Project Wrap ******************
export const ProjectWrap = styled.section`
  display: flex;
  flex-direction: column;
  width: 80%;
  margin: 0 auto 2rem;
  border: 2px solid;
  border-color: ${({ theme }) => theme.mainColor};
  border-radius: 10px;

  :hover {
    transform: translateY(-1px);
  }

  @media screen and (max-width: 768px) {
    width: 90%;
  }

  @media screen and (max-width: 500px) {
    width: 90%;
  }
`;

// ************ Project Dots ******************
export const ProjectDotsContainer = styled.div`
  flex: 0.2;
  border-bottom: 2px solid;
  border-color: ${({ theme }) => theme.mainColor};
  display: flex;
  padding: 5px;
`;

export const ProjectDot = styled.div`
  background-color: ${(props) => props.color};
  height: 15px;
  width: 15px;
  border-radius: 50%;
  margin: 5px;
  -webkit-box-shadow: -1px 1px 3px -1px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: -1px 1px 3px -1px rgba(0, 0, 0, 0.75);
  box-shadow: -1px 1px 3px -1px rgba(0, 0, 0, 0.75);
`;

// *************** CONTAINER ******************

export const ProjectContainer = styled.div`
  flex: 0.8;
  display: flex;
  flex-direction: ${({ reverse }) => (reverse ? 'row-reverse' : 'row')};
  padding: 2rem 0;
  align-items: center;

  @media (max-width: 800px) {
    flex-direction: column;
  }

  @media (max-width: 500px) {
    flex-direction: column;
  }
`;

// *************** LEFT COLUMN ******************
export const ProjectLeftColumn = styled.div`
  display: flex;
  flex: 0.5;
  justify-content: center;
  align-items: center;
`;
export const ProjectImage = styled.img`
  width: 90%;
`;

// *************** RIGHT COLUMN ******************

export const ProjectRigthColumn = styled.div`
  display: flex;
  flex-direction: column;
  flex: 0.5;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

// *************** Typography ******************

export const ProjectHeader = styled.h2`
  ${({ theme }) => theme.gradient};
  letter-spacing: 1.1px;
  font-size: 2rem;
`;
export const ProjectSubHeader = styled.p`
  @media screen and (max-width: 500px) {
    margin-bottom: 0.5rem;
  }
`;
export const ProjectDescription = styled.p`
  width: 90%;
  text-align: justify;
  @media screen and (max-width: 500px) {
    font-size: 0.75rem;
  }
`;
// *************** Icons  Container ******************
export const ProjectIcons = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 1rem;

  @media screen and (max-width: 500px) {
    margin-bottom: 0.5rem;
  }
`;

// *************** Link WRAPPER ******************

export const ProjectLinkWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 75%;
`;

// *************** Links ******************
export const ProjectGitHubLink = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({ theme }) => theme.mainColor};
  background: transparent;
  max-width: 120px;
  font-weight: 700;
  border: 2px solid ${({ theme }) => theme.mainColor};
  border-radius: 2rem;
  text-decoration: none;
  margin: 0 1rem;
  padding: 0.5em 1em;
  transition: all 0.3s linear;

  &:hover {
    color: #fff;
    background-color: ${({ theme }) => theme.mainColor};
    .icon {
      color: #fff;
    }
  }
`;

// *************** ICONS ******************

export const ReactIcon = styled(FaReact)`
  display: ${({ visible }) => (visible ? 'inline-block' : 'none')};
  margin-left: 8px;
  font-size: 25px;
  color: ${({ theme }) => theme.mainColor};
`;
export const CssIcon = styled(FaCss3Alt)`
  display: ${({ visible }) => (visible ? 'inline-block' : 'none')};
  margin-left: 8px;
  font-size: 25px;
  color: ${({ theme }) => theme.mainColor};
`;
export const FireBaseIcon = styled(SiFirebase)`
  display: ${({ visible }) => (visible ? 'inline-block' : 'none')};
  margin-left: 8px;
  font-size: 25px;
  color: ${({ theme }) => theme.mainColor};
`;
export const JsIcon = styled(SiJavascript)`
  display: ${({ visible }) => (visible ? 'inline-block' : 'none')};
  margin-left: 8px;
  font-size: 25px;
  color: ${({ theme }) => theme.mainColor};
`;
export const NodeIcon = styled(FaNodeJs)`
  display: ${({ visible }) => (visible ? 'inline-block' : 'none')};
  margin-left: 8px;
  font-size: 25px;
  color: ${({ theme }) => theme.mainColor};
`;
export const ReduxIcon = styled(SiRedux)`
  display: ${({ visible }) => (visible ? 'inline-block' : 'none')};
  margin-left: 8px;
  font-size: 25px;
  color: ${({ theme }) => theme.mainColor};
`;
export const MongoIcon = styled(SiMongodb)`
  display: ${({ visible }) => (visible ? 'inline-block' : 'none')};
  margin-left: 8px;
  font-size: 25px;
  color: ${({ theme }) => theme.mainColor};
`;
export const TSicon = styled(SiTypescript)`
  display: ${({ visible }) => (visible ? 'inline-block' : 'none')};
  margin-left: 8px;
  font-size: 25px;
  color: ${({ theme }) => theme.mainColor};
`;
export const GoogleIcon = styled(SiGoogle)`
  display: ${({ visible }) => (visible ? 'inline-block' : 'none')};
  margin-left: 8px;
  font-size: 24px;
  color: ${({ theme }) => theme.mainColor};
`;
export const StyledComponentsIcon = styled(SiStyledComponents)`
  display: ${({ visible }) => (visible ? 'inline-block' : 'none')};
  margin-left: 8px;
  font-size: 45px;
  color: ${({ theme }) => theme.mainColor};
`;
// *************** ButtonIcon ******************
export const ButtonGitIcon = styled(FaGithub)`
  margin-right: 5px;
  font-size: 1rem;

  color: ${({ theme }) => theme.mainColor};
`;
export const ButtonLiveIcon = styled(FiMonitor)`
  margin-right: 5px;
  font-size: 1rem;
  color: ${({ theme }) => theme.mainColor};
`;
