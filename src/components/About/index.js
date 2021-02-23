import React from 'react';
import styled from 'styled-components';
import avatar from '../../images/avatar.png';
import server from '../../images/servers.png';
import coding from '../../images/code.png';
import ux from '../../images/ux-interface.png';
import kindness from '../../images/kindness.png';
import friendship from '../../images/friend.png';
import leetcode from '../../images/1280px-LeetCode_Logo_black_with_text.svg.png';

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

  font-size: 1.5rem;
  letter-spacing: 1.1px;
  text-align: center;
`;

const AboutText = styled.p`
  text-align: center;
  letter-spacing: 1.1px;
  line-height: 1.5;
  font-size: 1.25rem;
  margin-top: 1rem;
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
`;

const TextWrapper = styled.div`
  width: 90%;

  @media (min-width: 650px) {
    width: 70%;
  }
`;

const IconsWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 2rem;
`;
const Icon = styled.img`
  width: 3.5rem;
  margin-left: 3rem;
`;

const AboutMainHeader = styled.h1`
  font-size: 2.5rem;
  letter-spacing: 1.1px;
  background-color: #01bf71;
  background-image: linear-gradient(
    45deg,
    #01bf71 0%,
    #2bd2ff 52%,
    #2bff88 90%
  );

  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const HobbiesWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin-top: 2rem;
`;
const CodeWarsImg = styled.img`
  width: 400px;
`;
const LeetCodeImg = styled.img`
  width: 250px;
  margin-top: 1rem;
`;

const index = () => {
  return (
    <>
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
            Since the beginning of my fascinating journey as a web developer,
            I've worked with various cool technologies to design and code
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
    </>
  );
};

export default index;
