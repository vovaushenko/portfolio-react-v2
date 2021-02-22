import styled from 'styled-components';

import { FaReact, FaCss3Alt, FaNodeJs, FaGithub } from 'react-icons/fa';
import { SiFirebase, SiJavascript, SiRedux, SiMongodb } from 'react-icons/si';
import { FiMonitor } from 'react-icons/fi';
// *************** Project Wrap ******************
export const ProjectWrap = styled.div`
  display: flex;
  flex-direction: column;
  width: 80%;
  margin: 0 auto 2rem;
  border: 2px solid #01bf71;
  border-radius: 10px;

  :hover {
    border-color: #01bf71;
    box-shadow: 0 0 10px #01bf71;
    transform: translateY(-1px);
  }

  @media screen and (max-width: 768px) {
    width: 90% !important;
  }

  @media screen and (max-width: 500px) {
    width: 90% !important;
  }
`;

// ************ Project Dots ******************
export const ProjectDotsContainer = styled.div`
  flex: 0.2;
  border-bottom: 2px solid #01bf71;
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
  color: ${({ lightmode }) => (lightmode ? '#010606' : '#01bf71')};
  letter-spacing: 1.1px;
  font-size: 2rem;
  margin-top: 1rem;
`;
export const ProjectSubHeader = styled.p`
  color: ${({ lightmode }) => (lightmode ? '#01bf71' : '#fff')};
  margin: 1rem 0;
  letter-spacing: 1.1px;
`;
export const ProjectDescription = styled.p`
  color: ${({ lightmode }) => (lightmode ? '#010606' : '#f9f9f9')};
  width: 90%;
  margin: 1rem 0;
  font-size: 14px;
  letter-spacing: 1.1px;

  @media screen and (max-width: 500px) {
    font-size: 12px;
  }
`;
// *************** Icons  Container ******************
export const ProjectIcons = styled.div`
  display: flex;
  width: 40%;
  justify-content: space-evenly;
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
  white-space: nowrap;
  width: 7rem;
  font-size: 1rem;
  font-weight: 700;

  color: ${({ lightmode }) => (lightmode ? '#f9f9f9' : '#010606')};
  background-color: ${({ lightmode }) => (lightmode ? '#010606' : '#01bf71')};

  border-radius: 50px;
  text-decoration: none;
  margin: 1rem;
  padding: 0.5em;
  transition: all 0.2s ease-in-out;

  &:hover {
    transition: all 0.2s ease-in-out;
    background-color: ${({ lightmode }) => (lightmode ? '#01bf71' : '#fff')};
  }
`;
export const ProjectLiveLink = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  white-space: nowrap;
  width: 7rem;
  font-size: 1rem;
  font-weight: 700;

  color: ${({ lightmode }) => (lightmode ? '#f9f9f9' : '#010606')};
  background-color: ${({ lightmode }) => (lightmode ? '#010606' : '#01bf71')};

  border-radius: 50px;
  text-decoration: none;
  margin: 1rem;
  padding: 0.5em;
  transition: all 0.2s ease-in-out;

  &:hover {
    transition: all 0.2s ease-in-out;
    background-color: ${({ lightmode }) => (lightmode ? '#01bf71' : '#fff')};
  }
`;

// *************** ICONS ******************

export const ReactIcon = styled(FaReact)`
  display: ${({ visible }) => (visible ? 'inline-block' : 'none')};
  margin-left: 8px;
  font-size: 25px;
  color: ${({ lightmode }) => (lightmode ? '#010606' : '#01bf71')};
`;
export const CssIcon = styled(FaCss3Alt)`
  display: ${({ visible }) => (visible ? 'inline-block' : 'none')};
  margin-left: 8px;
  font-size: 25px;
  color: ${({ lightmode }) => (lightmode ? '#010606' : '#01bf71')};
`;
export const FireBaseIcon = styled(SiFirebase)`
  display: ${({ visible }) => (visible ? 'inline-block' : 'none')};
  margin-left: 8px;
  font-size: 25px;
  color: ${({ lightmode }) => (lightmode ? '#010606' : '#01bf71')};
`;
export const JsIcon = styled(SiJavascript)`
  display: ${({ visible }) => (visible ? 'inline-block' : 'none')};
  margin-left: 8px;
  font-size: 25px;
  color: ${({ lightmode }) => (lightmode ? '#010606' : '#01bf71')};
`;
export const NodeIcon = styled(FaNodeJs)`
  display: ${({ visible }) => (visible ? 'inline-block' : 'none')};
  margin-left: 8px;
  font-size: 25px;
  color: ${({ lightmode }) => (lightmode ? '#010606' : '#01bf71')};
`;
export const ReduxIcon = styled(SiRedux)`
  display: ${({ visible }) => (visible ? 'inline-block' : 'none')};
  margin-left: 8px;
  font-size: 25px;
  color: ${({ lightmode }) => (lightmode ? '#010606' : '#01bf71')};
`;
export const MongoIcon = styled(SiMongodb)`
  display: ${({ visible }) => (visible ? 'inline-block' : 'none')};
  margin-left: 8px;
  font-size: 25px;
  color: ${({ lightmode }) => (lightmode ? '#010606' : '#01bf71')};
`;
// *************** ButtonIcon ******************
export const ButtonGitIcon = styled(FaGithub)`
  margin-right: 10px;
  font-size: 20px;

  color: ${({ lightmode }) => (lightmode ? '#f9f9f9' : '#000')};
`;
export const ButtonLiveIcon = styled(FiMonitor)`
  margin-right: 10px;
  font-size: 20px;
  color: ${({ lightmode }) => (lightmode ? '#f9f9f9' : '#000')};
`;
