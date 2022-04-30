import React from 'react'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import { SliderData } from './SliderData';
import { useState } from 'react';
import "./ImageSlider.css";

function ImageSlider({slides}) {
    const [current, setCurrent] = useState(0);
    const length = slides.length;

    const nextSlide = () => {
        setCurrent(current === length-1 ? 0 : current+1);
    };
    const prevSlide = () => {
        setCurrent(current === 0 ? length-1 : current-1);
    };

    if(!Array.isArray(slides) || slides.length <= 0){
        return null;
    }

  return (
    <section className='slider'>
        <ArrowBackIosIcon className='slider__left material-icons md-60' onClick={prevSlide}/>
        <ArrowForwardIosIcon className='slider__right material-icons md-60' onClick={nextSlide}/>
        {SliderData.map((slide, index) => {
            return (
                <div
                  className={index === current ? 'slide active' : 'slide'}
                  key={index}
                >
                  {index === current && (
                    <img src={slide.image} alt='travel image' className='slider__image' />
                  )}
                </div>
            );
        })}
    </section>
  );
};

export default ImageSlider;