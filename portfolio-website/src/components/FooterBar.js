import React from "react";
import NavArrow from "./NavArrow";
import ProgressBar from "./ProgressBar";
import { IoPlayCircle } from "react-icons/io5";

const FooterBar = () => {
  return (
    <div className="fixed bottom-0 w-full h-[10vh] flex flex-col items-center justify-center bg-black">
      {/* <div className="flex flex-row items-center justify-center gap-x-10 my-2">
        <NavArrow img={0}></NavArrow>
        <button className="transform transition-transform duration-200 hover:scale-110 hover:cursor-pointer">
          <IoPlayCircle className="size-[6vh] text-white select-none"></IoPlayCircle>
        </button>
        <NavArrow img={1}></NavArrow>
      </div> */}
      <div className="w-full flex justify-center items-center">
        <ProgressBar></ProgressBar>
      </div>
    </div>
  );
};

export default FooterBar;
