import React from "react";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

const HomePage = () => {
  return (
    <div className="flex flex-col items-center space-y-20">
      <h1 className="flex flex-row justify-start items-center h-[20vh] w-full bg-lightgreen text-white text-7xl font-extrabold pl-[5vh]">
        Home
      </h1>

      <div className="flex flex-col items-center justify-center w-[80vw] h-full ">
        <img
          src="/assets/MeCrop.png"
          alt="Me"
          className="size-[30vh] object-contain rounded-full border-white border-8"
        ></img>
        <p className="text-5xl font-bold text-center text-black">
          Hello! I'm Jalen, a Computer Science student at UC Riverside. I'm
          eager to improve my frontend web development skills with React and
          Tailwind.
        </p>
        <div className="flex flex-row items-center mt-8 gap-4">
          <a
            href="https://github.com/yncute"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center bg-black text-white font-bold py-2 px-4 gap-2 rounded hover:opacity-80 "
          >
            Github
            <FaGithub></FaGithub>
          </a>
          <a
            href="https://www.linkedin.com/in/jalen-dioneda-4b9713195/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center bg-black text-white font-bold py-2 px-4 gap-2 rounded hover:opacity-80"
          >
            LinkedIn
            <FaLinkedin></FaLinkedin>
          </a>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
