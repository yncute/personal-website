import React from "react";
import { IoIosSkipForward } from "react-icons/io";
import { IoIosSkipBackward } from "react-icons/io";

//direction determines prev or next icon
//onClick takes an argument for prev/next
const NavArrow = ({ img, onClick }) => {
  const icons = [
    <IoIosSkipBackward className="size-[4vh] select-none text-white"></IoIosSkipBackward>,
    <IoIosSkipForward className="size-[4vh] select-none text-white"></IoIosSkipForward>,
  ];
  function handleOnClick() {
    if (img === 0) {
      onClick("prev");
    } else if (img === 1) {
      onClick("next");
    }
  }

  return (
    <button
      className="p-2 transform transition-transform duration-200 hover:scale-110"
      onClick={handleOnClick}
    >
      {/* <img
        className="w-5 h-5 select-none"
        src={iconSrc}
        alt="Next or Prev arrow button"
      ></img> */}
      {icons[img]}
    </button>
  );
};

export default NavArrow;
