import React, { useRef } from 'react';
import { useTranslation } from 'react-i18next'
import banner from '../assets/images/banner.jpg';
import { useIsVisible } from '..';
import AnchorLink from 'react-anchor-link-smooth-scroll';


const Hero = () => {

    const contentRef = useRef()
    const imgRef = useRef()
    const contentRefIsVisible = useIsVisible(contentRef)
    const imgRefIsVisible = useIsVisible(imgRef)
    const {t} = useTranslation()

    return (
        <section className='hero'>
            <div ref={imgRef} className={imgRefIsVisible ? 'img-wrapper fadeIn' : 'img-wrapper'}>
                <img src={banner} alt='Bannière' />
            </div>
            <div className='hero--content'>
                <div className='container'>
                    <div className={contentRefIsVisible ? 'hero--content__text corners corners--black slideInLeft' : 'hero--content__text corners corners--black'} ref={contentRef}>
                        <svg version="1.0" id="Calque_1" xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                            viewBox="0 0 500 500" space="preserve">
                            <path d="M408.62,403.16H102.3V96.84h306.32V403.16z M132.3,373.16h246.32V126.84H132.3V373.16z" />
                            <path d="M491.51,213.68H287.83V10h203.68V213.68z M317.83,183.68h143.68V40H317.83V183.68z" />
                            <path d="M219.14,213.68H15.46V10h203.68V213.68z M45.46,183.68h143.68V40H45.46V183.68z" />
                            <path d="M489.54,490H285.86V286.32h203.68V490z M315.86,460h143.68V316.32H315.86V460z" />
                            <path d="M217.17,490H13.49V286.32h203.68V490z M43.49,460h143.68V316.32H43.49V460z" />
                        </svg>
                        <svg version="1.0" id="Calque_1" xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                            viewBox="0 0 500 500" space="preserve">
                            <path d="M408.62,403.16H102.3V96.84h306.32V403.16z M132.3,373.16h246.32V126.84H132.3V373.16z" />
                            <path d="M491.51,213.68H287.83V10h203.68V213.68z M317.83,183.68h143.68V40H317.83V183.68z" />
                            <path d="M219.14,213.68H15.46V10h203.68V213.68z M45.46,183.68h143.68V40H45.46V183.68z" />
                            <path d="M489.54,490H285.86V286.32h203.68V490z M315.86,460h143.68V316.32H315.86V460z" />
                            <path d="M217.17,490H13.49V286.32h203.68V490z M43.49,460h143.68V316.32H43.49V460z" />
                        </svg>
                        <div className='content'>
                            <h1>{t("Hero.title")}</h1>
                            <p>
                                {t("Hero.desc")}
                            </p>
                            <AnchorLink href='#presentation' className='btn btn--primary'>
                                {t("Hero.cta")}
                            </AnchorLink>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;