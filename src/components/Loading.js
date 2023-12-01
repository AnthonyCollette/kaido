import React from 'react';
import Logo from '../assets/images/logo-incomplet.png'
import Picto from '../assets/images/picto-logo.png'

const Loading = () => {
    return (
        <div className='loading'>
            <div className='wrapper'>
                <img src={Logo} alt="Logo de Shop Atlas" className='logo' />
                <img src={Picto} alt="Fleur du logo de Shop Atlas" className='picto' />
            </div>
        </div>
    );
};

export default Loading;