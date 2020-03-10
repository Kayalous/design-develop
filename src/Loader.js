import React from "react";
import {
  DyingLightLoader
} from "react-loaders-kit";

function Loader() {
  const loaderProps = {
    loading: true,
    size: 35,
    duration: 1,
    colors: ["#1A264E", "#FF0055"]
  };
  return ( <
    div className = "w-screen h-screen flex items-center bg-white justify-center z-50 absolute" >
    <
    DyingLightLoader {
      ...loaderProps
    }
    /> <
    /div>
  );
}

export default Loader;