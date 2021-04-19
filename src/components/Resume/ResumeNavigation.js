import styled from 'styled-components';
import { Link as LinkScroll } from 'react-scroll';
import avatar from '../../images/Photo.jpg';
import ResumeAvatar from './ResumeAvatar';
import ThemeToggler from '../ThemeToggler/ThemeToggler';
import ReusableButton from '../ReusableButton/ReusableButton';
import { useGlobalContext } from '../../context/context';
import { useHistory } from 'react-router';

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
`;

export const NavLinks = styled(LinkScroll)`
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;
  font-size: 1rem;
  letter-spacing: 2px;

  &:hover {
    color: ${({ theme }) => theme.mainColor};
  }
`;

const ResumeNavigation = () => {
  let history = useHistory();
  const goBack = () => {
    history.push('/');
  };

  const { themeToggler } = useGlobalContext();
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
            >
              About
            </NavLinks>
          </li>
          <li>
            <NavLinks
              to="experience"
              smooth={true}
              duration={1000}
              spy={true}
              exact="true"
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
            >
              education
            </NavLinks>
          </li>
          <li>
            <NavLinks
              to="skills"
              smooth={true}
              duration={1000}
              spy={true}
              exact="true"
            >
              skills
            </NavLinks>
          </li>
          <li>
            <NavLinks
              to="interests"
              smooth={true}
              duration={1000}
              spy={true}
              exact="true"
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
            >
              awards
            </NavLinks>
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
