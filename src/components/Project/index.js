import React from 'react';
import project1 from '../../images/project 1.png';
import {
    GitHubIcon,
    ReactIcon,
    CssIcon,
    FireBaseIcon,
    JsIcon,
    NodeIcon,
    ProjectContainer,
    ProjectDescription,
    ProjectHeader,
    ProjectIcons,
    ProjectImage,
    ProjectLeftColumn,
    ProjectRigthColumn,
    ProjectSubHeader,
    ProjectGitHubLink,
    ProjectLiveLink,
    ButtonGitIcon,
    ButtonLiveIcon,
    ProjectLinkWrapper,
} from './ProjectComponents';

// https://www.lauracharvey.dev/#blog

const Project = () => {
    return (
        <ProjectContainer reverse={false}>
            <ProjectLeftColumn>
                <ProjectImage src={project1} />
            </ProjectLeftColumn>

            <ProjectRigthColumn>
                <ProjectHeader>Google Search Clone</ProjectHeader>
                <ProjectSubHeader>Solo Project | One Week</ProjectSubHeader>
                <ProjectIcons>
                    <ReactIcon visible={true} />
                    <CssIcon visible={true} />
                    <FireBaseIcon visible={true} />
                    <JsIcon visible={true} />
                    <NodeIcon visible={true} />
                </ProjectIcons>
                <ProjectDescription>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate tempora,
                    ratione asperiores nihil nam illo vel dolores alias pariatur rerum?
                </ProjectDescription>

                <ProjectLinkWrapper>
                    <ProjectGitHubLink href="https://google.com" target="_blank">
                        <ButtonGitIcon />
                        Git Hub
                    </ProjectGitHubLink>

                    <ProjectLiveLink href="https://github.com/vovaushenko/CodeWars" target="_blank">
                        <ButtonLiveIcon />
                        Live Site
                    </ProjectLiveLink>
                </ProjectLinkWrapper>
            </ProjectRigthColumn>
        </ProjectContainer>
    );
};

export default Project;
