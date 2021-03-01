import React from 'react';

import {
  ReactIcon,
  CssIcon,
  FireBaseIcon,
  JsIcon,
  NodeIcon,
  MongoIcon,
  ReduxIcon,
  StyledComponentsIcon,
  GoogleIcon,
  ProjectContainer,
  ProjectDescription,
  ProjectHeader,
  ProjectIcons,
  ProjectImage,
  ProjectLeftColumn,
  ProjectRigthColumn,
  ProjectSubHeader,
  ProjectGitHubLink,
  ButtonGitIcon,
  ButtonLiveIcon,
  ProjectLinkWrapper,
  ProjectWrap,
  ProjectDotsContainer,
  ProjectDot,
} from './ProjectComponents';

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
  isVisibleRedux,
  isVisibleGoogle,
  isVisibleMongo,
  isVisibleStyledComponents,
  gitUrl,
  liveUrl,
  id,
}) => {
  return (
    <>
      <ProjectWrap>
        <ProjectDotsContainer>
          <ProjectDot color={'#fc6058'} />
          <ProjectDot color={'#fec02f'} />
          <ProjectDot color={'#2aca3e'} />
        </ProjectDotsContainer>
        <ProjectContainer id={id} reverse={+reverse} lightmode={+lightmode}>
          <ProjectLeftColumn>
            <ProjectImage src={img} alt="project image" />
          </ProjectLeftColumn>

          <ProjectRigthColumn>
            <ProjectHeader lightmode={+lightmode}>{header}</ProjectHeader>
            <ProjectSubHeader lightmode={+lightmode}>
              {subHeader}
            </ProjectSubHeader>

            <ProjectIcons>
              <ReactIcon visible={+isVisibleReact} lightmode={+lightmode} />
              <CssIcon visible={+isVisibleCss} lightmode={+lightmode} />
              <FireBaseIcon
                visible={+isVisibleFireBase}
                lightmode={+lightmode}
              />
              <JsIcon visible={+isVisibleJS} lightmode={+lightmode} />
              <NodeIcon visible={+isVisibleNode} lightmode={+lightmode} />
              <ReduxIcon visible={+isVisibleRedux} lightmode={+lightmode} />
              <MongoIcon visible={+isVisibleMongo} lightmode={+lightmode} />
              <GoogleIcon visible={+isVisibleGoogle} lightmode={+lightmode} />
              <StyledComponentsIcon
                visible={+isVisibleStyledComponents}
                lightmode={+lightmode}
              />
            </ProjectIcons>
            <ProjectDescription lightmode={+lightmode}>
              {description}
            </ProjectDescription>

            <ProjectLinkWrapper>
              <ProjectGitHubLink
                lightmode={+lightmode}
                href={gitUrl}
                target="_blank"
                rel="noreferrer"
              >
                <ButtonGitIcon lightmode={+lightmode} />
                GitHub
              </ProjectGitHubLink>

              <ProjectGitHubLink
                lightmode={+lightmode}
                href={liveUrl}
                target="_blank"
                rel="noreferrer"
              >
                <ButtonLiveIcon lightmode={+lightmode} />
                  Live  
              </ProjectGitHubLink>
            </ProjectLinkWrapper>
          </ProjectRigthColumn>
        </ProjectContainer>
      </ProjectWrap>
    </>
  );
};

Project.defaultProps = {
  isVisibleReact: +false,
  isVisibleCss: +false,
  isVisibleFireBase: +false,
  isVisibleJS: +false,
  isVisibleNode: +false,
  isVisibleRedux: +false,
  isVisibleMongo: +false,
  isVisibleStyledComponents: +false,
  isVisibleGoogle: +false,
};

export default Project;
