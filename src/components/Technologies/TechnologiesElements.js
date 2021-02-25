import styled from 'styled-components';

// ************   Tech Container   ***************

export const TechContainer = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 90%;
  margin: 0 auto;
  margin-bottom: 5rem;
`;

// *****************Tech Header*******************

export const TechHeader = styled.h2`
  font-size: 2rem;
  letter-spacing: 1.1px;
  margin-top: 3rem;
  text-align: center;

  background-color: #01bf71;
  background-image: linear-gradient(
    45deg,
    #01bf71 0%,
    #2bd2ff 52%,
    #2bff88 90%
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;

  @media screen and (max-width: 768px) {
    font-size: 1.25rem;
  }
`;

//************Tech  Wrapper******************

export const TechWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  width: 90%;
  max-width: 700px;
`;

//************TechWrapper******************

export const TechSubHeader = styled.p`
  @media screen and (max-width: 500px) {
    font-size: 0.7rem;
  }
`;

//  *********** Tech Card *******************
export const TechCard = styled.a`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 1em;
  transition: all 0.4s ease-in-out;

  &:hover {
    transform: translateY(-15px);
    transition: all 0.3s ease-in-out;
  }
`;

// *********** Tech Icon *******************
export const TechIcon = styled.img`
  width: 4rem;
  margin-bottom: 5px;

  &:hover {
    filter: brightness(130%);
  }
  @media screen and (max-width: 500px) {
    width: 3rem;
  }
`;
