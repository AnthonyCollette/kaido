import React from 'react';
import Hero from '../components/Hero';
import Presentation from '../components/Presentation';
import Contact from '../components/Contact';

const Homepage = () => {
    return (
        <div className='homepage'>
            <Hero />
            <Presentation />
            <Contact />
        </div>
    );
};

export default Homepage;