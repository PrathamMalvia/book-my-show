import React from 'react'
import Slider from 'react-slick';

// Component
import Poster from '../Poster/poster.component';

// Configs
import PosterCarouselSettings from "../../config/PosterCarousel.config";

const PosterSlider = (props) => {
    return (
        <>
            <div className='flex flex-col items-start my-2'>
                <h3 className={`font-bold text-2xl ${props.isDark ? "text-white" : "text-gray-800"}`}  >{props.title}</h3>
                <p className={`font-normal ${props.isDark ? "text-white" : "text-gray-800"}`} >{props.subtitle}</p>
            </div>
            <Slider {...PosterCarouselSettings}>
                {props.images.map((image) => (
                    <Poster {...image} isDark={props.isDark} />
                ))}

            </Slider>


        </>
    )
}

export default PosterSlider;