import ReusableInformation from './ReusableInformation';
import ReusableSectionHeader from './ReusableSectionHeader';
import { education } from './educationData';
import ReusableContainer from './ReusableContainer';

const ResumeEducation = () => {
  return (
    <ReusableContainer id="education">
      <ReusableSectionHeader>Education</ReusableSectionHeader>
      {education.map((degree) => (
        <ReusableInformation key={degree.id} {...degree} />
      ))}
    </ReusableContainer>
  );
};

export default ResumeEducation;
