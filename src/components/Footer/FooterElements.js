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
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  font-size: 1.3rem;
  padding: 0.5em;
  margin: 1rem 0.7rem;
  border: 1px solid white;
  border-radius: 50%;

  &:hover {
    color: #01bf71;
    border: 1px solid #01bf71;
    transition: all 0.2s ease-in-out;
  }

  @media screen and (max-width: 500px) {
    padding: 0.3em;
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

export const FooterCopyright = styled.p`
  font-size: 1rem;
  letter-spacing: 1.1px;
  color: #01bf71;
`;

export const FooterImageContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const FooterCanada = styled.img`
  width: 40px;
  margin-right: 1rem;
`;
export const FooterLogo = styled.img`
  width: 40px;
`;
