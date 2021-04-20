import { useEffect } from 'react';
import { useGlobalContext } from '../../context/context';
import { useOnScreen } from '../../hooks/useOnScreen';
import ReusableContainer from './ReusableContainer';
import ReusableSectionHeader from './ReusableSectionHeader';
import { awards } from './awardsData';
import styled from 'styled-components';
import googleScholarLogo from '../../images/scholar-google.png';
import elsevier from '../../images/Elsevier.png';

const StyledWrapper = styled.section`
  h3 {
    margin-bottom: 1rem;
    color: ${({ theme }) => theme.mainColor};
  }

  .link-wrapper {
    display: flex;
    align-items: center;

    a {
      display: flex;
      flex-direction: column;
      text-decoration: none;
      justify-content: space-between;
      margin-bottom: 1rem;
      margin-left: 2rem;
      color: ${({ theme }) => theme.text};
      height: 90px;
      img {
        width: 3.5rem;
        display: inline-block;
        margin-left: 1rem;
      }
    }
  }
`;

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
      <ReusableSectionHeader>Awards & Certifications</ReusableSectionHeader>

      <StyledWrapper ref={setRef}>
        <h3>
          Passionate web-developer with a background in Biomedical Engineering.
          Author and co-author of over 70 publications in peer-reviewed
          scientific journals, proceedings of international conferences, 10
          patents. Over 20 presentations at the major international conferences
          and symposia (h – index: 17 based on the Google Scholar and 17 in the
          Web of Science).
        </h3>

        <div className="link-wrapper">
          <a
            href="https://scholar.google.com.ua/citations?user=Wu7U4yoAAAAJ&hl=en"
            target="_blank"
            rel="noreferrer"
          >
            <img src={googleScholarLogo} alt="google scholar" />
            Google Scholar
          </a>
          <a
            href="https://www.scopus.com/authid/detail.uri?authorId=54883888200"
            target="_blank"
            rel="noreferrer"
          >
            <img src={elsevier} alt="google scholar" />
            Scopus Preview
          </a>
        </div>

        <ul>
          {awards.map((award) => (
            <li key={award.id}>
              <p>🏆 {award.desc}</p>
            </li>
          ))}
        </ul>
      </StyledWrapper>
    </ReusableContainer>
  );
};

export default ResumeAwards;
