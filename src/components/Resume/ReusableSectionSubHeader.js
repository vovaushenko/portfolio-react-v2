import styled from 'styled-components';

const StyledSubHeader = styled.h3`
  text-transform: uppercase;
  color: ${({ theme }) => theme.mainColor};
  letter-spacing: 2px;
  margin-top: ${({ marginTop }) => marginTop || 0};
`;

const ReusableSectionSubHeader = ({ children, marginTop }) => {
  return <StyledSubHeader marginTop={marginTop}>{children}</StyledSubHeader>;
};

export default ReusableSectionSubHeader;
