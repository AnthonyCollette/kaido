import React from 'react';
import Form from './Form';

const ContactPage = () => {
    return (
        <div className='contact-page'>
            <div className='container'>
                <h1>Un <span className='text--brown'>devis</span> ? Une <span className='text--brown'>question</span> ? Nous vous répondons en <span className='text--brown'>24h</span> !</h1>
                <p>Nos équipes restent à votre disposition pour répondre à vos demandes de devis, questions, informations.</p>
                <Form />
            </div>
        </div>
    );
};

export default ContactPage;