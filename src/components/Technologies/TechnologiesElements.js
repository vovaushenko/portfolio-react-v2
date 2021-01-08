import styled from 'styled-components';

// ************   Tech Container   ***************

export const TechContainer = styled.div`
    display: flex;
    flex-direction: column;
    color: #fff;
    background: ${({ lightBg }) => (lightBg ? '#f9f9f9' : '#010606')};

    @media screen and (max-width: 768px) {
        padding: 40px 0;
    }
`;

// *****************Tech Header*******************

export const TechHeader = styled.h2`
    color: #01bf71;
    font-size: 20px;
    line-height: 16px;
    font-weight: 500;
    letter-spacing: 1.2px;
    text-transform: uppercase;
    text-align: center;
    margin-bottom: 16px;
    padding: 20px;
`;

//************Tech  Wrapper******************

export const TechWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
`;

//************TechWrapper******************

export const TechSubHeader = styled.h4`
    letter-spacing: 1.4px;
`;

//************Tech   Img******************

//  *********** Tech Card *******************
export const TechCard = styled.div`
    background: #010606;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-radius: 10px;
    padding: 30px;
    transition: all 0.2s ease-in-out;

    &:hover {
        transform: translateY(-15px);
        transition: all 0.2s ease-in-out;
    }
`;

// *********** Tech Icon *******************
export const TechIcon = styled.img`
    height: 70px;
    width: 70px;
    margin-bottom: 10px;
`;
