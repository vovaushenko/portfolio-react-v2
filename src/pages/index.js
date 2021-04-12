import { useEffect, useState } from 'react';
import Sidebar from '../components/Sidebar';
import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import ContactForm from '../components/ContactForm';

import {
  projectFive,
  projectFour,
  projectOne,
  projectThree,
  projectTwo,
} from '../components/Project/Data';
import Tech from '../components/Technologies';
import Project from '../components/Project';
import Footer from '../components/Footer';
import About from '../components/About';
import ProjectHeader from '../components/ProjectHeader';
import Loading from '../components/Loading';
import Cursor from '../components/Cursor';

const Home = ({ themeToggler }) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, []);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <>
      <Sidebar />
      <Cursor />
      <Navbar themeToggler={themeToggler} />
      <HeroSection />
      <About />
      <Tech />
      <ProjectHeader />
      <Project {...projectOne} />
      <Project {...projectFive} />
      <Project {...projectThree} />
      <Project {...projectFour} />
      <Project {...projectTwo} />
      <ContactForm />
      <Footer />
    </>
  );
};

export default Home;
