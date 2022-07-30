import React from "react";

export const PrevArrow = (props) => {
    return (
        <>
            <div
                className={props.className}
                style={{ ...props.style, backgroundColor: "black" }}
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
                style={{ ...props.style, backgroundColor: "black" }}
                onClick={props.onClick}
            />
        </>
    )
};

