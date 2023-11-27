import React, { useState, useRef } from 'react';
import { useIsVisible } from '..';
import { FaChevronRight } from "react-icons/fa";
import HydratationImage from '../assets/images/hydratation.jpg';
import YoungImage from '../assets/images/young.jpg';
import HairsImage from '../assets/images/hairs.jpg';

const BannerBlock = ({ number, title, desc }) => {

    const textRef = useRef()
    const contentRef = useRef()
    const contentRefIsVisible = useIsVisible(contentRef)
    const [textIsVisible, setTextIsVisible] = useState(false)

    const handleClick = () => {
        setTextIsVisible(!textIsVisible)
    }

    const getImage = () => {
        switch (number) {
            case '1': {
                return HydratationImage
            }
            case '2': {
                return YoungImage
            }
            case '3': {
                return HairsImage
            }
        }
    }



    return (
        <div className='banner-block'>
            <svg version="1.1" id="Calque_1" xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                viewBox="0 0 239.4 480.6" space="preserve">
                <path d="M239.4,480.6v-30.2l-71.8-72.1l29.6-29.5l42.3,42.4v-30.2l-27.2-27.3l27.2-27.1v-30.1l-42.2,42.1l-36.4-36.5l43.6-43.5
	l-43.5-43.6l34.5-34.4l43.5,43.6l0.4-0.4v-30.1l-0.4,0.4l-28.5-28.6l28.9-28.8V86.9l-43.9,43.8L167,102.1l72.2-72l0.2,0.2V0.1
	L239.3,0L136.9,102l43.5,43.6l-34.5,34.4l-43.5-43.6L0,238.5l102,102.4l43.6-43.5l36.4,36.5l-44.6,44.5L239.4,480.6z M102.1,310.8
	l-72-72.2l72.2-72l28.5,28.6l-43.6,43.5l43.5,43.6L102.1,310.8z M117.3,238.7l28.6-28.5l28.5,28.6l-28.6,28.5L117.3,238.7z"/>
            </svg>

            <svg version="1.1" id="Calque_1" xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                viewBox="0 0 239.4 480.6" space="preserve">
                <path d="M239.4,480.6v-30.2l-71.8-72.1l29.6-29.5l42.3,42.4v-30.2l-27.2-27.3l27.2-27.1v-30.1l-42.2,42.1l-36.4-36.5l43.6-43.5
	l-43.5-43.6l34.5-34.4l43.5,43.6l0.4-0.4v-30.1l-0.4,0.4l-28.5-28.6l28.9-28.8V86.9l-43.9,43.8L167,102.1l72.2-72l0.2,0.2V0.1
	L239.3,0L136.9,102l43.5,43.6l-34.5,34.4l-43.5-43.6L0,238.5l102,102.4l43.6-43.5l36.4,36.5l-44.6,44.5L239.4,480.6z M102.1,310.8
	l-72-72.2l72.2-72l28.5,28.6l-43.6,43.5l43.5,43.6L102.1,310.8z M117.3,238.7l28.6-28.5l28.5,28.6l-28.6,28.5L117.3,238.7z"/>
            </svg>
            <div className={textIsVisible ? 'container display-content' : 'container'} ref={contentRef}>
                <div className={contentRefIsVisible ? 'image-wrapper slideInTop' : 'image-wrapper'} style={{animationDelay: `${number / 2}s`}} onClick={handleClick}>
                    <img src={getImage()} alt='image' />
                    <div className='overlay'>
                        <h2 className={contentRefIsVisible ? 'slideInTop' : ''}>
                            {title}
                        </h2>
                        <FaChevronRight />
                    </div>
                </div>
                <div className='banner-block--content' ref={textRef}>
                    <p>
                        {desc}
                    </p>
                </div>
            </div>
        </div>
    );
};

export default BannerBlock;