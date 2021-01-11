import styled from 'styled-components';
import { Link } from 'react-router-dom';

// ************ Footer Container **************

export const FooterContainer = styled.footer`
    background: rgb(1, 13, 10);
    background: radial-gradient(
        circle,
        rgba(1, 13, 10, 1) 3%,
        rgba(1, 6, 6, 1) 14%,
        rgba(1, 6, 6, 1) 30%,
        rgba(1, 46, 29, 1) 39%,
        rgba(1, 6, 6, 1) 43%,
        rgba(1, 30, 20, 1) 50%,
        rgba(1, 58, 36, 1) 58%,
        rgba(1, 86, 52, 1) 66%,
        rgba(1, 191, 113, 1) 77%,
        rgba(1, 146, 87, 1) 79%
    );
    display: flex;
    flex-direction: column-reverse;
    justify-content: center;
    padding: 20px;
    align-items: center;
    /* border-top: #fff 1px solid; */
`;

// ************ Links Wrapper **************

export const SocialLinksWrapper = styled.div`
    display: flex;
`;

// ************ Social Icon Link ***********

export const SocialIconLink = styled.a`
    color: #fff;
    font-size: 32px;
    padding: 5px 30px;
    &:hover {
        color: #01bf71;
        transition: all 0.5s ease-in-out;

        transform: rotate(360deg);
    }

    @media screen and (max-width: 500px) {
        padding: 10px 15px;
    }
`;

// ************To Top Wrapper***********
export const ToTopWrapper = styled.div`
    display: flex;
`;

export const ToTop = styled(Link)`
    color: #fff;
    cursor: pointer;
    text-decoration: none;
    font-size: 2.5rem;
    display: flex;
    align-items: center;

    &:hover {
        color: #01bf71;
        transform: translateY(-10px);
        transition: all 0.6s ease-in-out;
    }
`;
