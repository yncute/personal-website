import React from "react";
import NavArrow from "./NavArrow";
import Play from "../assets/Play.png";
import ProgressBar from "./ProgressBar";

const FooterBar = () => {
  return (
    <div className="fixed bottom-0 w-full h-[10vh] flex flex-col items-center justify-center bg-black-800">
      <div className="flex flex-row items-center justify-center gap-x-10 mb-3">
        <NavArrow direction={"prev"}></NavArrow>
        <button className="transform transition-transform duration-200 hover:scale-110 hover:cursor-pointer">
          <img className="w-10 h-10 " src={Play} alt="play button"></img>
        </button>
        <NavArrow direction={"next"}></NavArrow>
      </div>
      <div className="w-full flex justify-center mb-2">
        <ProgressBar></ProgressBar>
      </div>
    </div>
  );
};

export default FooterBar;
