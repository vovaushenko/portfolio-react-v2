import styled from 'styled-components';

const StyledButton = styled.button`
  display: block;
  color: ${({ theme }) => theme.mainColor};
  background: transparent;
  font-family: inherit;
  border: 2px solid ${({ theme }) => theme.mainColor};
  font-size: 1rem;
  font-weight: 700;
  border-radius: 2rem;
  height: 3rem;
  padding: 0 2rem;
  cursor: pointer;
  box-sizing: border-box;
  margin-top: 1rem;
  outline: none;

  &:hover {
    transition: all 0.2s ease-in-out;
    color: #fff;
    background-color: ${({ theme }) => theme.mainColor};
  }
`;

const ReusableButton = ({ text, func, type }) => {
  return (
    <StyledButton onClick={func} type={type}>
      {text}
    </StyledButton>
  );
};

export default ReusableButton;
