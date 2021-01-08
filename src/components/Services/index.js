import React from 'react';
import Icon1 from '../../images/skills/javascript.svg';
import Icon2 from '../../images/skills/react.svg';
import Icon3 from '../../images/skills/nodejs.svg';
import Icon4 from '../../images/npm-original-wordmark.svg';
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
                <ServicesCard>
                    <ServicesIcon src={Icon3} />
                    <ServicesH2>Project 3</ServicesH2>
                    <ServicesP>Google Search Clone</ServicesP>
                </ServicesCard>
                <ServicesCard>
                    <ServicesIcon src={Icon3} />
                    <ServicesH2>Project 3</ServicesH2>
                    <ServicesP>Google Search Clone</ServicesP>
                </ServicesCard>
                <ServicesCard>
                    <ServicesIcon src={Icon3} />
                    <ServicesH2>Project 3</ServicesH2>
                    <ServicesP>Google Search Clone</ServicesP>
                </ServicesCard>
                <ServicesCard>
                    <ServicesIcon src={Icon4} />
                    <ServicesH2>Project 3</ServicesH2>
                    <ServicesP>Google Search Clone</ServicesP>
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
