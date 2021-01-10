import styled from 'styled-components';

import { FaReact, FaCss3Alt, FaNodeJs, FaGithub } from 'react-icons/fa';
import { SiFirebase, SiJavascript } from 'react-icons/si';
import { FiMonitor } from 'react-icons/fi';

// // *************** CONTAINER ******************

export const ProjectContainer = styled.div`
    display: flex;
    flex-direction: ${({ reverse }) => (reverse ? 'row-reverse' : 'row')};
    max-width: 1280px;
    max-height: 1100px;
    margin: auto;
    padding: 60px 0;

    justify-content: center;
    align-items: center;
    background: #010606;

    @media (max-width: 800px) {
        flex-direction: column;
        align-items: center;
    }

    @media (max-width: 500px) {
        flex-direction: column;
        align-items: center;
    }
`;

// *************** LEFT COLUMN ******************
export const ProjectLeftColumn = styled.div`
    display: flex;
    flex: 0.5;

    background-color: #010606;

    justify-content: center;
    align-items: center;
`;
export const ProjectImage = styled.img`
    width: 90%;
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

    background-color: #010606;
`;

// *************** Typography ******************

export const ProjectHeader = styled.h2`
    color: #01bf71;
    letter-spacing: 1.4px;
    padding-top: 15px;
    font-size: 30px;
`;
export const ProjectSubHeader = styled.p`
    color: #fff;
    padding: 15px;
    letter-spacing: 1.3px;
`;
export const ProjectDescription = styled.p`
    color: #fff;
    padding: 20px;
    margin: 10px;
    font-size: 14px;
    letter-spacing: 1.1px;
    max-width: 600px;

    @media screen and (max-width: 768px) {
        font-size: 12px;
    }

    @media screen and (max-width: 480px) {
        font-size: 12px;
    }
`;
// *************** Icons  Container ******************
export const ProjectIcons = styled.div`
    display: flex;
    padding: 5px;
    width: 40%;
    justify-content: space-between;
`;

// *************** Link WRAPPER ******************

export const ProjectLinkWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 50%;

    @media screen and (max-width: 480px) {
        width: 75%;
    }
`;

// *************** Links ******************
export const ProjectGitHubLink = styled.a`
    display: flex;
    color: #000;
    background-color: #01bf71;
    border-radius: 50px;
    text-decoration: none;

    padding: 5px;

    &:hover {
        background-color: #fff;
    }
`;
export const ProjectLiveLink = styled.a`
    display: flex;
    
    color: #000;
    background-color: #01bf71;
    border-radius: 50px;
    text-decoration: none;

    padding: 5px;
    &:hover {
        background-color: #fff;
    }
`;

// *************** ICONS ******************

export const ReactIcon = styled(FaReact)`
    display: ${({ visible }) => (visible ? 'inline-block' : 'none')};
    margin-left: 8px;
    font-size: 25px;
    color: #01bf71;
`;
export const CssIcon = styled(FaCss3Alt)`
    display: ${({ visible }) => (visible ? 'inline-block' : 'none')};
    margin-left: 8px;
    font-size: 25px;
    color: #01bf71;
`;
export const FireBaseIcon = styled(SiFirebase)`
    display: ${({ visible }) => (visible ? 'inline-block' : 'none')};
    margin-left: 8px;
    font-size: 25px;
    color: #01bf71;
`;
export const JsIcon = styled(SiJavascript)`
    display: ${({ visible }) => (visible ? 'inline-block' : 'none')};
    margin-left: 8px;
    font-size: 25px;
    color: #01bf71;
`;
export const NodeIcon = styled(FaNodeJs)`
    display: ${({ visible }) => (visible ? 'inline-block' : 'none')};
    margin-left: 8px;
    font-size: 25px;
    color: #01bf71;
`;
// *************** ButtonIcon ******************
export const ButtonGitIcon = styled(FaGithub)`
    margin-right: 20px;
    font-size: 20px;
    color: #000;
`;
export const ButtonLiveIcon = styled(FiMonitor)`
    margin-right: 20px;
    font-size: 20px;
    color: #000;
`;
