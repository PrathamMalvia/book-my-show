import React from "react";

// Components
import EntertainmentCardSlider from "../components/Entertainment/EntertainmentCard.component";

const HomePage = () => {
    return <>
        <div className="container w-10/12 m-auto px-1">
            <h1 className="text-2xl font-bold text-gray-800 my-3 mx-3">The Best Of Entertainment</h1>
            <EntertainmentCardSlider />
        </div>
    </>
}

export default HomePage;