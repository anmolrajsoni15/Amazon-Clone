import React from 'react';
import ImageSlider from './component/ImageSlider';
import { SliderData } from './component/SliderData';
import "./Home.css";
import Product from './Product';

function Home() {
  return (
    <div className="home">
        <ImageSlider slides={SliderData}/>;
        {/* <img className="home__image" src="https://m.media-amazon.com/images/I/51m54DCon8L._SX1500_.jpg" alt=''/> */}
    <div className='home__row'>
        <Product
            id="12321341"
            title="The Lean Startup: How Constant Innovation Creates Radically Successfull Businesses"
            price={550}
            rating={5}
            image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._SX325_B01,204,203,200_.jpg"
        />
        <Product
            id="12321342"
            title="Echo Dot (3rd Gen) - #1 smart speaker brand in India with Alexa (Black)"
            price={3499}
            rating={4}
            image="https://m.media-amazon.com/images/I/61+QNG8IiPL._SX679_.jpg"
        />
    </div>
    <div className='home__row'>
        <Product
            id="12321343"
            title="OPPO F21 Pro (Sunset Orange, 8GB RAM, 128 Storage) with No Cost EMI/Additional Exchange Offers"
            price={22999}
            rating={3}
            image="https://images-eu.ssl-images-amazon.com/images/I/41zL6EeHU7L._SX300_SY300_QL70_FMwebp_.jpg"
        />
        <Product
            id="12321344"
            title="Fastrack Reflex 3.0 Unisex Activity Tracker - Full Touch, Color Display, Heart Rate Monitor, Dual- Tone Silicone Strap"
            price={1795}
            rating={4}
            image="https://m.media-amazon.com/images/I/61u2Rr7tBRL._UX679_.jpg"
        />
        <Product
            id="12321345"
            title="Philips HL7756/00 Mixer Grinder, 750W, 3 Jars (Black)"
            price={3480}
            rating={4}
            image="https://m.media-amazon.com/images/I/51B0MPbLbXL._SX679_.jpg"
        />
    </div>
    <div className='home__row'>
        <Product
            id="12321346"
            title="LG 108 cm (43 inches) 4K Ultra HD Smart LED TV 43UP7500PTZ (Rocky Black) (2021 Model)"
            price={33999}
            rating={5}
            image="https://m.media-amazon.com/images/I/61w4rOm+j3L._SX300_SY300_.jpg"
        />
    </div>

    </div>
  )
}

export default Home