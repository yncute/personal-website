import React, { useState, useRef } from "react";

const ProgressBar = () => {
  const [progress, setProgress] = useState(0); //0-100
  const [isClicked, setIsClicked] = useState(false);
  const progressBarRef = useRef(null);

  const handleMouseDown = (e) => {
    setIsClicked(true);
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
      setIsClicked(false);
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
        className={`${
          isClicked ? "bg-green-500" : "bg-white"
        } h-full rounded-full group-hover:bg-green-500 relative`}
        style={{ width: `${progress}%` }}
      >
        <div
          className={`absolute right-0 top-1/2 transform translate-x-1/2 -translate-y-1/2 w-3 h-3 bg-white rounded-full ${
            isClicked ? "opacity-100" : "opacity-0"
          } group-hover:opacity-100 transition-opacity duration-0`}
        ></div>
      </div>
    </div>
  );
};

export default ProgressBar;
