import styled from 'styled-components';
import Cursor from '../components/Cursor';
import ResumeAbout from '../components/Resume/ResumeAbout';
import ResumeNavigation from '../components/Resume/ResumeNavigation';
import ResumeEducation from '../components/Resume/ResumeEducation';
import ResumeExperience from '../components/Resume/ResumeExperience';
import ResumeSkills from '../components/Resume/ResumeSkills';
import ResumeInterests from '../components/Resume/ResumeInterests';
import ResumeAwards from '../components/Resume/ResumeAwards';

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
