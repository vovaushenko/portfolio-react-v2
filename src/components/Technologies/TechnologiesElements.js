import styled from 'styled-components';

// ************   Tech Container   ***************

export const TechContainer = styled.div`
    display: flex;
    flex-direction: column;
    max-width: 1280px;
    color: #fff;
    margin: auto;
    padding: 50px 0;
    background: ${({ lightBg }) => (lightBg ? '#f9f9f9' : '#010606')};
    justify-content: center;
    align-items: center;
    @media screen and (max-width: 768px) {
        padding: 40px 0;
    }
`;

// *****************Tech Header*******************

export const TechHeader = styled.h2`
    color: #01bf71;
    font-size: 20px;
    line-height: 30px;
    font-weight: 500;
    letter-spacing: 1.2px;
    text-transform: uppercase;
    text-align: center;
    margin-top: 16px;
    padding: 20px;

    @media screen and (max-width: 500px) {
        font-size: 16px;
    }
`;

//************Tech  Wrapper******************

export const TechWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    max-width: 900px;
`;

//************TechWrapper******************

export const TechSubHeader = styled.h4`
    letter-spacing: 1.5px;
    font-weight: 500;
`;

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

    &:hover {
        filter: brightness(130%);
    }
`;
