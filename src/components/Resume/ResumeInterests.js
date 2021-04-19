import styled from 'styled-components';
import ReusableContainer from './ReusableContainer';
import ReusableSectionHeader from './ReusableSectionHeader';

const StyledTextWrapper = styled.div`
  h3 {
    letter-spacing: 1.2px;
    color: ${({ theme }) => theme.mainColor};
  }
  p {
    span {
      font-size: 1.5rem;
    }
  }
`;

const ResumeInterests = () => {
  return (
    <ReusableContainer id="interests">
      <ReusableSectionHeader>Interests</ReusableSectionHeader>

      <StyledTextWrapper>
        <h3>Outside of my work I have many other passions and hobbies.</h3>

        <p>
          <span>🏋️</span>I have been training and competing in Olympic
          weightlifting & Powerlifting for 15 years. At some point, I even
          participated in National Championships.
        </p>

        <p>
          <span>📚</span>I am an avid reader. Reading has always been one of my
          biggest passions. Paradoxically enough, I cannot single out one
          concerete genre or book. I just read to satisfy my genuine
          intellectual curiosity.
        </p>

        <p>
          <span>💻</span>I early discovered the joy and pleasure of "dirtying"
          my hands with computers and programming. I even took part in olympiads
          and coding challenges. Competitive coding in particular helped me a
          lot, offering me highly diversified algorithm-based problems,
          motivation and the chance to learn best practices from veteran coders.
        </p>
        <p>
          <span>👨‍🔬</span>Science. Eager to learn something new every waking day,
          I have always thought that science is the absolutely best way to test
          and exercise your problem-solving muscle. As a result of this, I
          participated in various biomedical projects throughout the world -
          from Finland to the US. Some of my projects were published and
          presented in the most reputable scientific journals and conferences. I
          am an Author and co-author of over 70 publications in peer-reviewed
          scientific journals, proceedings of international conferences
        </p>
      </StyledTextWrapper>
    </ReusableContainer>
  );
};

export default ResumeInterests;
