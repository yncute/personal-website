import React from "react";

const HorizontalScrollContainer = ({ children }) => {
  return (
    <div>
      <div className="overflow-x-auto whitespace-nowrap p-4 bg-gray-100">
        <div className="inline-flex space-x-4">{children}</div>
      </div>
    </div>
  );
};

export default HorizontalScrollContainer;
