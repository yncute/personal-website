import React from "react";
import Skill from "../components/Skill";

import { SiCplusplus } from "react-icons/si";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { FaJava } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { FaReact } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa";

const SkillsPage = () => {
  return (
    <div className="flex flex-col items-start">
      <h1 className="flex flex-row justify-start items-center h-[20vh] w-full bg-lightgreen text-white text-7xl font-extrabold pl-[5vh]">
        Skills
      </h1>

      <div className="flex flex-row justify-around w-full h-full mt-[25vh]">
        <Skill text={"C++"}>
          <SiCplusplus className="w-20 h-20 mb-2"></SiCplusplus>
        </Skill>
        <Skill text={"HTML5"}>
          <FaHtml5 className="w-20 h-20 mb-2"></FaHtml5>
        </Skill>
        <Skill text={"CSS"}>
          <FaCss3Alt className="w-20 h-20 mb-2"></FaCss3Alt>
        </Skill>
        <Skill text={"JavaScript"}>
          <IoLogoJavascript className="w-20 h-20 mb-2"></IoLogoJavascript>
        </Skill>
        <Skill text={"Java"}>
          <FaJava className="w-20 h-20 mb-2"></FaJava>
        </Skill>
        <Skill text={"TailwindCSS"}>
          <RiTailwindCssFill className="w-20 h-20 mb-2"></RiTailwindCssFill>
        </Skill>
        <Skill text={"React"}>
          <FaReact className="w-20 h-20 mb-2"></FaReact>
        </Skill>
        <Skill text={"NodeJS"}>
          <FaNodeJs className="w-20 h-20 mb-2"></FaNodeJs>
        </Skill>
      </div>
    </div>
  );
};

export default SkillsPage;
