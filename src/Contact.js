import React, { useEffect } from "react";
import Slide from "./Slide";
import Loader from "./Loader";

function Contact() {
  const [isLoaded, setIsLoaded] = React.useState(undefined);
  useEffect(() => {
    setTimeout(() => {
      setIsLoaded(true);
    }, 500);
  });
  return (
    <>
      {!isLoaded ? <Loader /> : ""}
      <Slide full id="1" color="bg-green-300">
        <h1 className="my-auto text-6xl text-green-800"> Contact </h1>{" "}
      </Slide>
    </>
  );
}

export default Contact;
