import styled from 'styled-components';
import { Link } from 'react-router-dom';

// ************ Footer Container **************

export const FooterContainer = styled.footer`
  background: #010606;
  display: flex;
  flex-direction: column-reverse;
  justify-content: center;
  padding: 5px;
  align-items: center;
`;

// ************ Links Wrapper **************

export const SocialLinksWrapper = styled.div`
  display: flex;
`;

// ************ Social Icon Link ***********

export const SocialIconLink = styled.a`
  color: #fff;
  font-size: 30px;
  padding: 5px 20px;
  &:hover {
    color: #01bf71;
    transition: all 0.5s ease-in-out;
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
