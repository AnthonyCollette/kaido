import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next'
import Nav from '../components/Nav';
import Footer from '../components/Footer';

const Error404 = () => {
    const { t } = useTranslation()

    return (
        <div className='error-404'>
            <Nav />
            <main>
                <div className='container'>
                    <h1>
                        404
                    </h1>
                    <p>
                        {t('404.title')}

                    </p>
                    <Link to="/">
                        {t('404.link')}
                    </Link>
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default Error404;