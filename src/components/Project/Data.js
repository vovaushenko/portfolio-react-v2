import project1 from '../../images/projects/coffeeshop-mern.png';
import project2 from '../../images/projects/linkedin-clone.png';
import project3 from '../../images/projects/rntls.png';
import project4 from '../../images/projects/Google-search-clone.png';

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
  reverse: true,
  lightmode: false,

  header: 'LinkedIn Clone',
  subHeader: 'Solo Project',
  description: `The LinkedIn-clone web application presents a custom LinkedIn-clone.
  The APP is created with the latest industry standards using React.js and Redux Toolkit
  Firebase is used for the backend
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
  description: `A Google Search Clone that is built using React, Firebase and Google search api.`,
  img: project4,
  alt: 'Google Search',
  gitUrl: 'https://github.com/vovaushenko/google-search-clone',
  liveUrl: 'https://search-clone-2f6af.web.app/',

  isVisibleReact: true,
  isVisibleCss: true,
  isVisibleFireBase: true,
  isVisibleGoogle: true,
};
