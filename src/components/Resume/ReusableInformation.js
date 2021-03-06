import styled from 'styled-components';
import ReusableTextDate from './ReusableTextDate';

const StyledWrapper = styled.article`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  margin-bottom: 3rem;
  h3 {
    letter-spacing: 1.5px;
  }

  @media ${({ theme }) => theme.media.tablet} {
    h3 {
      font-size: 1rem;
    }
    p {
      font-size: 1rem;
    }
  }

  @media ${({ theme }) => theme.media.phone} {
    h3 {
      font-size: 0.75rem;
    }
    p {
      font-size: 0.75rem;
    }
  }
`;

const ReusableInformation = ({ header, subHeader, date, details }) => {
  return (
    <StyledWrapper>
      <ReusableTextDate header={header} date={date} />
      <h3>{subHeader}</h3>
      <p>{details}</p>
    </StyledWrapper>
  );
};

export default ReusableInformation;
