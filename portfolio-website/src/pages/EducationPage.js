import React from "react";
import Education from "../components/Education";

const EducationPage = () => {
  return (
    <div className="flex flex-col items-center">
      <h1 className="flex flex-row justify-start items-center h-[20vh] w-full bg-lightgreen text-white text-7xl font-extrabold pl-[5vh]">
        Education
      </h1>
      <div className="mt-[20vh]">
        <Education
          imageSrc="/assets/UCRLogo.png"
          degree={"Bachelor's in Computer Science"}
          university={"University of California Riverside"}
          graduationDate={"June 2023"}
        ></Education>
      </div>
    </div>
  );
};

export default EducationPage;
