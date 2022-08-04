import React from "react";

// Components
import EntertainmentCardSlider from "../components/Entertainment/EntertainmentCard.component";
import PosterSlider from "../components/PosterSlider/PosterSlider.component";

// config
import TempPosters from "../config/TempPosters.config";

const HomePage = () => {
    return <>
        <div className="flex flex-col gap-14">
            <div className="container mx-auto w-10/12 ">
                <h1 className="text-2xl font-bold text-gray-800 my-3 mx-3">The Best Of Entertainment</h1>
                <EntertainmentCardSlider />

            </div>

            <div className="bg-bms-800 py-12">

                <div className="conatainer mx-auto w-9/12 flex flex-col gap-3">
                    <div className="hidden md:flex">
                        <img
                            src="https://assets-in.bmscdn.com/discovery-catalog/collections/tr:w-1440,h-120:q-80/premiere-rupay-banner-web-collection-202104230555.png"
                            alt="Premier"
                            className="w-full h-full"
                        />
                    </div>
                    <PosterSlider
                        images={TempPosters}
                        title="Premieres"
                        subtitle="Brand new releases on every Friday"
                        isDark
                    />
                </div>
            </div>
        </div>

        <div className="container mx-auto px-4 my-10 w-9/12">
            <PosterSlider
                images={TempPosters}
                title="Online Streaming Events"
                isDark={false}
            />
        </div>

        <div className="container mx-auto px-4 my-8 w-9/12">
            <PosterSlider
                images={TempPosters}
                title="Outdoor Events"
                isDark={false}
            />
        </div>
    </>
}

export default HomePage;


