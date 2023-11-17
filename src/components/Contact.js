import React, { useRef } from 'react';
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom';
import { useIsVisible } from '..';
import Image from '../assets/images/Mysterious bottle of argan oil.png';

const Contact = () => {

    const { t } = useTranslation()
    const contactRef = useRef()
    const contactRefIsVisible = useIsVisible(contactRef)

    return (
        <section className='contact-section'>
            <div className='container' ref={contactRef}>
                <div className={contactRefIsVisible ? 'img-wrapper slideInLeft' : 'img-wrapper'} >
                    <img src={Image} alt="Photo d'une bouteille d'huile d'argan" />
                </div>
                <div className={contactRefIsVisible ? 'contact-section--content slideInRight' : 'contact-section--content'} >
                    <h2>{t('Contact-Section.title')}</h2>
                    <p>{t('Contact-Section.para_1')}</p>
                    <p>{t('Contact-Section.para_2')}</p>
                    <Link to="/contact" className={contactRefIsVisible ? 'btn btn--primary slideInBottom' : 'btn btn--primary'} >
                        {t('Contact-Section.cta')}
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default Contact;