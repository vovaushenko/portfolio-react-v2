import React from 'react';

import {
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
    ProjectWrap,
    ProjectDotsContainer,
    ProjectDot,
} from './ProjectComponents';

// https://www.lauracharvey.dev/

const Project = ({
    reverse,
    lightMode,
    header,
    subHeader,
    description,
    img,
    isVisibleReact,
    isVisibleCss,
    isVisibleFireBase,
    isVisibleJS,
    isVisibleNode,
    gitUrl,
    liveUrl,
    id,
}) => {
    return (
        <ProjectWrap>
            <ProjectDotsContainer>
                <ProjectDot color={'#fc6058'} />
                <ProjectDot color={'#fec02f'} />
                <ProjectDot color={'#2aca3e'} />
            </ProjectDotsContainer>
            <ProjectContainer id={id} reverse={reverse} lightMode={lightMode}>
                <ProjectLeftColumn>
                    <ProjectImage src={img} />
                </ProjectLeftColumn>

                <ProjectRigthColumn>
                    <ProjectHeader lightMode={lightMode}>
                        {header}
                    </ProjectHeader>
                    <ProjectSubHeader lightMode={lightMode}>
                        {subHeader}
                    </ProjectSubHeader>
                    <ProjectIcons>
                        <ReactIcon
                            visible={isVisibleReact}
                            lightMode={lightMode}
                        />
                        <CssIcon visible={isVisibleCss} lightMode={lightMode} />
                        <FireBaseIcon
                            visible={isVisibleFireBase}
                            lightMode={lightMode}
                        />
                        <JsIcon visible={isVisibleJS} lightMode={lightMode} />
                        <NodeIcon
                            visible={isVisibleNode}
                            lightMode={lightMode}
                        />
                    </ProjectIcons>
                    <ProjectDescription lightMode={lightMode}>
                        {description}
                    </ProjectDescription>

                    <ProjectLinkWrapper>
                        <ProjectGitHubLink
                            lightMode={lightMode}
                            href={gitUrl}
                            target="_blank"
                        >
                            <ButtonGitIcon lightMode={lightMode} />
                            GitHub
                        </ProjectGitHubLink>

                        <ProjectLiveLink
                            lightMode={lightMode}
                            href={liveUrl}
                            target="_blank"
                        >
                            <ButtonLiveIcon lightMode={lightMode} />
                            LiveSite
                        </ProjectLiveLink>
                    </ProjectLinkWrapper>
                </ProjectRigthColumn>
            </ProjectContainer>
        </ProjectWrap>
    );
};

export default Project;
