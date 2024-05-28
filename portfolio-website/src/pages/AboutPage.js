import React from "react";

const AboutPage = () => {
  return (
    <div className="flex flex-col">
      <h1 className="flex flex-row justify-start items-center h-[20vh] bg-lightgreen text-white text-7xl font-extrabold pl-[5vh]">
        About Me
      </h1>

      <div className="flex flex-row justify-between w-full h-full">
        <div className="flex flex-col items-start">
          <img src="https://placehold.co/600x400" alt="placeholder"></img>
        </div>
        <div className="flex flex-col items-start">
          <img src="https://placehold.co/600x400" alt="placeholder"></img>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
