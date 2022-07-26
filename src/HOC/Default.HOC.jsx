import React from "react";
import { Routes, Route } from "react-router-dom"

// Layout
import DefaultLayout from "../layouts/Default.layout"

const DefaultHOC = ({ element: Element, ...rest }) => {
    return <>
        <Routes>
            <Route
                {...rest}
                element={(props) => (
                    <DefaultLayout>
                        <Element {...props} />
                    </DefaultLayout>
                )} />
        </Routes>
    </>
}

export default DefaultHOC;