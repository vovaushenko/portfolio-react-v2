import styled from 'styled-components';

// ************ Footer Container **************

export const FooterContainer = styled.footer`
  display: flex;
  flex-direction: column-reverse;
  justify-content: center;
  padding: 5px;
  align-items: center;

  margin-top: 2rem;
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
  color: ${({ theme }) => theme.mainColor};
  font-size: 1.3rem;
  padding: 0.5em;
  margin: 1rem 0.7rem;
  border: 2px solid ${({ theme }) => theme.mainColor};
  border-radius: 50%;

  &:hover {
    color: ${({ theme }) => (theme.mode === 'dark' ? '#fff' : '#2bd2ff')};
    border: 2px solid
      ${({ theme }) => (theme.mode === 'dark' ? '#fff' : '#2bd2ff')};
    transition: all 0.2s ease-in-out;
  }

  @media screen and (max-width: 500px) {
    padding: 0.3em;
  }
`;

export const FooterCopyright = styled.p`
  font-size: 1.125rem;
  letter-spacing: 1.1px;
  color: ${({ theme }) => theme.mainColor};
  margin-top: 1rem;
  margin-bottom: 0.5rem;
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

export const Divider = styled.div`
  width: 450px;
  height: 2px;
  background: ${({ theme }) => theme.mainColor};

  @media screen and (max-width: 768px) {
    width: 300px;
  }
`;
