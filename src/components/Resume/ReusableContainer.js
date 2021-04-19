import styled from 'styled-components';

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;

  .container {
    width: 70%;
    margin-left: 125px;
    padding: 1rem;
  }
  @media ${({ theme }) => theme.media.tablet} {
    width: 100%;
    margin: 0;

    h1 {
      font-size: 3rem;
      color: red;
    }
    .container {
      width: 100%;
      margin: 0;
    }
  }
`;

const ReusableContainer = ({ children, id }) => {
  return (
    <StyledContainer id={id}>
      <div className="container">{children}</div>
    </StyledContainer>
  );
};

export default ReusableContainer;
