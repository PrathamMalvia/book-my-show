import React from "react";

// HOC
import DefaultHOC from "./HOC/Default.HOC";

// Components
import Temp from "./components/temp";

function App() {
  return (
    <>
      <DefaultHOC exact path="/" component={Temp} />
    </>
  );
}

export default App;
