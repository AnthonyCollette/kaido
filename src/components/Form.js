import { useRef } from 'react';
import { useIsVisible } from '..';
import { useTranslation } from 'react-i18next';

const Form = () => {

    const contentRef = useRef()
    const contentRefIsVisible = useIsVisible(contentRef)
    const { t } = useTranslation()

    return (
        <form ref={contentRef}>
            <div className={contentRefIsVisible ? 'form-group fg-input slideInBottom' : 'form-group fg-input'}>
                <input type='text' name='lastname' placeholder={t('Contact-Page.name')}></input>
            </div>
            <div className={contentRefIsVisible ? 'form-group fg-input slideInBottom' : 'form-group fg-input'}>
                <input type='text' name='firstname' placeholder={t('Contact-Page.firstname')}></input>
            </div>
            <div className={contentRefIsVisible ? 'form-group fg-input slideInBottom' : 'form-group fg-input'}>
                <input type='text' name='email' placeholder={t('Contact-Page.mail')}></input>
            </div>
            <div className={contentRefIsVisible ? 'form-group fg-textarea slideInBottom' : 'form-group fg-textarea'}>
                <textarea type='text' name='message' placeholder={t('Contact-Page.message')}></textarea>
            </div>
            <button className={contentRefIsVisible ? 'btn btn--primary slideInBottom' : 'btn btn--primary'}>
                {t('Contact-Page.button')}
            </button>
        </form>
    );
};

export default Form;