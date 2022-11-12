import React, { useState } from "react";

export const PlayContext = React.createContext();

const PlayProvider = ({ children }) => {
    const [play, setPlay] = useState({
        id: 0,
        original_name: "",
        overview: "",
        poster_path: "",
    });

    return (
        <PlayProvider.Provider value={{ play, setPlay }}>
            {children}
        </PlayProvider.Provider>
    );
};

export default PlayContext; 