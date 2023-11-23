import React from 'react';

const Form = () => {
    return (
        <form>
            <div className='form-group fg-input'>
                <label for='lastname'>Nom</label>
                <input type='text' name='lastname'></input>
            </div>
            <div className='form-group fg-input'>
                <label for='firstname'>Prénom</label>
                <input type='text' name='firstname'></input>
            </div>
            <div className='form-group fg-input'>
                <label for='email'>E-mail</label>
                <input type='text' name='email'></input>
            </div>
            <div className='form-group fg-textarea'>
                <label for='message'>Message</label>
                <textarea type='text' name='message'></textarea>
            </div>
            <button className='btn btn--primary'>
                Demander mon devis
            </button>
        </form>
    );
};

export default Form;