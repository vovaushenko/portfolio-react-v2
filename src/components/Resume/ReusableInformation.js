import styled from 'styled-components';
import ReusableTextDate from './ReusableTextDate';

const StyledWrapper = styled.article`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  margin-bottom: 3rem;
`;

const StyledSubHeader = styled.h3``;
const StyledDetails = styled.p``;

const ReusableInformation = ({ header, subHeader, date, details }) => {
  return (
    <StyledWrapper>
      <ReusableTextDate header={header} date={date} />
      <StyledSubHeader>{subHeader}</StyledSubHeader>
      <StyledDetails>{details}</StyledDetails>
    </StyledWrapper>
  );
};

export default ReusableInformation;
