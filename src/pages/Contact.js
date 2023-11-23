import React from 'react';
import Nav from '../components/Nav';
import ContactPage from '../components/ContactPage';
import Footer from '../components/Footer';

const Contact = () => {
    return (
        <div className='contact'>
            <Nav />
            <ContactPage />
            <Footer />
        </div>
    );
};

export default Contact;