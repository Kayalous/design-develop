import React, { useEffect } from "react";
import Overlay from "./Overlay";
import Navdots from "./Navdots";
import Fullpage from "./Fullpage";
import Slide from "./Slide";
import IntroVid from "./resources/videos/intro.mp4";
import gamhraHeader from "./resources/images/project-images/gamhra-header.jpg";
import "./styles/home.css";
import { useSpring, animated } from "react-spring";
import Loader from "./Loader";

const calc = (x, y) => [x - window.innerWidth / 2, y - window.innerHeight / 2];
const trans1 = (x, y) => `translate3d(${x / 100}px,${y / 100}px,0)`;
const trans2 = (x, y) => `translate3d(${x / 25}px,${y / 25}px,0)`;

function Home() {
  const [props, set] = useSpring(() => ({
    xy: [0, 0],
    config: {
      mass: 10,
      tension: 550,
      friction: 140
    }
  }));
  const [isLoaded, setIsLoaded] = React.useState(undefined);
  const setLoader = () => {
    setIsLoaded(true);
  };
  return (
    <>
      {!isLoaded ? <Loader /> : ""}
      <div
        tabindex="0"
        className="home"
        onMouseMove={({ clientX: x, clientY: y }) =>
          set({
            xy: calc(x, y)
          })
        }
      >
        <Navdots springParams={props.xy}> </Navdots>{" "}
        <Fullpage>
          <Slide id="1" color="bg-red-200" active>
            <div className="relative flex w-full">
              <Overlay>
                <animated.div
                  className="z-10 container px-3 sm:px-0 sm:pt-16 pt-24 mx-auto"
                  style={{
                    transform: props.xy.interpolate(trans1)
                  }}
                >
                  <h1 className="text-4xl sm:text-left font-bold text-white text-center">
                    We're App-builders{" "}
                  </h1>{" "}
                  <h6 className="text-lg sm:text-left text-center text-white">
                    Authentic solutions through digital innovation{" "}
                  </h6>{" "}
                </animated.div>{" "}
              </Overlay>{" "}
              <video
                className="object-cover top-0 left-0"
                onCanPlayThrough={setLoader}
                autoPlay
                muted
                loop
                src={IntroVid}
              />{" "}
            </div>{" "}
          </Slide>
          <Slide full id="2" color="bg-blue-300">
            <div className="relative flex items-center justify-center w-full">
              <Overlay>
                <div className="z-10 container flex pl-4 pr-16 sm:px-10">
                  <animated.div className="w-full sm:w-1/2 h-full flex items-center flex-col sm:items-start justify-center slide-content-container">
                    <h1 className="text-6xl text-center sm:text-left text-white font-bold animated">
                      Gamhra{" "}
                    </h1>{" "}
                    <p className="text-white text-center sm:text-left bounceIn animated">
                      Lorem ipsum dolor sit amet consectetur, adipisicing
                      elit.Amet facere, fugiat unde harum velit rerum commodi
                      odit neque repellat alias nostrum recusandae laboriosam
                      officiis, deleniti obcaecati vitae a doloribus quis.{" "}
                    </p>{" "}
                    <br />
                    <a
                      href="#"
                      className="uppercase text-white border-2 border-white px-8 py-2 font-medium transition-all duration-200 hover:bg-white hover:border-0 hover:text-black animated"
                      id="btn"
                    >
                      see case study{" "}
                    </a>{" "}
                  </animated.div>{" "}
                </div>{" "}
              </Overlay>{" "}
              <animated.img
                className="header-img object-cover top-0 left-0"
                src={gamhraHeader}
                alt="Gamhra image"
                style={{
                  transform: props.xy.interpolate(trans2)
                }}
              />
            </div>{" "}
          </Slide>
          <Slide id="3" color="bg-green-300">
            <h1 className="my-auto text-6xl text-green-800"> Third </h1>{" "}
          </Slide>
          <Slide id="4" color="bg-indigo-300">
            <h1 className="my-auto text-6xl text-indigo-800"> Fourth </h1>{" "}
          </Slide>{" "}
        </Fullpage>{" "}
      </div>
    </>
  );
}
export default Home;
