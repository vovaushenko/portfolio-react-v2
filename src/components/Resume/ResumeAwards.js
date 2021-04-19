import { useEffect } from 'react';
import { useGlobalContext } from '../../context/context';
import { useOnScreen } from '../../hooks/useOnScreen';
import ReusableContainer from './ReusableContainer';
import ReusableSectionHeader from './ReusableSectionHeader';

const ResumeAwards = () => {
  const [setRef, visible] = useOnScreen({ threshold: 0.8 });
  const { setCurrentlyInViewport } = useGlobalContext();

  useEffect(() => {
    if (visible) {
      setCurrentlyInViewport('awards');
    }
  });
  return (
    <ReusableContainer id="awards">
      <ReusableSectionHeader>Awards</ReusableSectionHeader>
      <div ref={setRef}></div>
    </ReusableContainer>
  );
};

export default ResumeAwards;
