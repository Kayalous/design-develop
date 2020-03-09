import React, { useEffect } from "react";
import Slide from "./Slide";
import Loader from "./Loader";

function About() {
  const [isLoaded, setIsLoaded] = React.useState(undefined);
  useEffect(() => {
    setTimeout(() => {
      setIsLoaded(true);
    }, 500);
  });
  return (
    <>
      {isLoaded ? (
        <Slide full id="1" color="bg-blue-300">
          <h1 className="my-auto text-6xl text-blue-800"> About </h1>{" "}
        </Slide>
      ) : (
        <Loader />
      )}
    </>
  );
}

export default About;
