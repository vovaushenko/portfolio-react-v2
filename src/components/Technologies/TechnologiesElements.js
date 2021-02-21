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

export const TechHeader = styled.h4`
  color: ${({ lightMode }) => (lightMode ? '#010606' : '#01bf71')};
  font-size: 1.5rem;
  letter-spacing: 1.1px;
  margin-top: 2rem;
  text-align: center;
  margin-bottom: 1rem;

  @media screen and (max-width: 500px) {
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
  letter-spacing: 1.1px;
  font-size: 1rem;

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
  text-decoration: none;
  color: #fff;

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
