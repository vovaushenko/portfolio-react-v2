import React, { useState } from 'react';
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

const Home = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {
        setIsOpen(!isOpen);
    };

    return (
        <>
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
