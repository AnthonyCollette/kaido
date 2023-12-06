import { useRef, useState } from 'react';
import { useIsVisible } from '..';
import { useTranslation } from 'react-i18next';
import emailjs from '@emailjs/browser';

const Form = () => {
    const contentRef = useRef()
    const contentRefIsVisible = useIsVisible(contentRef)
    const { t } = useTranslation()

    const [success, setSuccess] = useState(false)
    const [error, setError] = useState(false)

    const sendEmail = (e) => {
        e.preventDefault();
        console.log(process.env)
        emailjs.sendForm(process.env.REACT_APP_SERVICEID, process.env.REACT_APP_TEMPLATEID, contentRef.current, process.env.REACT_APP_PUBLICKEY)
            .then((result) => {
                setSuccess(true)
            }, (error) => {
                setError(true)
            });
    };

    return (
        <>
            <form ref={contentRef} onSubmit={sendEmail} className={error || success ? 'display-none' : ''}>
                <div className={contentRefIsVisible ? 'form-group fg-input slideInBottom' : 'form-group fg-input'}>
                    <input type='text' name='user_lastname' placeholder={t('Contact-Page.name')} required></input>
                </div>
                <div className={contentRefIsVisible ? 'form-group fg-input slideInBottom' : 'form-group fg-input'}>
                    <input type='text' name='user_firstname' placeholder={t('Contact-Page.firstname')} required></input>
                </div>
                <div className={contentRefIsVisible ? 'form-group fg-input slideInBottom' : 'form-group fg-input'}>
                    <input type='email' name='user_email' placeholder={t('Contact-Page.mail')} required></input>
                </div>
                <div className={contentRefIsVisible ? 'form-group fg-textarea slideInBottom' : 'form-group fg-textarea'}>
                    <textarea type='text' name='message' placeholder={t('Contact-Page.message')} required></textarea>
                </div>
                <button type='submit' className={contentRefIsVisible ? 'btn btn--primary slideInBottom' : 'btn btn--primary'}>
                    {t('Contact-Page.button')}
                </button>
            </form>
            {success && <p className='success'>{t('Contact-Page.success')}</p>}
            {error && <p className='error'>{t('Contact-Page.error')}</p>}
        </>
    );
};

export default Form;