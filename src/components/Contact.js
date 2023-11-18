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
            <svg version="1.1" id="Calque_1" xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                viewBox="0 0 239.4 480.6" space="preserve">
                <path d="M239.4,480.6v-30.2l-71.8-72.1l29.6-29.5l42.3,42.4v-30.2l-27.2-27.3l27.2-27.1v-30.1l-42.2,42.1l-36.4-36.5l43.6-43.5
	l-43.5-43.6l34.5-34.4l43.5,43.6l0.4-0.4v-30.1l-0.4,0.4l-28.5-28.6l28.9-28.8V86.9l-43.9,43.8L167,102.1l72.2-72l0.2,0.2V0.1
	L239.3,0L136.9,102l43.5,43.6l-34.5,34.4l-43.5-43.6L0,238.5l102,102.4l43.6-43.5l36.4,36.5l-44.6,44.5L239.4,480.6z M102.1,310.8
	l-72-72.2l72.2-72l28.5,28.6l-43.6,43.5l43.5,43.6L102.1,310.8z M117.3,238.7l28.6-28.5l28.5,28.6l-28.6,28.5L117.3,238.7z"/>
            </svg>

            <svg version="1.1" id="Calque_1" xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                viewBox="0 0 239.4 480.6" space="preserve">
                <path d="M239.4,480.6v-30.2l-71.8-72.1l29.6-29.5l42.3,42.4v-30.2l-27.2-27.3l27.2-27.1v-30.1l-42.2,42.1l-36.4-36.5l43.6-43.5
	l-43.5-43.6l34.5-34.4l43.5,43.6l0.4-0.4v-30.1l-0.4,0.4l-28.5-28.6l28.9-28.8V86.9l-43.9,43.8L167,102.1l72.2-72l0.2,0.2V0.1
	L239.3,0L136.9,102l43.5,43.6l-34.5,34.4l-43.5-43.6L0,238.5l102,102.4l43.6-43.5l36.4,36.5l-44.6,44.5L239.4,480.6z M102.1,310.8
	l-72-72.2l72.2-72l28.5,28.6l-43.6,43.5l43.5,43.6L102.1,310.8z M117.3,238.7l28.6-28.5l28.5,28.6l-28.6,28.5L117.3,238.7z"/>
            </svg>

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