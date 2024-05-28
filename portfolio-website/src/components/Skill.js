import React from "react";

const Skill = ({ text, children }) => {
  return (
    <div className="flex flex-col items-center justify-center p-4 rounded hover:scale-110">
      <div>{children}</div>
      <p className="text-lg font-medium text-darkgray">{text}</p>
    </div>
  );
};

export default Skill;
