import React from 'react';
import styled from 'styled-components';
import avatar from '../../images/avatar.png';
import server from '../../images/servers.png';
import coding from '../../images/code.png';
import ux from '../../images/ux-interface.png';
import kindness from '../../images/kindness.png';
import friendship from '../../images/friend.png';
import leetcode from '../../images/1280px-LeetCode_Logo_black_with_text.svg.png';

const AboutContainer = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 90%;
  margin: 1rem auto;
`;

const Avatar = styled.img`
  width: 150px;
  object-fit: cover;
`;

const AboutHeader = styled.h1`
  color: #01bf71;
  font-size: 1.5rem;
  letter-spacing: 1.1px;
  text-align: center;
  margin-bottom: 1.5rem;

  @media screen and (max-width: 768px) {
    font-size: 1.25rem;
  }
`;

const AboutText = styled.p`
  text-align: center;
  letter-spacing: 1.1px;
  line-height: 1.5;

  @media screen and (max-width: 768px) {
    font-size: 0.75rem;
    text-align: justify;
  }
`;

const FavoriteText = styled.p`
  text-align: center;
  letter-spacing: 1.1px;
  font-size: 1rem;
  margin-top: 2rem;
  background-color: #01bf71;
  background-image: linear-gradient(
    45deg,
    #01bf71 0%,
    #2bd2ff 52%,
    #2bff88 90%
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;

  @media screen and (max-width: 768px) {
    font-size: 0.75rem;
    text-align: justify;
    word-break: break-all;
  }
`;

const TextWrapper = styled.div`
  width: 70%;
  @media screen and (max-width: 768px) {
    width: 90%;
  }
`;

const IconsWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  align-items: center;
  margin-bottom: 1rem;
  width: 90%;
`;
const Icon = styled.img`
  width: 3.5rem;
  margin-left: 3rem;

  @media screen and (max-width: 768px) {
    width: 2.5rem;
    margin-left: 1rem;
  }
`;

const AboutMainHeader = styled.h1`
  font-size: 2.5rem;
  background-color: #01bf71;
  background-image: linear-gradient(
    45deg,
    #01bf71 0%,
    #2bd2ff 52%,
    #2bff88 90%
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;

  @media screen and (max-width: 768px) {
    font-size: 2rem;
  }
`;

const HobbiesWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;
const CodeWarsImg = styled.img`
  width: 350px;
`;
const LeetCodeImg = styled.img`
  width: 200px;
  margin-top: 1rem;
`;

const index = () => {
  return (
    <AboutContainer id="skills">
      <Avatar src={avatar} />

      <AboutMainHeader>Vova Ushenko</AboutMainHeader>

      <AboutHeader>Web Developer with excellent people skills</AboutHeader>
      <IconsWrapper>
        <Icon src={coding} style={{ margin: 0 }} />
        <Icon src={ux} />
        <Icon src={server} />
        <Icon src={kindness} />
        <Icon src={friendship} />
      </IconsWrapper>

      <TextWrapper>
        <AboutText>
          Since the beginning of my fascinating journey as a web developer, I've
          worked with various cool technologies to design and code
          beautifully-simple, intuitive and clean interfaces.
        </AboutText>

        <FavoriteText>
          My favourite things are: coding, weightlifting, being nice to people
          and solving cool problems on Codewars and LeetCode
        </FavoriteText>
      </TextWrapper>
      <HobbiesWrapper>
        <a
          href="https://www.codewars.com/users/VovaCodes"
          rel="noreferrer"
          target="_blank"
        >
          <CodeWarsImg
            src="https://www.codewars.com/users/VovaCodes/badges/large"
            alt="CodewarsStats"
          />
        </a>
        <a
          href="https://leetcode.com/vovaushenko/"
          rel="noreferrer"
          target="_blank"
        >
          <LeetCodeImg src={leetcode} alt="leetcode" />
        </a>
      </HobbiesWrapper>
    </AboutContainer>
  );
};

export default index;
