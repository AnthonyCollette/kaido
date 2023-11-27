import React from 'react';
import Nav from '../components/Nav';
import Footer from '../components/Footer';
import BannerBlock from '../components/BannerBlock';
import { useTranslation } from 'react-i18next'

const Products = () => {
    const { t } = useTranslation()
    const bienfaits = ['1', '2', '3']

    return (
        <div className='products-page'>

            <Nav />
            <div className='container'>
                <h1 className='text--center slideInLeft'>{t('Products.Main_Title')}</h1>
                <p className='main-desc slideInLeft'>{t('Products.Main_Desc')}</p>
            </div>
            {bienfaits.map((bienfait, index) => <BannerBlock title={t(`Products.Product_${bienfait}.title`)} desc={t(`Products.Product_${bienfait}.desc`)} number={bienfait} key={index} />)}
            <Footer />

        </div>
    );
};

export default Products;