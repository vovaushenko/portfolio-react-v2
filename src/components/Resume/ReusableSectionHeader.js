import styled from 'styled-components';

const StyledHeader = styled.h2`
  font-size: 4rem;
  text-transform: uppercase;
  letter-spacing: 2px;
  margin-bottom: 2rem;
  ${({ theme }) => theme.gradient};
`;

const ReusableSectionHeader = ({ children }) => {
  return <StyledHeader>{children}</StyledHeader>;
};

export default ReusableSectionHeader;
