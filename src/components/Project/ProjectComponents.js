import styled from 'styled-components';

import { FaReact, FaCss3Alt, FaNodeJs, FaGithub } from 'react-icons/fa';
import { SiFirebase, SiJavascript } from 'react-icons/si';
import { FiMonitor } from 'react-icons/fi';

// // *************** CONTAINER ******************

export const ProjectContainer = styled.div`
    display: flex;
    flex-direction: ${({ reverse }) => (reverse ? 'row-reverse' : 'row')};

    height: 560px;
    width: 100%;

    margin-right: auto;
    margin-left: auto;
    padding: 0 24px;
    justify-content: center;
    background: #010606;
`;

// *************** LEFT COLUMN ******************
export const ProjectLeftColumn = styled.div`
    display: flex;
    flex: 0.5;
    max-width: 600px;
    background-color: #010606;
    border: 1px solid red;
    border-radius: 10px;
    justify-content: center;
    align-items: center;
`;
export const ProjectImage = styled.img`
    width: 100%;
    margin: 0 0 10px 0;
`;

// *************** RIGHT COLUMN ******************

export const ProjectRigthColumn = styled.div`
    display: flex;
    flex-direction: column;
    flex: 0.5;
    justify-content: center;
    text-align: center;
    align-items: center;

    max-width: 600px;
    background-color: #010606;
    border: 1px solid red;
    border-radius: 10px;
`;
export const ProjectHeader = styled.h2``;
export const ProjectSubHeader = styled.h4``;
export const ProjectIcons = styled.div``;
export const ProjectIcon = styled.img`
    height: 30px;
    width: 30px;
`;
export const ProjectDescription = styled.p`
    margin-top: 35px;
    font-size: 18px;
    line-height: 24px;
`;

// *************** Link WRAPPER ******************

export const ProjectLinkWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 240px;
`;

// *************** Links ******************
export const ProjectGitHubLink = styled.a`
    text-decoration: none;
`;
export const ProjectLiveLink = styled.a`
    text-decoration: none;
`;

// *************** ICONS ******************

export const ReactIcon = styled(FaReact)`
    display: ${({ visible }) => (visible ? 'inline-block' : 'none')};
    margin-left: 8px;
    font-size: 20px;
`;
export const CssIcon = styled(FaCss3Alt)`
    display: ${({ visible }) => (visible ? 'inline-block' : 'none')};
    margin-left: 8px;
    font-size: 20px;
`;
export const FireBaseIcon = styled(SiFirebase)`
    display: ${({ visible }) => (visible ? 'inline-block' : 'none')};
    margin-left: 8px;
    font-size: 20px;
`;
export const JsIcon = styled(SiJavascript)`
    display: ${({ visible }) => (visible ? 'inline-block' : 'none')};
    margin-left: 8px;
    font-size: 20px;
`;
export const NodeIcon = styled(FaNodeJs)`
    display: ${({ visible }) => (visible ? 'inline-block' : 'none')};
    margin-left: 8px;
    font-size: 20px;
`;
// *************** ButtonIcon ******************
export const ButtonGitIcon = styled(FaGithub)`
    margin-right: 15px;
    font-size: 20px;
    color: #fff;
`;
export const ButtonLiveIcon = styled(FiMonitor)`
    margin-right: 15px;
    font-size: 20px;
    color: #fff;
`;
