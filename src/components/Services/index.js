import React from 'react';
import Icon1 from '../../images/svg-4.svg';
import Icon2 from '../../images/svg-5.svg';
import Icon3 from '../../images/svg-6.svg';
import {
    ServicesCard,
    ServicesContainer,
    ServicesH1,
    ServicesH2,
    ServicesIcon,
    ServicesP,
    ServicesWrapper,
} from './ServicesElements';

const Services = () => {
    return (
        <ServicesContainer id="services">
            <ServicesH1>Highlited Projects</ServicesH1>
            <ServicesWrapper>
                <ServicesCard>
                    <ServicesIcon src={Icon1} />
                    <ServicesH2>Project 1</ServicesH2>
                    <ServicesP>LinkedIn Clone</ServicesP>
                </ServicesCard>
                <ServicesCard>
                    <ServicesIcon src={Icon2} />
                    <ServicesH2>Project 2</ServicesH2>
                    <ServicesP>Travel Company Website</ServicesP>
                </ServicesCard>
                <ServicesCard>
                    <ServicesIcon src={Icon3} />
                    <ServicesH2>Project 3</ServicesH2>
                    <ServicesP>Google Search Clone</ServicesP>
                </ServicesCard>
            </ServicesWrapper>
        </ServicesContainer>
    );
};

export default Services;
