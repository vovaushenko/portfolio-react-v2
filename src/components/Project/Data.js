import project1 from '../../images/projects/coffeeshop-mern.png';
import project2 from '../../images/projects/linkedin-clone.png';
import project3 from '../../images/projects/rntls.png';
import project4 from '../../images/projects/Google-search-clone.png';
import project5 from '../../images/projects/Portfolio.png';

export const projectOne = {
  id: '',
  reverse: false,
  lightmode: false,

  header: 'Coffee-shop MERN',
  subHeader: 'Solo Project | Fours Weeks',
  description: `Coffee-shop is a custom eCommerce platform built with React, Redux, Node, Express & MongoDB. Front-end is built with React, React-Bootstrap UI library and Redux. `,
  img: project1,
  alt: 'Coffeeshop',
  gitUrl: 'https://github.com/vovaushenko/Coffee-Shop-MERN',
  liveUrl: 'https://coffeeshopmernapp.herokuapp.com/',

  isVisibleReact: true,
  isVisibleNode: true,
  isVisibleRedux: true,
  isVisibleMongo: true,
};
export const projectTwo = {
  id: '',
  reverse: false,
  lightmode: false,

  header: 'LinkedIn Clone',
  subHeader: 'Solo Project',
  description: `The LinkedIn-clone web application presents a custom LinkedIn-clone.
  The APP is created with the latest industry standards using React.js and Redux Toolkit.
  `,
  img: project2,
  alt: 'LinkedIn Clone',
  gitUrl: 'https://github.com/vovaushenko/2_linkedin-react-clone-v1',
  liveUrl: 'https://linkedin-clone-v1.web.app/',

  isVisibleReact: true,
  isVisibleRedux: true,
  isVisibleCss: true,
  isVisibleFireBase: true,
};
export const projectThree = {
  id: '',
  reverse: false,
  lightmode: false,

  header: 'RNTL Real Estate',
  subHeader: 'Solo Project',
  description: ` The RNTL web application presents a custom real estate web app.
  The App is created with the use of React.js and 
  React styled components.
    `,
  img: project3,
  alt: 'RNTL',
  gitUrl: 'https://github.com/vovaushenko/1_real-estate-company-website',
  liveUrl: 'https://rntl-rntl.netlify.app/',

  isVisibleReact: true,
  isVisibleStyledComponents: true,
};
export const projectFour = {
  id: '',
  reverse: true,
  lightmode: false,

  header: 'Google Search Clone',
  subHeader: 'Solo Project',
  description: `A Google Search Clone that is built using React, Firebase and the Google search API.`,
  img: project4,
  alt: 'Google Search',
  gitUrl: 'https://github.com/vovaushenko/google-search-clone',
  liveUrl: 'https://search-clone-2f6af.web.app/',

  isVisibleReact: true,
  isVisibleCss: true,
  isVisibleFireBase: true,
  isVisibleGoogle: true,
};
export const projectFive = {
  id: '',
  reverse: true,
  lightmode: false,

  header: 'Portfolio Web App',
  subHeader: 'Solo Project',
  description: `This is my personal portfolio built with React, Context API & Styled Components. Its main purpose is to uniquely showcase not only my developer and design skills, but also express my personality, experience and capabilities`,
  img: project5,
  alt: 'Portfolio Web App',
  gitUrl: 'https://github.com/vovaushenko/portfolio-react-v2',
  liveUrl: 'https://vovaushenko.dev/',

  isVisibleReact: true,
  isVisibleCss: true,
  isVisibleRedux: true,
};
