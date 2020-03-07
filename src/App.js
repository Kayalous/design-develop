import React from "react";
import Fullpage from "./Fullpage";
import Slide from "./Slide";
import Navbar from "./Navbar";
import Overlay from "./Overlay";
import Navdots from "./Navdots";
import IntroVid from "./resources/videos/intro.mp4";

function App() {
  return (
    <div className="overflow-hidden relative App">
      <Navbar />
      <Navdots></Navdots>
      <Fullpage>
        <Slide id="1" color="bg-red-200" active>
          <div className="relative flex">
            <Overlay lines>
              <div className="z-10 container sm:pt-16 pt-24 mx-auto">
                <h1 className="text-4xl sm:text-left font-bold text-white text-center">
                  We're App-builders
                </h1>
                <h6 className="text-lg sm:text-left text-center text-white">
                  Authentic solutions through digital innovation
                </h6>
              </div>
            </Overlay>
            <video autoPlay muted loop src={IntroVid} />
          </div>
        </Slide>

        <Slide id="2" color="bg-blue-300">
          <h1 className="my-auto text-6xl text-blue-800">Second</h1>
        </Slide>

        <Slide id="3" color="bg-green-300">
          <h1 className="my-auto text-6xl text-green-800">Third</h1>
        </Slide>

        <Slide id="4" color="bg-indigo-300">
          <h1 className="my-auto text-6xl text-indigo-800">Fourth</h1>
        </Slide>
      </Fullpage>
    </div>
  );
}

export default App;
