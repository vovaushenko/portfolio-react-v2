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
    color: ${({ theme }) => theme.text};
    background: ${({ theme }) => theme.body};
    line-height: 1.4;
    font-size: 1rem;
    font-weight: 300;
    transition: all 0.2s ease-in-out;
 }

h1,
h2,
h3,
h4,
h5,
h6 {
  margin-bottom:1rem;
  letter-spacing: 1.1px;
}
p {
  margin-bottom: 1rem;
  letter-spacing: 1.1px;
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
  background:${({ theme }) => theme.mainColor};;
  border-radius:25px;
}
 `;
