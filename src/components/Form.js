const Form = () => {
    return (
        <form>
            <div className='form-group fg-input'>
                <input type='text' name='lastname' placeholder="Nom"></input>
            </div>
            <div className='form-group fg-input'>
                <input type='text' name='firstname' placeholder="Prénom"></input>
            </div>
            <div className='form-group fg-input'>
                <input type='text' name='email' placeholder="E-mail"></input>
            </div>
            <div className='form-group fg-textarea'>
                <textarea type='text' name='message' placeholder="Message"></textarea>
            </div>
            <button className='btn btn--primary'>
                Demander mon devis
            </button>
        </form>
    );
};

export default Form;