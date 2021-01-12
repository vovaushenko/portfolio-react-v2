import React from 'react';
import { EmptyPageContainer, EmptyPageImg } from './emptyPageComponents';

import img from '../../images/error-bw.png';

const EmptyPage = () => {
    return (
        <EmptyPageContainer>
            <EmptyPageImg src={img} />
        </EmptyPageContainer>
    );
};

export default EmptyPage;
