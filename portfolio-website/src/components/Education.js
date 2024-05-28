import React from "react";

const Education = ({ imageSrc, degree, university, graduationDate }) => {
  return (
    <div className="flex items-center p-4 bg-white rounded shadow-lg transition-transform duration-100 hover:scale-105">
      <img src={imageSrc} alt={university} className="w-24 h-24 rounded mr-4" />
      <div className="flex flex-col">
        <h2 className="text-xl font-bold text-black">{degree}</h2>
        <p className="text-gray">{university}</p>
        <p className="text-gray">{graduationDate}</p>
      </div>
    </div>
  );
};

export default Education;
