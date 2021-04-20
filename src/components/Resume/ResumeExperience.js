import { useEffect } from 'react';
import { useGlobalContext } from '../../context/context';
import { useOnScreen } from '../../hooks/useOnScreen';
import ReusableContainer from './ReusableContainer';
import ReusableSectionHeader from './ReusableSectionHeader';
import { experience } from './professionalExperienceData';
import ReusableInformation from './ReusableInformation';

const ResumeExperience = () => {
  const [setRef, visible] = useOnScreen({ threshold: 0.8 });

  const { setCurrentlyInViewport } = useGlobalContext();

  useEffect(() => {
    if (visible) {
      setCurrentlyInViewport('experience');
    }
  });

  return (
    <ReusableContainer id="experience">
      <ReusableSectionHeader>Experience</ReusableSectionHeader>
      <div ref={setRef}>
        {experience.map((degree) => (
          <ReusableInformation key={degree.id} {...degree} />
        ))}
      </div>
    </ReusableContainer>
  );
};

export default ResumeExperience;
