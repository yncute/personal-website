import React, { useState, useRef } from "react";

const ProgressBar = () => {
  const [progress, setProgress] = useState(0); //0-100
  const progressBarRef = useRef(null);

  const handleMouseDown = (e) => {
    const updateProgress = (e) => {
      const rect = progressBarRef.current.getBoundingClientRect();
      const newProgress = Math.min(
        Math.max(0, e.clientX - rect.left),
        rect.width
      );
      setProgress((newProgress / rect.width) * 100);
    };

    updateProgress(e);

    const handleMouseMove = (e) => {
      updateProgress(e);
    };

    const handleMouseUp = () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseup", handleMouseUp);
  };

  return (
    <div
      ref={progressBarRef}
      className="w-2/5 bg-gray-200 rounded-full h-1 dark:bg-gray-700 group relative "
      onMouseDown={handleMouseDown}
    >
      <div
        className={`bg-white h-full rounded-full w-6/12 group-hover:bg-green-500 relative`}
        style={{ width: `${progress}%` }}
      >
        <div className="absolute right-0 top-1/2 transform translate-x-1/2 -translate-y-1/2 w-3 h-3 bg-white rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-0"></div>
      </div>
    </div>
    // <div
    //   ref={progressBarRef}
    //   className="relative w-full h-4 bg-gray-300 rounded-lg cursor-pointer"
    //   onMouseDown={handleMouseDown}
    // >
    //   <div
    //     className="absolute h-full bg-blue-500 rounded-lg"
    //     style={{ width: `${progress}%` }}
    //   />
    //   <div
    //     className="absolute top-0 h-full w-4 bg-blue-700 rounded-full cursor-pointer"
    //     style={{ left: `calc(${progress}% - 8px)` }}
    //     onMouseDown={handleMouseDown}
    //   />
    // </div>
  );
};

export default ProgressBar;
