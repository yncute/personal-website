import React from "react";

const HorizontalScrollContainer = ({ children }) => {
  return (
    <div>
      <div className="overflow-x-auto whitespace-normal bg-black w-[full] h-[90vh] ml-[10vh] no-scrollbar">
        <div className="inline-flex space-x-4 h-full snap-x">{children}</div>
      </div>
    </div>
  );
};

export default HorizontalScrollContainer;
