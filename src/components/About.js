import React from 'react';
import { useTranslation } from 'react-i18next'
import ArganImage from '../assets/images/argan.webp'

const About = () => {
    const { t } = useTranslation()

    return (
        <div className='about'>
            <div className='container'>
                <div className='about--content slideInLeft'>
                    <h1>
                        {t('About-Page.Hero.title')}
                    </h1>
                    <p>
                        {t('About-Page.Hero.desc')}
                    </p>
                </div>
                <div className='img-wrapper slideInRight'>
                    <img src={ArganImage} alt="Photo d'une noix d'argan" />
                </div>
            </div>
        </div>
    );
};

export default About;