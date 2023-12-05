import React from 'react';
import { useTranslation } from 'react-i18next'
import { RiFacebookBoxFill, RiTwitterXFill } from "react-icons/ri";
import { FaInstagramSquare } from "react-icons/fa";
import { Link } from 'react-router-dom';

const Footer = () => {
    const { t } = useTranslation()

    return (
        <footer>
            <div className="container">
                <div className='footer-column'>
                    <p>
                        {t('Footer.paragraph')}
                    </p>
                </div>
                <div className='footer-column'>
                    <Link to="/mentions-legales">Mentions légales</Link>
                    <a href='https://anthonycollette.fr' target='_blank'>
                        {t('Footer.developer_site')}
                    </a>
                </div>
                <div className='footer-column'>
                    {/* <h5>
                        {t('Footer.social_media')}
                    </h5>
                    <div className='social-medias'>
                        <a href="facebook.com">
                            <RiFacebookBoxFill />
                        </a>
                        <a href='twitter.com'>
                            <RiTwitterXFill />
                        </a>
                        <a href='instagram.com'>
                            <FaInstagramSquare />
                        </a>
                    </div> */}
                </div>
            </div>
        </footer>
    );
};

export default Footer;