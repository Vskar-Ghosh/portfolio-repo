import React from "react";
import RoundOne from "./components/roundDesgins/RoundOne";
import RoundTow from "./components/roundDesgins/RoundTow";
import RoundThree from "./components/roundDesgins/RoundThree";
import RoundedFour from "./components/roundDesgins/RoundedFour";
import RoundFive from "./components/roundDesgins/RoundFive";
import Home from "./Home";

function App() {
  return (
    <div className="w-full h-screen font-bodyfont text-textColor bg-black relative overflow-hidden">
      <div className=" max-w-screen-2xl h-full mx-auto flex justify-center items-center">
        <Home />
      </div>
      <div className="w-full h-full absolute top-0 left-0 z-10">
        <RoundOne />
        <RoundTow />
        <RoundThree />
        <RoundedFour />
        <RoundFive />
      </div>
    </div>
  );
}

export default App;
