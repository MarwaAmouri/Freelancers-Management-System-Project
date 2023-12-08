import React from 'react'
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export default function HomeSlider({ images }) {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true, 
        autoplaySpeed: 2000,
      };
  return (
    <div 
    className='w-91 h-90 shadow-2xl'>    
        <Slider {...settings}>
            {images.map((image, index) => (
            <div key={index}>
                <img 
                src={image} 
                alt={`slide-${index}`} 
                className="lg:h-90 lg:w-91 rounded-md "/>
            </div>
            ))}
        </Slider>
  </div>
  )
}

