import React from 'react';
import Nav from '../components/Nav';
import Hero from '../components/Hero';
import Presentation from '../components/Presentation';
import Footer from '../components/Footer';

const Homepage = () => {
    return (
        <div className='homepage'>
            <header>
                <Nav />
                <Hero />
                <Presentation />
                <Footer />
            </header>
        </div>
    );
};

export default Homepage;