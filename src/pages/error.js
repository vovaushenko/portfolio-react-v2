import styled from 'styled-components';
import Cursor from '../components/Cursor';
import ReusableButton from '../components/ReusableButton/ReusableButton';
import { useHistory } from 'react-router-dom';
import error from '../images/error.svg';

const StyledErrorPage = styled.main`
  width: 100vw;
  height: 100vh;
  display: grid;
  align-items: center;
  justify-items: center;
`;

const StyledErrorWrapper = styled.section`
  display: grid;
  width: 90%;

  grid-template-columns: 1fr 2fr;
  h1 {
    font-size: 4rem;
    letter-spacing: 2px;
    ${({ theme }) => theme.gradient};
  }

  .left {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    margin-left: 5rem;
  }

  .right {
    display: flex;
    align-items: center;
  }

  @media ${(props) => props.theme.media.tablet} {
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 1fr;
    justify-content: center;
    align-items: center;

    h1 {
      font-size: 3rem;
    }

    .left {
      margin-left: 0;
    }
  }
`;

const ErrorPage = () => {
  const history = useHistory();
  return (
    <>
      <Cursor />
      <StyledErrorPage>
        <StyledErrorWrapper>
          <div className="left">
            <h1>Whooooops!</h1>
            <p>Sorry, the page you are looking for doesn't exist</p>
            <div className="btn-wrap">
              <ReusableButton
                text="Back To Home"
                func={() => history.push('/')}
              />
            </div>
          </div>
          <div className="right">
            <img src={error} alt="" />
          </div>
        </StyledErrorWrapper>
      </StyledErrorPage>
    </>
  );
};

export default ErrorPage;
