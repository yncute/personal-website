import React from "react";

const NavBar = ({ children }) => {
  return (
    <div className="fixed gap-2 left-0 h-screen w-[10vh] bg-black p-2 mb-[10vh]">
      <div className="flex flex-col bg-darkgray rounded h-[89vh]">
        {children}
      </div>
    </div>
  );
};

export default NavBar;
