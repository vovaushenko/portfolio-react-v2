import styled from 'styled-components';
import { FaMoon } from 'react-icons/fa';
import { FaSun } from 'react-icons/fa';

const StyledThemeToggler = styled.div`
  @media screen and (max-width: 768px) {
    margin-right: 4rem;
  }
`;

const StyledCheckbox = styled.input`
  opacity: 0;
  position: absolute;

  :checked + .label .ball {
    transform: translateX(24px);
  }
`;

const StyledLabel = styled.label`
  width: 50px;
  height: 26px;
  background: ${({ theme }) => theme.togglerColor};
  border-radius: 20px;
  border: solid 0px transparent;
  border-radius: 50px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 5px;
  position: relative;

  .icon {
    fill: #f1c40f;
  }
`;
const StyledBall = styled.div`
  position: absolute;
  top: 2px;
  left: 2px;
  border-radius: 50%;
  width: 22px;
  height: 22px;
  background-color: #fff;
  transition: transform 0.2s linear;
`;

const ThemeToggler = ({ themeToggler }) => {
  return (
    <StyledThemeToggler>
      <StyledCheckbox type="checkbox" id="checkbox" onClick={themeToggler} />
      <StyledLabel htmlFor="checkbox" className="label">
        <FaMoon className="icon" />
        <FaSun className="icon" />
        <StyledBall className="ball" />
      </StyledLabel>
    </StyledThemeToggler>
  );
};

export default ThemeToggler;
