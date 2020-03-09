import React from "react";
import Slide from "./Slide";

function Projects() {
  return (
    <div className="min-w-screen min-h-screen relative">
      <Slide full id="1" color="bg-red-300">
        <h1 className="my-auto text-6xl text-red-800">Projects</h1>
      </Slide>
      <Slide full id="2" color="bg-blue-300">
        <h1 className="my-auto text-6xl text-blue-800">Projects</h1>
      </Slide>
    </div>
  );
}

export default Projects;
