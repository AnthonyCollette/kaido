import { NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next'
import logo from '../assets/images/logo.png';
import LanguageSelector from '../components/LanguageSelector';
import { useState, useEffect } from 'react';

const Nav = () => {
    const { t } = useTranslation()

    const [open, setOpen] = useState(false)

    const handleClickNavItem = () => {
        setOpen(false)
    }

    const handleClick = () => {
        setOpen(!open)
    }

    useEffect(() => {
        if (open) {
            document.body.style.overflow = "hidden";
        }
        if (!open) {
            document.body.style.overflow = "scroll"
        }
    }, [open]);
    return (
        <header>
            <nav>
                <div className='container'>
                    <div className='brand'>
                        <NavLink to="/">
                            <img src={logo} alt='logo' />
                        </NavLink>
                    </div>
                    <div className='nav--right'>
                        <ul className={open ? "opened" : ""}>
                            <li>
                                <NavLink to="/" className={({ isActive }) => isActive ? 'active' : ''} onClick={handleClickNavItem}>
                                    {t('Nav.home')}
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/products" className={({ isActive }) => isActive ? 'active' : ''} onClick={handleClickNavItem}>
                                    {t('Nav.products')}
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/about" className={({ isActive }) => isActive ? 'active' : ''} onClick={handleClickNavItem}>
                                    {t('Nav.about')}
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/contact" className={({ isActive }) => isActive ? 'active' : ''} onClick={handleClickNavItem}>
                                    {t('Nav.contact')}
                                </NavLink>
                            </li>
                        </ul>
                        <LanguageSelector />
                        <div className={open ? 'btn--burger open' : 'btn--burger'} onClick={handleClick}>
                            <div className='line line-1'></div>
                            <div className='line line-2'></div>
                            <div className='line line-3'></div>
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    );
};

export default Nav;