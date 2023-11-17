import React, { useRef } from 'react';
import { useTranslation } from 'react-i18next'
import hydratationImg from '../assets/images/hydratation.jpg'
import youngImg from '../assets/images/young.jpg'
import hairsImg from '../assets/images/hairs.jpg'
import { useIsVisible } from '..';

const Presentation = () => {
    const { t } = useTranslation()
    const itemRef = useRef()
    const itemRefIsVisible = useIsVisible(itemRef)

    return (
        <section className='presentation' id="presentation">
            <div className='container'>
                <h2>{t('Presentation.title')}</h2>
                <div className='cards' ref={itemRef}>
                    <div className={itemRefIsVisible ? 'card slideInLeft' : 'card'}>
                        <div className='img-wrapper'>
                            <div className='overlay'>
                                <h3>{t('Presentation.first_item.title')}</h3>
                            </div>
                            <img src={hydratationImg} alt='image' />
                        </div>
                        <p>{t('Presentation.first_item.desc')}</p>
                    </div>
                    <div className={itemRefIsVisible ? 'card slideInBottom' : 'card'}>
                        <div className='img-wrapper'>
                            <div className='overlay'>
                                <h3>{t('Presentation.second_item.title')}</h3>
                            </div>
                            <img src={youngImg} alt='image' />
                        </div>
                        <p>{t('Presentation.second_item.desc')}</p>
                    </div>
                    <div className={itemRefIsVisible ? 'card slideInRight' : 'card'}>
                        <div className='img-wrapper'>
                            <div className='overlay'>
                                <h3>{t('Presentation.third_item.title')}</h3>
                            </div>
                            <img src={hairsImg} alt='image' />
                        </div>
                        <p>{t('Presentation.third_item.desc')}</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Presentation;