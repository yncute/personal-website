import React, { useState } from "react";

const SongCard = ({ title, desc, img }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={`w-64 h-64 p-4 rounded-lg transition-colors duration-300 ${
        isHovered
          ? "bg-blue-500 text-white cursor-pointer"
          : "bg-white text-black"
      }`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <img
        src="https://via.placeholder.com/150"
        alt="song card"
        className="w-full h-32 object-cover rounded-lg mb-4"
      ></img>
      <h2 className="text-xl font-bold mb-2">Preview Card</h2>
      <p className="text-base">This is a preview card.</p>
    </div>
  );
};

export default SongCard;
