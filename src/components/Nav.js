import { NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next'
import logo from '../assets/images/logo.png';
import LanguageSelector from '../components/LanguageSelector';

const Nav = () => {
    const { t } = useTranslation()

    return (
        <nav>
            <div className='container'>
                <div className='brand'>
                    <NavLink to="/">
                        <img src={logo} alt='logo' />
                    </NavLink>
                </div>
                <ul>

                    <li>
                        <NavLink to="/" className={({ isActive }) => isActive ? 'active' : ''}>
                            {t('Nav.home')}
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/products" className={({ isActive }) => isActive ? 'active' : ''}>
                            {t('Nav.products')}
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/about" className={({ isActive }) => isActive ? 'active' : ''}>
                            {t('Nav.about')}
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/contact" className={({ isActive }) => isActive ? 'active' : ''}>
                            {t('Nav.contact')}
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/loading" className={({ isActive }) => isActive ? 'active' : ''}>
                            Loading
                        </NavLink>
                    </li>
                    <LanguageSelector />
                </ul>
            </div>
        </nav>
    );
};

export default Nav;