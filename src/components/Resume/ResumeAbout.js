import styled from 'styled-components';

const StyledAbout = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  height: 100vh;

  div {
    width: 70%;
    margin-left: 125px;
    padding: 1rem;

    h1 {
      text-transform: uppercase;
      letter-spacing: 2px;
      font-size: 5rem;
      margin-bottom: 0;
      ${({ theme }) => theme.gradient};
    }
    h3 {
      color: ${({ theme }) => theme.mainColor};
      font-size: 2rem;
      letter-spacing: 2px;
      margin-bottom: 0.5rem;
    }

    a {
      text-decoration: none;
      font-size: 2rem;
      ${({ theme }) => theme.gradient};
    }

    p {
      font-size: 1.125rem;
      margin-top: 1rem;
    }
  }
`;

const ResumeAbout = () => {
  return (
    <StyledAbout id="about">
      <div>
        <h1>Vova Ushenko</h1>
        <h3>Ottawa-Gatineau Metropolitan Area · Canada ·</h3>
        <a href="mailto:volodymyr@ushenko.gmail.com">contact@vovaushenko.com</a>
        <p>
          I am currently working as a Freelance Web Developer and lecturer. I've
          created full-stack projects with React, Node.js, and databases with
          PostgreSQL. I have a strong foundation in design, education, and music
          that influences my work. I am an avid learner and successful problem
          solver and I look forward to future challenges and expanding my
          knowledge and skills.
        </p>
      </div>
    </StyledAbout>
  );
};

export default ResumeAbout;
