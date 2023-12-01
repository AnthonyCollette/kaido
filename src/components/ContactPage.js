import React, { useRef } from 'react';
import Form from './Form';
import { useIsVisible } from '..';
import { useTranslation } from 'react-i18next';

const ContactPage = () => {

    const contentRef = useRef()
    const contentRefIsVisible = useIsVisible(contentRef)
    const { t } = useTranslation()

    return (
        <div className='contact-page'>
            <div className='container' ref={contentRef}>
                <h1 className={contentRefIsVisible ? 'slideInLeft' : ''}>{t('Contact-Page.title_1')} <span className='text--brown'>{t('Contact-Page.span_1')}</span> {t('Contact-Page.title_2')} <span className='text--brown'>{t('Contact-Page.span_2')}</span> {t('Contact-Page.title_3')} <span className='text--brown'>{t('Contact-Page.span_3')}</span> {t('Contact-Page.title_4')}</h1>
                <p className={contentRefIsVisible ? 'slideInLeft' : ''}>{t('Contact-Page.desc')}</p>
                <Form />
            </div>
        </div>
    );
};

export default ContactPage;