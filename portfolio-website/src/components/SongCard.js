import React from "react";
import { IoSchoolOutline } from "react-icons/io5";
import { IoHomeOutline } from "react-icons/io5";
import { IoHammerOutline } from "react-icons/io5";
import { IoHandRightOutline } from "react-icons/io5";
import { BiMessage } from "react-icons/bi";

const SongCard = ({ img, onClick }) => {
  const icons = [
    <IoHomeOutline className="size-9/12"></IoHomeOutline>, //home
    <IoHammerOutline className="size-9/12"></IoHammerOutline>, //projects
    <IoHandRightOutline className="size-9/12"></IoHandRightOutline>, //interests
    <IoSchoolOutline className="size-9/12"></IoSchoolOutline>, //education
    <BiMessage className="size-9/12"></BiMessage>, //contact
  ];

  return (
    <div
      className={`flex items-center justify-center w-[8vh] h-[8vh] p-3 rounded-lg transition-colors duration-300 opacity-50 text-white hover:cursor-pointer hover:bg-hovergray hover:opacity-100`}
      onClick={onClick}
    >
      {icons[img]}
    </div>
  );
};

export default SongCard;
