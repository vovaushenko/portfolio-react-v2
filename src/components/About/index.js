import React from 'react';
import styled from 'styled-components';
import avatar from '../../images/avatar.png';

const AboutContainer = styled.main`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  width: 90%;
  margin: 0 auto;
  padding-top: 3rem;
`;

const Avatar = styled.img`
  width: 150px;
`;

const AboutHeader = styled.h1`
  color: #01bf71;
  margin: 1rem 0;

  font-size: 2rem;
  letter-spacing: 1.1px;
  text-align: center;
`;

const AboutText = styled.p`
  text-align: center;
  letter-spacing: 1.1px;
  line-height: 1.5;
  font-size: 1.25rem;
`;

const TextWrapper = styled.div`
  width: 90%;
`;

const index = () => {
  return (
    <>
      <AboutContainer id="skills">
        <Avatar src={avatar} />

        <AboutHeader>Front & Back - end Developer</AboutHeader>

        <TextWrapper>
          <AboutText>
            Since beginning my journey as a web developer, I've worked with a
            great number of technologies to design and code beautifully-simple,
            intuitive and clean interfaces. However, I particularly enjoy
            working with React ⚛️ and Node 💻.
          </AboutText>
        </TextWrapper>

        <p></p>
      </AboutContainer>
    </>
  );
};

export default index;
