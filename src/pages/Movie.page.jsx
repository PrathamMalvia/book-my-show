import React from 'react'
import { FaCcVisa, FaCcApplePay } from "react-icons/fa";

// Component
import MovieHero from '../components/MovieHero/MovieHero.component';
import Cast from '../components/Cast/Cast.component';
import PosterSlider from "../components/PosterSlider/PosterSlider.component";

// config
import TempPosters from "../config/TempPosters.config";

const MoviePage = () => {
    const settings = {
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                },
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
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
            <MovieHero />
            <div className="my-12 container  px-4 lg:ml-20 lg:w-2/3">
                <div className="flex flex-col items-start gap-3">
                    <h2 className="text-gray-800 font-bold text-2xl">About the movie</h2>
                    <p>Almost half a century ago, a remote village in the middle of a tropical rainforest starts witnessing a series of unexplainable events which they attribute to the supernatural. This coincides with the arrival of an eccentric police officer, Vikrant Rona. A mysterious game unfolds where everyone in the village is a potential victim and everyone is a suspect.</p>
                </div>
                <div className="my-8">
                    <hr />
                </div>

                <div className="my-8">
                    <h2 className="text-gray-800 font-bold text-2xl mb-3">
                        Applicable offers
                    </h2>

                    <div className="flex flex-col gap-3 lg:flex-row">
                        <div className="flex item-start gap-2 bg-yellow-100 p-3 border-yellow-400 border-dashed border-2 rounded-md">
                            <div className="w-8 h-8">
                                <FaCcVisa className="w-full h-full" />
                            </div>
                            <div className="flex flex-col items-start">
                                <h3 className="text-gray-700 text-xl font-bold">
                                    Visa Stream Offer
                                </h3>
                                <p className="text-gray-600">
                                    Get 50% off up to INR 150 on all RuPay cards* on BookMyShow
                                    Stream.
                                </p>
                            </div>
                        </div>
                        <div className="flex item-start gap-2 bg-yellow-100 p-3 border-yellow-400 border-dashed border-2 rounded-md">
                            <div className="w-8 h-8">
                                <FaCcApplePay className="w-full h-full" />
                            </div>
                            <div className="flex flex-col items-start">
                                <h3 className="text-gray-700 text-xl font-bold">Filmy Pass</h3>
                                <p className="text-gray-600">
                                    Get Rs.75* off on 3 movies you buy/rent on Stream. Buy Filmy
                                    Pass @Rs.99
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="my-8">
                    <hr />
                </div>

                <div className='my-8'>
                    <h2 className="text-gray-800 font-bold text-2xl mb-4">Cast & Crew</h2>

                    <div className='flex flex-wrap gap-4'>
                        <Cast image="https://assets-in.bmscdn.com/iedb/artist/images/website/poster/large/kiccha-sudeep-2264-17-12-2018-03-28-19.jpg"
                            castName="Henry Cavil"
                            role="Superman"
                        />
                        <Cast image="https://assets-in.bmscdn.com/iedb/artist/images/website/poster/large/nirup-bhandari-1055502-1655202563.jpg"
                            castName="Nirup Bhandari"
                            role="act"
                        />
                        <Cast image="https://assets-in.bmscdn.com/iedb/artist/images/website/poster/large/jacqueline-fernandez-16339-13-09-2017-06-42-10.jpg"
                            castName="Jacqueline Fernandez"
                            role="act"
                        />
                        <Cast image="https://assets-in.bmscdn.com/iedb/artist/images/website/poster/large/neetha-ashok-2016272-1658656420.jpg"
                            castName="Neetha Ashok"
                            role="act"
                        />
                    </div>
                </div>

                <div className="my-8">
                    <hr />
                </div>

                <div className='my-8'>
                    <PosterSlider
                        config={settings}
                        images={TempPosters}
                        title="You might also like"
                        isDark={false}
                    />

                </div>

                <div className="my-8">
                    <hr />
                </div>

                <div className='my-8'>
                    <PosterSlider
                        config={settings}
                        images={TempPosters}
                        title="BMS XCLUSIV"
                        isDark={false}
                    />

                </div>
            </div>
        </>
    )
}

export default MoviePage;