import React, { useState, useEffect } from 'react'
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { useContext } from 'react';

// Component
// import Poster from '../components/Poster/poster.component';
import PlaysFilters from '../components/PlaysFilters/PlaysFilters.component';
import PosterSlider from '../components/PosterSlider/PosterSlider.component';

// context
import PlayContext from '../context/play.context';

const PlaysPage = () => {
    const { id } = useParams();
    const { plays } = useContext(PlayContext);
    const [latestPlays, setLatestPlays] = useState([]);
    const [popularPlays, setPopularPlays] = useState([]);
    const [topRatedPlays, setTopRatedPlays] = useState([]);

    useEffect(() => {
        const requestLatestPlays = async () => {
            const getLatestPlays = await axios.get(`/plays/tv/latest`);
            setLatestPlays(getLatestPlays.data.results);
        }
        requestLatestPlays();
    }, []);

    useEffect(() => {
        const requestPopularPlays = async () => {
            const getPopularPlays = await axios.get(`/plays/tv/popular`);
            setPopularPlays(getPopularPlays.data.results);
        }
        requestPopularPlays();
    }, []);

    useEffect(() => {
        const requestTopRatedPlays = async () => {
            const getTopRatedPlays = await axios.get(`/plays/tv/top_rated`);
            setTopRatedPlays(getTopRatedPlays.data.results);
        }
        requestTopRatedPlays();
    }, []);

    const settings = {
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 2,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    initialSlide: 2,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                },
            },
        ],
    };

    return (
        <>
            <div className='container mx-auto px-4 lg:w-4/5' >
                <div className='w-full lg:flex flex-row-reverse gap-5'>
                    <div className='lg:w-3/4'>
                        <h2 className='text-2xl font-bold mb-4'>Plays in Mumbai</h2>

                        <div>
                            <div className='my-8'>
                                <PosterSlider
                                    config={settings}
                                    images={latestPlays}
                                    isDark={false}
                                />
                            </div>
                            <div className='my-8'>
                                <PosterSlider
                                    config={settings}
                                    images={popularPlays}
                                    isDark={false}
                                />
                            </div>
                            <div className='my-8'>
                                <PosterSlider
                                    config={settings}
                                    images={topRatedPlays}
                                    isDark={false}
                                />
                            </div>
                        </div>
                    </div>
                </div>

                {/* Filters */}
                <div className='lg:w-1/5'>
                    <h2 className='text-2xl font-bold mb-4'>Filters</h2>
                    <div>
                        <PlaysFilters
                            title="Date"
                            tags={["Today", "Tomorrow", "This weekend"]}
                        />
                        <PlaysFilters
                            title="Language"
                            tags={["English", "Hindi", "Marathi"]}
                        />
                        <PlaysFilters
                            title="Categories"
                            tags={["E Sports", "Rugby", "Running", "Online Games", "Football", "Kho Kho"]}
                        />
                        <PlaysFilters
                            title="More Filters"
                            tags={["Kids Allowed", "Outdoor Events", "Online Streaming"]}
                        />
                        <PlaysFilters
                            title="Price"
                            tags={["Free", "0-500", "501-2000", "Above 2000"]}
                        />
                    </div>
                </div>

            </div>


        </>
    )
}

export default PlaysPage;