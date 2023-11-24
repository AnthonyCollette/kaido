import React, { useRef } from 'react';
import { useTranslation } from 'react-i18next'
import ArganImage from '../assets/images/hafida-abousalih-KYKjCEypbgc-unsplash.webp'
import { useIsVisible } from '..';

const AboutInfos = () => {
    const { t } = useTranslation()
    const containerRef = useRef()
    const containerRefIsVisible = useIsVisible(containerRef)

    return (
        <div className='about-infos'>
            <div className='container' ref={containerRef}>
                <div className={containerRefIsVisible ? 'img-wrapper slideInLeft' : 'img-wrapper'}>
                    <img src={ArganImage} alt="Photo d'une noix d'argan" />
                </div>
                <div className={containerRefIsVisible ? 'about-infos--content slideInRight' : 'about-infos--content'}>
                    <h1>
                        {t('About-Page.Infos.title')}
                    </h1>
                    <p>
                        {t('About-Page.Infos.desc_1')}
                    </p>
                    <p>
                        {t('About-Page.Infos.desc_2')}
                    </p>
                    <p>
                        {t('About-Page.Infos.desc_3')}
                    </p>
                    <p>
                        {t('About-Page.Infos.desc_4')}
                    </p>
                    <p>
                        {t('About-Page.Infos.desc_5')}
                    </p>
                </div>
            </div>
        </div>
    );
};

export default AboutInfos;