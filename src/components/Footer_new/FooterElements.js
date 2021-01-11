import styled from 'styled-components';
import { Link } from 'react-router-dom';

// ************ Footer Container **************

export const FooterContainer = styled.footer`
    background-color: #101522;
    display: flex;
    justify-content: center;
    padding: 30px;
`;

// ************ Links Wrapper **************

export const SocialLinksWrapper = styled.div`
    display: flex;
`;

// ************ Social Icon Link ***********

export const SocialIconLink = styled.a`
    color: #fff;
    font-size: 24px;
    padding: 10px;
`;

// ************To Top Wrapper***********
export const ToTopWrapper = styled.div`
    display: flex;
`;

export const ToTop = styled(Link)`
    color: #fff;
    justify-self: start;
    cursor: pointer;
    text-decoration: none;
    font-size: 2rem;
    display: flex;
    align-items: center;
`;
