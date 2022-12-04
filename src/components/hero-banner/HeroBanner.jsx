import React from 'react';
import { useEffect } from 'react';
import { useState, useRef } from 'react';
import c from './HeroBanner.module.css';
import { SlArrowRight } from 'react-icons/sl'
import { SlArrowLeft } from 'react-icons/sl';
import images from "../../src/dumy-data.json"

const HeroBanner = () => {
    const caruselWrapperEl = useRef();

    const [currentImage, setCurrentImage] = useState(0);




    const swipeRight = () => {
        if (currentImage < images.length - 1) {
            setCurrentImage(currentImage => currentImage + 1)
        }
        else {
            setCurrentImage(0)
        }
    };
    const swipeLeft = () => {
        if (currentImage > 0) {
            setCurrentImage(currentImage => currentImage - 1)
        }
        else {
            setCurrentImage(images.length - 1)
        }
    }


    useEffect(() => {
        caruselWrapperEl.current.scrollLeft = currentImage * caruselWrapperEl.current.offsetWidth
    }, [currentImage])


 


    return (
        <div className={c.carusel}>
            <div className={c.caruselBtnEl}>
                <button dta-btn-type="right" className={c.caruselBtn} onClick={swipeRight} ><SlArrowRight /></button>

            </div>
            <div className={c.caruselWrapper} ref={caruselWrapperEl}>
                {
                    images.map((CaruselItem, index) =>
                        <div key={index}>
                            <img className={c.caruselItem} src={CaruselItem} alt="" />
                        </div>
                    )
                }
            </div>
       
            <div className={c.caruselBtnEl}>
                <button dta-btn-type="left" className={c.caruselBtn} onClick={swipeLeft}><SlArrowLeft /></button>
            </div>
        </div>
    )
}







export default HeroBanner