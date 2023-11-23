import React from 'react';
import { useTranslation } from 'react-i18next'
import EcocertLogo from '../assets/images/Logo_ecocert.png';
import Onssa from '../assets/images/onssa-logo-2518B6FC5C-seeklogo.com.png';
import USDA from '../assets/images/USDA_organic_seal.png';
import Eurofeuille from '../assets/images/AB_eurofeuille.png';

const Certifications = () => {
    const { t } = useTranslation()

    return (
        <div className='certifications'>
            <div className='container'>
                <h2>{t('About-Page.Certifications.title')}</h2>
                <p>{t('About-Page.Certifications.desc')}</p>
                <div className='certifications--logos'>
                    <div className='image-wrapper'>
                        <img src={EcocertLogo} alt="Logo" />
                    </div>
                    <div className='image-wrapper'>
                        <img src={Onssa} alt="Logo" />
                    </div>
                    <div className='image-wrapper'>
                        <img src={USDA} alt="Logo" />
                    </div>
                    <div className='image-wrapper'>
                        <img src={Eurofeuille} alt="Logo" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Certifications;