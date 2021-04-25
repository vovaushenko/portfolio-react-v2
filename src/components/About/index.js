import React from 'react';
import styled from 'styled-components';
import avatarDarkMode from '../../images/avatar.svg';
import avatarLightMode from '../../images/avatar-light-mode.svg';
import server from '../../images/servers.png';
import coding from '../../images/code.png';
import ux from '../../images/ux-interface.png';
import kindness from '../../images/kindness.png';
import friendship from '../../images/friend.png';
import leetcode from '../../images/1280px-LeetCode_Logo_black_with_text.svg.png';
import { useGlobalContext } from '../../context/context';
import ReusableButton from '../ReusableButton/ReusableButton';
import { useHistory } from 'react-router';

const AboutContainer = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 90%;
  margin: 1rem auto;
  text-align: center;
`;

const Avatar = styled.img`
  width: 150px;
  object-fit: cover;
`;

const AboutHeader = styled.h1`
  color: ${({ theme }) => theme.mainColor};
  font-size: 1.5rem;
  letter-spacing: 1.1px;
  text-align: center;
  margin-bottom: 1.5rem;

  @media screen and (max-width: 768px) {
    font-size: 1.25rem;
  }
`;

const AboutText = styled.p`
  line-height: 1.5;

  @media screen and (max-width: 768px) {
    font-size: 0.75rem;
    text-align: justify;
  }
`;

const FavoriteText = styled.p`
  line-height: 1.5;
  color: ${({ theme }) => theme.mainColor};
  font-size: 1rem;
  margin-top: 2rem;

  @media screen and (max-width: 768px) {
    font-size: 0.75rem;
    text-align: justify;
  }
`;

const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
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
  ${({ theme }) => theme.gradient};

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

const About = () => {
  const { theme } = useGlobalContext();
  let history = useHistory();

  const visitResumePage = () => {
    history.push('/resume');
  };
  return (
    <AboutContainer id="skills">
      <Avatar
        src={theme === 'dark' ? avatarDarkMode : avatarLightMode}
        alt="Friendly avatar"
      />

      <AboutMainHeader>Vova Ushenko</AboutMainHeader>

      <AboutHeader>Web Developer with excellent people skills</AboutHeader>
      <IconsWrapper>
        <Icon src={coding} style={{ margin: 0 }} alt="programming" />
        <Icon src={ux} alt="ui/ux" />
        <Icon src={server} alt="backend development" />
        <Icon src={kindness} alt="kindness" />
        <Icon src={friendship} alt="empathy" />
      </IconsWrapper>

      <TextWrapper>
        <AboutText>
          Since the beginning of my fascinating journey as a web developer, I've
          worked with various cool technologies to design and code
          beautifully-simple, intuitive and clean interfaces.
        </AboutText>
        <div>
          <ReusableButton
            type="button"
            text="Interactive Resume"
            func={visitResumePage}
          />
        </div>
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

export default About;
