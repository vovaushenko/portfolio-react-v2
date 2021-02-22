import React from 'react';

import {
  ReactIcon,
  CssIcon,
  FireBaseIcon,
  JsIcon,
  NodeIcon,
  MongoIcon,
  ReduxIcon,
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
  lightmode,
  header,
  subHeader,
  description,
  img,
  isVisibleReact,
  isVisibleCss,
  isVisibleFireBase,
  isVisibleJS,
  isVisibleNode,
  isVisibleRedux = +false,
  isVisibleMongo = +false,
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
      <ProjectContainer id={id} reverse={+reverse} lightmode={+lightmode}>
        <ProjectLeftColumn>
          <ProjectImage src={img} />
        </ProjectLeftColumn>

        <ProjectRigthColumn>
          <ProjectHeader lightmode={+lightmode}>{header}</ProjectHeader>
          <ProjectSubHeader lightmode={+lightmode}>
            {subHeader}
          </ProjectSubHeader>
          <ProjectIcons>
            <ReactIcon visible={+isVisibleReact} lightmode={+lightmode} />
            <CssIcon visible={+isVisibleCss} lightmode={+lightmode} />
            <FireBaseIcon visible={+isVisibleFireBase} lightmode={+lightmode} />
            <JsIcon visible={+isVisibleJS} lightmode={+lightmode} />
            <NodeIcon visible={+isVisibleNode} lightmode={+lightmode} />
            <ReduxIcon visible={+isVisibleRedux} lightmode={+lightmode} />
            <MongoIcon visible={+isVisibleMongo} lightmode={+lightmode} />
          </ProjectIcons>
          <ProjectDescription lightmode={+lightmode}>
            {description}
          </ProjectDescription>

          <ProjectLinkWrapper>
            <ProjectGitHubLink
              lightmode={+lightmode}
              href={gitUrl}
              target="_blank"
            >
              <ButtonGitIcon lightmode={+lightmode} />
              GitHub
            </ProjectGitHubLink>

            <ProjectLiveLink
              lightmode={+lightmode}
              href={liveUrl}
              target="_blank"
            >
              <ButtonLiveIcon lightmode={+lightmode} />
              Live
            </ProjectLiveLink>
          </ProjectLinkWrapper>
        </ProjectRigthColumn>
      </ProjectContainer>
    </ProjectWrap>
  );
};

export default Project;
