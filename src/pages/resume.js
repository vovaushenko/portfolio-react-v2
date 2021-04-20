import Cursor from '../components/Cursor';
import ResumeAbout from '../components/Resume/ResumeAbout';
import ResumeNavigation from '../components/Resume/ResumeNavigation';
import ResumeEducation from '../components/Resume/ResumeEducation';
import ResumeExperience from '../components/Resume/ResumeExperience';
import ResumeSkills from '../components/Resume/ResumeSkills';
import ResumeInterests from '../components/Resume/ResumeInterests';
import ResumeAwards from '../components/Resume/ResumeAwards';
import Loading from '../components/Loading';
import { useEffect, useState } from 'react';

const ResumePage = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, []);

  if (isLoading) {
    return <Loading />;
  }
  return (
    <>
      <Cursor />
      <ResumeNavigation />
      <ResumeAbout />
      <ResumeSkills />
      <ResumeExperience />
      <ResumeEducation />
      <ResumeInterests />
      <ResumeAwards />
    </>
  );
};

export default ResumePage;
