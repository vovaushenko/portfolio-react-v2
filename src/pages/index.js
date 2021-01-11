import React, { useState } from 'react';
import Sidebar from '../components/Sidebar';
import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import InfoSection from '../components/InfoSection';
import {
    homeObjOne,
    homeObjThree,
    homeObjTwo,
} from '../components/InfoSection/Data';
import {
    projectFour,
    projectOne,
    projectThree,
    projectTwo,
} from '../components/Project/Data';
import Services from '../components/Services';
import Footer from '../components/Footer';

import Tech from '../components/Technologies';
import Project from '../components/Project';
import Footer_new from '../components/Footer_new';

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
            {/* <Services /> */}
            {/* <InfoSection {...homeObjTwo} />
            <InfoSection {...homeObjOne} />
            <InfoSection {...homeObjThree} /> */}

            {/* <Footer /> */}
            <Footer_new />
        </>
    );
};

export default Home;
