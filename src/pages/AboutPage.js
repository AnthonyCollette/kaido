import React from 'react';
import About from '../components/About';
import Certifications from '../components/Certifications';
import AboutInfos from '../components/AboutInfos';

const AboutPage = () => {
    return (
        <div className='about-page'>
            <About />
            <AboutInfos />
            <Certifications />
        </div>
    );
};

export default AboutPage;