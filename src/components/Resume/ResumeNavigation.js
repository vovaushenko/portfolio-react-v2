import styled, { css } from 'styled-components';
import { Link as LinkScroll } from 'react-scroll';
import ResumeAvatar from './ResumeAvatar';
import ThemeToggler from '../ThemeToggler/ThemeToggler';
import ReusableButton from '../ReusableButton/ReusableButton';
import { useGlobalContext } from '../../context/context';
import { useHistory } from 'react-router';

import avatar from '../../images/Photo.jpg';
import cv from '../../assets/cv-vova-ushenko.pdf';

const StyledNavigation = styled.nav`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 200px;
  position: fixed;
  padding: 0 1rem;
  border-right: 2px solid ${({ theme }) => theme.mainColor};

  div {
    display: flex;
    flex-direction: column;
    margin-bottom: 2rem;

    div {
      flex: 0.2;
    }
    ul {
      flex: 0.8;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      li {
        margin: 0.5rem 0;
        text-transform: uppercase;
      }
    }
  }

  @media ${({ theme }) => theme.media.tablet} {
    display: none;
  }
`;

const sharedLinkStyles = css`
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  cursor: pointer;
  font-size: 1rem;
  letter-spacing: 2px;
  /* color: ${({ theme, inviewport }) =>
    inviewport === 'yes' ? theme.mainColor : ''}; */
  background: ${({ theme, inviewport }) =>
    inviewport === 'yes' ? theme.mainColor : ''};
  /* text-decoration: ${({ inviewport }) =>
    inviewport === 'yes' ? 'underline' : ''}; */
  border-radius: 3rem;
  width: 9rem;
  color: ${({ theme, inviewport }) =>
    inviewport === 'yes' ? '#fff' : theme.text};

  &:hover {
    color: ${({ theme, inviewport }) =>
      inviewport === 'yes' ? '#fff' : theme.mainColor};
  }
`;

const NavLinks = styled(LinkScroll)`
  ${sharedLinkStyles}
`;

const ResumeLink = styled.a`
  ${sharedLinkStyles}
`;

const ResumeNavigation = () => {
  const { themeToggler } = useGlobalContext();
  const { currentlyInViewport } = useGlobalContext();
  let history = useHistory();

  const goBack = () => {
    history.push('/');
  };

  return (
    <StyledNavigation>
      <div>
        <ResumeAvatar avatar={avatar} desc="Vova Ushenko" />
        <ul>
          <li>
            <NavLinks
              to="about"
              smooth={true}
              duration={1000}
              spy={true}
              exact="true"
              inviewport={currentlyInViewport === 'about' ? 'yes' : null}
            >
              About
            </NavLinks>
          </li>
          <li>
            <NavLinks
              to="skills"
              smooth={true}
              duration={1000}
              spy={true}
              exact="true"
              inviewport={currentlyInViewport === 'skills' ? 'yes' : null}
            >
              skills
            </NavLinks>
          </li>
          <li>
            <NavLinks
              to="experience"
              smooth={true}
              duration={1000}
              spy={true}
              exact="true"
              inviewport={currentlyInViewport === 'experience' ? 'yes' : null}
            >
              experience
            </NavLinks>
          </li>
          <li>
            <NavLinks
              to="education"
              smooth={true}
              duration={1000}
              spy={true}
              exact="true"
              inviewport={currentlyInViewport === 'education' ? 'yes' : null}
            >
              education
            </NavLinks>
          </li>

          <li>
            <NavLinks
              to="interests"
              smooth={true}
              duration={1000}
              spy={true}
              exact="true"
              inviewport={currentlyInViewport === 'interests' ? 'yes' : null}
            >
              interests
            </NavLinks>
          </li>
          <li>
            <NavLinks
              to="awards"
              smooth={true}
              duration={1000}
              spy={true}
              exact="true"
              inviewport={currentlyInViewport === 'awards' ? 'yes' : null}
            >
              awards
            </NavLinks>
          </li>
          <li>
            <ResumeLink href={cv}>Download CV</ResumeLink>
          </li>
        </ul>
      </div>
      <ThemeToggler themeToggler={themeToggler} />
      <ReusableButton text="Go Back" func={goBack}>
        Go Back
      </ReusableButton>
    </StyledNavigation>
  );
};

export default ResumeNavigation;
