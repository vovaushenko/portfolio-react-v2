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
