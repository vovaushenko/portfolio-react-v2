import styled from 'styled-components';

const StyledSubHeader = styled.h3`
  text-transform: uppercase;
  color: ${({ theme }) => theme.mainColor};
  letter-spacing: 2px;
`;

const ReusableSectionHeader = ({ children }) => {
  return <StyledSubHeader>{children}</StyledSubHeader>;
};

export default ReusableSectionHeader;
