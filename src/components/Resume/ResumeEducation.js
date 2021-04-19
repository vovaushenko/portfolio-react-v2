import ReusableInformation from './ReusableInformation';
import ReusableSectionHeader from './ReusableSectionHeader';
import { education } from './educationData';
import ReusableContainer from './ReusableContainer';
import { useGlobalContext } from '../../context/context';
import { useEffect } from 'react';
import { useOnScreen } from '../../hooks/useOnScreen';

const ResumeEducation = () => {
  const [setRef, visible] = useOnScreen({ threshold: 0.8 });
  const { setCurrentlyInViewport } = useGlobalContext();

  useEffect(() => {
    if (visible) {
      setCurrentlyInViewport('education');
    }
  });

  return (
    <ReusableContainer id="education">
      <div ref={setRef}>
        <ReusableSectionHeader>Education</ReusableSectionHeader>
        {education.map((degree) => (
          <ReusableInformation key={degree.id} {...degree} />
        ))}
      </div>
    </ReusableContainer>
  );
};

export default ResumeEducation;
