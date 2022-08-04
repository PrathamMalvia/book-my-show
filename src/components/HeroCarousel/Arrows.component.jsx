import React from "react";

export const PrevArrow = (props) => {
    return (
        <>
            <div
                className={props.className}
                style={{ ...props.style, margin: "10px", backgroundColor: "transparent", border: "none" }}
                onClick={props.onClick}
            />
        </>
    )
};

export const NextArrow = (props) => {
    // className
    // style
    // onClick
    return (
        <>
            <div
                className={props.className}
                style={{ ...props.style, margin: "10px", backgroundColor: "transparent", border: "none" }}
                onClick={props.onClick}
            />
        </>
    )
};

