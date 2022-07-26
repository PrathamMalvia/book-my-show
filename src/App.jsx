import React from "react";
import { Routes, Route, Router } from "react-router-dom";

// HOC
import DefaultHOC from "./HOC/Default.HOC";

// Components
import Temp from "./components/temp";

function App() {
  return (
    <>

      <DefaultHOC exact path="/" element={<Temp />} />

    </>
  );
}

export default App;
