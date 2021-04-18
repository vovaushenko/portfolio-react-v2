import styled from 'styled-components';
import Cursor from '../components/Cursor';
import ResumeAbout from '../components/Resume/ResumeAbout';
import ResumeNavigation from '../components/Resume/ResumeNavigation';
import ResumeEducation from '../components/Resume/ResumeEducation';
import ResumeExperience from '../components/Resume/ResumeExperience';
import ResumeSkills from '../components/Resume/ResumeSkills';
import ResumeInterests from '../components/Resume/ResumeInterests';
import ResumeAwards from '../components/Resume/ResumeAwards';

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

const ResumePage = () => {
  return (
    <>
      <Cursor />
      <ResumeNavigation />
      <ResumeAbout />
      <ResumeExperience />
      <ResumeEducation />
      <ResumeSkills />
      <ResumeInterests />
      <ResumeAwards />
    </>
  );
};

export default ResumePage;
