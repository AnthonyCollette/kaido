import React from 'react';
import { useTranslation } from 'react-i18next';

const MentionsLegales = () => {

    const { t } = useTranslation()

    return (
        <div className='mentions'>
            <div className='container'>
                <h1>{t('Mentions.title')}</h1>
                <p>{t('Mentions.desc_1')}</p>
                <h2>{t('Mentions.title_2')}</h2>
                <p>{t('Mentions.desc_2')}</p>
                <p>{t('Mentions.desc_3')}</p>
                <h2>{t('Mentions.title_3')}</h2>
                <p>{t('Mentions.desc_4')}</p>
                <h2>{t('Mentions.title_4')}</h2>
                <p>{t('Mentions.desc_5')}</p>
                <h2>{t('Mentions.title_5')}</h2>
                <p>{t('Mentions.desc_6')}</p>
                <p>{t('Mentions.desc_7')}</p>
                <p>{t('Mentions.desc_8')}</p>
                <h2>{t('Mentions.title_6')}</h2>
                <p>{t('Mentions.desc_9')}</p>
            </div>
        </div>
    );
};

export default MentionsLegales;