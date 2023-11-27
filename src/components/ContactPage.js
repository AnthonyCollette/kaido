import React, { useRef } from 'react';
import Form from './Form';
import { useIsVisible } from '..';

const ContactPage = () => {

    const contentRef = useRef()
    const contentRefIsVisible = useIsVisible(contentRef)

    return (
        <div className='contact-page'>
            <div className='container' ref={contentRef}>
                <h1 className={contentRefIsVisible ? 'slideInLeft' : ''}>Un <span className='text--brown'>devis</span> ? Une <span className='text--brown'>question</span> ? Nous vous répondons en <span className='text--brown'>24h</span> !</h1>
                <p className={contentRefIsVisible ? 'slideInLeft' : ''}>Nos équipes restent à votre disposition pour répondre à vos demandes de devis, questions, informations.</p>
                <Form />
            </div>
        </div>
    );
};

export default ContactPage;