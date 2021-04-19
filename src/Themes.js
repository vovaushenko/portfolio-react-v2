import { css } from 'styled-components';

const darkModeGradient = css`
  background-color: #01bf71;
  background-image: linear-gradient(
    45deg,
    #01bf71 0%,
    #2bd2ff 52%,
    #2bff88 90%
  );
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;
const lightModeGradient = css`
  background-color: #4158d0;
  background-image: linear-gradient(
    146deg,
    #4158d0 0%,
    #2bd2ff 46%,
    #c850c0 100%
  );
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const navGlass = css`
  backdrop-filter: blur(15px);
  -webkit-backdrop-filter: blur(15px);
`;

export const lightTheme = {
  mode: 'light',
  body:
    'linear-gradient( 89.9deg,  rgba(208,246,255,1) 0.1%, rgba(255,237,237,1) 47.9%, rgba(255,255,231,1) 100.2% )',
  text: '#363537',
  background: '#6152F4',
  mainColor: '#5E57E6',
  linkColor: '#010606',
  gradient: lightModeGradient,
  togglerColor: '#5E57E6',
  navBg: '#2B2B3D',
  heroBg: 'rgba(94, 87, 230, 0.1)',
  navGlass: navGlass,

  media: {
    phone: '(max-width: 500px)',
    tablet: '(max-width: 768px)',
  },
};

export const darkTheme = {
  mode: 'dark',
  body: '#010606',
  text: 'rgba(255,255,255,0.9)',
  background: '#715CDA',
  mainColor: '#01bf71;',
  linkColor: '#010606',
  gradient: darkModeGradient,
  togglerColor: 'rgba(11, 156, 49, 0.5)',
  navBg: '#000',
  heroBg: 'rgba(11, 156, 49, 0.1)',
  navGlass: navGlass,

  media: {
    phone: '(max-width: 500px)',
    tablet: '(max-width: 768px)',
  },
};
