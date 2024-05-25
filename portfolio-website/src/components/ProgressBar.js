import React, { useState, useRef } from "react";
import { useScrollContext } from "./ScrollProvider";

const ProgressBar = () => {
  const { scrollRatio, setScrollRatio } = useScrollContext();
  const [isClicked, setIsClicked] = useState(false);
  const progressBarRef = useRef(null);

  const normalize = (value) => {
    return Math.min(Math.max(value * 100, 0), 100);
  };

  const handleMouseDown = (e) => {
    setIsClicked(true);
    const updateProgress = (e) => {
      const rect = progressBarRef.current.getBoundingClientRect();
      const newProgress = Math.min(
        Math.max(0, e.clientX - rect.left),
        rect.width
      );
      const newScrollRatio = newProgress / rect.width;
      setScrollRatio(newScrollRatio);
      //console.log(`progress:${progress / 100}`);

      const totalScrollableWidth =
        document.documentElement.scrollWidth - window.innerWidth;
      window.scrollTo({ left: newScrollRatio * totalScrollableWidth });
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
      className="w-2/5 bg-gray rounded-full h-1 dark:bg-gray-700 group relative "
      onMouseDown={handleMouseDown}
    >
      <div
        className={`${
          isClicked ? "bg-green" : "bg-white"
        } h-full rounded-full group-hover:bg-green-500 relative`}
        style={{ width: `${normalize(scrollRatio)}%` }}
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
