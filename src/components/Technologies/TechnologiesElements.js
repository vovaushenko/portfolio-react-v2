import styled from 'styled-components';

// ************   Tech Container   ***************

export const TechContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 1280px;
  margin: 0 auto;
  padding: 50px 0;

  @media screen and (max-width: 768px) {
    padding: 40px 0;
  }
`;

// *****************Tech Header*******************

export const TechHeader = styled.h2`
  color: ${({ lightMode }) => (lightMode ? '#010606' : '#01bf71')};
  font-family: 'Poppins', sans-serif;
  font-size: 20px;
  line-height: 30px;
  font-weight: 500;
  letter-spacing: 1.1px;
  text-align: center;
  margin-top: 16px;
  padding: 10px;

  @media screen and (max-width: 500px) {
    font-size: 16px;
  }
`;

//************Tech  Wrapper******************

export const TechWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  max-width: 800px;
`;

//************TechWrapper******************

export const TechSubHeader = styled.p`
  font-family: 'Poppins', sans-serif;
  letter-spacing: 1.1px;
  @media screen and (max-width: 500px) {
    font-size: 12px;
  }
`;

//  *********** Tech Card *******************
export const TechCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  padding: 30px;
  transition: all 0.4s ease-in-out;

  &:hover {
    transform: translateY(-15px);
    transition: all 0.4s ease-in-out;
  }
`;

// *********** Tech Icon *******************
export const TechIcon = styled.img`
  width: 60px;
  margin-bottom: 5px;

  &:hover {
    filter: brightness(130%);
  }
  @media screen and (max-width: 500px) {
    width: 50px;
  }
`;
