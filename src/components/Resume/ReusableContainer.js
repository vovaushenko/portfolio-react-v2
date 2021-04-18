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
`;

const ReusableContainer = ({ children, id }) => {
  return (
    <StyledContainer id={id}>
      <div className="container">{children}</div>
    </StyledContainer>
  );
};

export default ReusableContainer;
