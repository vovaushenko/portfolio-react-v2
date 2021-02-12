import React, { useState } from 'react';
import { createGlobalStyle } from 'styled-components';
import Sidebar from '../components/Sidebar';
import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import ContactForm from '../components/ContactForm';
import {
  projectFour,
  projectOne,
  projectThree,
  projectTwo,
} from '../components/Project/Data';
import Tech from '../components/Technologies';
import Project from '../components/Project';
import Footer from '../components/Footer';

const GlobalStyle = createGlobalStyle`
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Russo One', sans-serif;
}
p,input,textarea {
    font-family: 'Poppins', sans-serif;
}

 
 body {
    font-family: 'Poppins', sans-serif;
    background:#010606;
    color:#fff
 }
 `;

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <GlobalStyle />
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      <HeroSection />
      <Tech />
      <Project {...projectOne} />
      <Project {...projectTwo} />
      <Project {...projectThree} />
      <Project {...projectFour} />
      <ContactForm />

      <Footer />
    </>
  );
};

export default Home;
