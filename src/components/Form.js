import { useRef } from 'react';
import { useIsVisible } from '..';

const Form = () => {

    const contentRef = useRef()
    const contentRefIsVisible = useIsVisible(contentRef)

    return (
        <form ref={contentRef}>
            <div className={contentRefIsVisible ? 'form-group fg-input slideInBottom' : 'form-group fg-input'}>
                <input type='text' name='lastname' placeholder="Nom"></input>
            </div>
            <div className={contentRefIsVisible ? 'form-group fg-input slideInBottom' : 'form-group fg-input'}>
                <input type='text' name='firstname' placeholder="Prénom"></input>
            </div>
            <div className={contentRefIsVisible ? 'form-group fg-input slideInBottom' : 'form-group fg-input'}>
                <input type='text' name='email' placeholder="E-mail"></input>
            </div>
            <div className={contentRefIsVisible ? 'form-group fg-textarea slideInBottom' : 'form-group fg-textarea'}>
                <textarea type='text' name='message' placeholder="Message"></textarea>
            </div>
            <button className={contentRefIsVisible ? 'btn btn--primary slideInBottom' : 'btn btn--primary'}>
                Demander mon devis
            </button>
        </form>
    );
};

export default Form;