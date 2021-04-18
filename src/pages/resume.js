import styled from 'styled-components';
import Cursor from '../components/Cursor';
import ResumeAbout from '../components/Resume/ResumeAbout';
import ResumeNavigation from '../components/Resume/ResumeNavigation';

const StyledAbout = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  height: 100vh;

  div {
    width: 80%;
    margin-left: 125px;
    padding: 1rem;
  }
`;

const StyledExperience = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  div {
    width: 80%;
    margin-left: 125px;
    padding: 1rem;
  }
`;

const StyledEducation = styled.section`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  div {
    width: 80%;
    margin-left: 125px;
    padding: 1rem;
  }
`;

const ResumePage = () => {
  return (
    <>
      <Cursor />
      <ResumeNavigation />

      <ResumeAbout />

      <StyledExperience id="experience">
        <div>
          <h3>Senior Developer</h3>
          <h5>CANADIAN BROADCASTING CORPORATION (CBC)</h5>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit
            officiis earum sint eligendi facere quaerat?
          </p>
          <h3>Senior Developer</h3>
          <h5>CANADIAN BROADCASTING CORPORATION (CBC)</h5>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit
            officiis earum sint eligendi facere quaerat?
          </p>
          <h3>Senior Developer</h3>
          <h5>CANADIAN BROADCASTING CORPORATION (CBC)</h5>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit
            officiis earum sint eligendi facere quaerat?
          </p>
          <h3>Senior Developer</h3>
          <h5>CANADIAN BROADCASTING CORPORATION (CBC)</h5>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit
            officiis earum sint eligendi facere quaerat?
          </p>
          <h3>Senior Developer</h3>
          <h5>CANADIAN BROADCASTING CORPORATION (CBC)</h5>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit
            officiis earum sint eligendi facere quaerat?
          </p>
          <h3>Senior Developer</h3>
          <h5>CANADIAN BROADCASTING CORPORATION (CBC)</h5>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit
            officiis earum sint eligendi facere quaerat?
          </p>
          <h3>Senior Developer</h3>
          <h5>CANADIAN BROADCASTING CORPORATION (CBC)</h5>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit
            officiis earum sint eligendi facere quaerat?
          </p>
          <h3>Senior Developer</h3>
          <h5>CANADIAN BROADCASTING CORPORATION (CBC)</h5>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit
            officiis earum sint eligendi facere quaerat?
          </p>
          <h3>Senior Developer</h3>
          <h5>CANADIAN BROADCASTING CORPORATION (CBC)</h5>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit
            officiis earum sint eligendi facere quaerat?
          </p>
        </div>
      </StyledExperience>

      <StyledEducation id="education">
        <div>
          <h2>EDUCATION</h2>

          <h4>YORK UNIVERSITY</h4>
          <h5>BACHELOR OF EDUCATION</h5>
          <p>English, Geography, Communications Technology</p>

          <h4>YORK UNIVERSITY</h4>
          <h5>BACHELOR OF EDUCATION</h5>
          <p>English, Geography, Communications Technology</p>
        </div>
      </StyledEducation>
    </>
  );
};

export default ResumePage;
