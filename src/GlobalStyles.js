import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
*,
::after,
::before {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

 body {
    font-family: 'Poppins', sans-serif;
    background:#010606;
    color: rgba(255,255,255,0.9);
    color: ${({ theme }) => theme.text};
    background: ${({ theme }) => theme.body};
    line-height: 1.4;
    font-size: 1rem;
    font-weight: 300;
 }

 h1,
h2,
h3,
h4,
h5,
h6 {
  margin-bottom:1rem;
  @media screen and (max-width: 500px) {
    margin-bottom:0.5rem;
  }
 
}
p {
  margin-bottom: 1rem;
  letter-spacing: 1.1px;
  @media screen and (max-width: 500px) {
    margin-bottom:0.5rem;
  }
}

ul {
  list-style-type: none;
}

a {
  text-decoration: none;
}

img {
  width: 100%;
  display: block;
}

::-webkit-scrollbar {
  width:5px;
  
}
::-webkit-scrollbar-track {
  background: transparent;

}
::-webkit-scrollbar-thumb {
  background:#01bf71;
  border-radius:25px;
}

 `;
