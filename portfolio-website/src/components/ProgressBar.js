import React from "react";

const ProgressBar = () => {
  return (
    <div className="w-2/5 bg-gray-200 rounded-full h-1 dark:bg-gray-700 group relative">
      <div className="bg-white h-full rounded-full w-6/12 group-hover:bg-green-500 relative">
        <div className="absolute right-0 top-1/2 transform translate-x-1/2 -translate-y-1/2 w-3 h-3 bg-white rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-0"></div>
      </div>
    </div>
  );
};

export default ProgressBar;
