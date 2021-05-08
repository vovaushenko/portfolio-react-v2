import styled from 'styled-components';
import { FaGithub, FaLinkedin, FaTwitter, FaDev } from 'react-icons/fa';
import { SiCodewars } from 'react-icons/si';

const SocialLinksWrapper = styled.div`
  display: flex;
`;

const SocialIconLink = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({ theme }) => theme.mainColor};
  font-size: 1.3rem;
  padding: 0.5em;
  margin: 1rem 0.7rem;
  border: 2px solid ${({ theme }) => theme.mainColor};
  border-radius: 50%;

  &:hover {
    color: ${({ theme }) => (theme.mode === 'dark' ? '#fff' : '#2bd2ff')};
    border: 2px solid
      ${({ theme }) => (theme.mode === 'dark' ? '#fff' : '#2bd2ff')};
    transition: all 0.2s ease-in-out;
  }

  @media screen and (max-width: 500px) {
    padding: 0.3em;
  }
`;

const SocialLinks = () => {
  return (
    <SocialLinksWrapper>
      <SocialIconLink
        href="https://github.com/vovaushenko"
        target="_blank"
        rel="noreferrer"
        aria-label="GitHub"
      >
        <FaGithub />
      </SocialIconLink>
      <SocialIconLink
        href="https://www.codewars.com/users/VovaCodes"
        target="_blank"
        rel="noreferrer"
        aria-label="Code Wars"
      >
        <SiCodewars />
      </SocialIconLink>
      <SocialIconLink
        href="https://www.linkedin.com/in/vovau/"
        target="_blank"
        rel="noreferrer"
        aria-label="LinkedIn"
      >
        <FaLinkedin />
      </SocialIconLink>
      <SocialIconLink
        href="https://twitter.com/vova_ush"
        target="_blank"
        rel="noreferrer"
        aria-label="Twitter"
      >
        <FaTwitter />
      </SocialIconLink>
      <SocialIconLink
        href="https://dev.to/vovaushenko"
        target="_blank"
        rel="noreferrer"
        aria-label="Dev.to"
      >
        <FaDev />
      </SocialIconLink>
    </SocialLinksWrapper>
  );
};

export default SocialLinks;
