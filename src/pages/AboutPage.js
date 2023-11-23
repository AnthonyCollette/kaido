import React from 'react';
import Nav from '../components/Nav';
import About from '../components/About';
import Footer from '../components/Footer';
import Certifications from '../components/Certifications';

const AboutPage = () => {
    return (
        <div className='about-page'>
            <Nav />
            <About />
            <Certifications />
            <Footer />
        </div>
    );
};

export default AboutPage;