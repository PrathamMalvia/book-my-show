import React from 'react';
import Slider from 'react-slick';

// Component
import Poster from '../Poster/poster.component';

// Configs
import PosterCarouselSettings from "../../config/PosterCarousel.config";
import PremierImages from "../../config/TempPosters.config";

const Premier = () => {

    return (
        <>
            <div className='flex flex-col items-start'>
                <h3 className='text-white font-bold text-2xl'>Premieres</h3>
                <p className='text-white font-normal'>Brand new releases every Friday</p>
            </div>
            <Slider {...PosterCarouselSettings}>
                {PremierImages.map((image) => (
                    <Poster {...image} isDark />
                ))}

            </Slider>
        </>


    )
}

export default Premier