import { useEffect, useState } from 'react';
import Sidebar from '../components/Sidebar';
import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import ContactForm from '../components/ContactForm';

import {
  projectFive,
  projectFour,
  projectOne,
  projectSeven,
  projectSix,
  projectThree,
  projectTwo,
  projectEight,
} from '../components/Project/Data';
import Tech from '../components/Technologies';
import Project from '../components/Project';
import Footer from '../components/Footer';
import About from '../components/About';
import ProjectHeader from '../components/ProjectHeader';
import Loading from '../components/Loading';
import Cursor from '../components/Cursor';

const Home = () => {
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
      <Cursor />
      <Sidebar />
      <Navbar />
      <HeroSection />
      <About />
      <Tech />
      <ProjectHeader />
      <Project {...projectOne} />
      <Project {...projectSeven} />
      <Project {...projectSix} />
      <Project {...projectEight} />
      <Project {...projectThree} />
      <Project {...projectFour} />
      <ContactForm />
      <Footer />
    </>
  );
};

export default Home;
