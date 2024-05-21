import React from "react";
import next from "../assets/Next.png";
import prev from "../assets/Prev.png";

//direction determines prev or next icon
//onClick takes an argument for prev/next
const NavArrow = ({ direction, onClick }) => {
  const iconSrc = direction === "prev" ? prev : next;

  function handleOnClick() {
    if (iconSrc === prev) {
      onClick("prev");
    } else if (iconSrc === next) {
      onClick("next");
    }
  }

  return (
    <button
      className="p-2 transform transition-transform duration-200 hover:scale-110"
      onClick={handleOnClick}
    >
      {/* <p>{">"}</p> */}
      <img
        className="w-5 h-5"
        src={iconSrc}
        alt="Next or Prev arrow button"
      ></img>
    </button>
  );
};

export default NavArrow;
