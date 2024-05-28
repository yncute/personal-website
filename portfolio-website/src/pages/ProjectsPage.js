import React from "react";
import ProjectCard from "../components/ProjectCard";

const ProjectsPage = () => {
  return (
    <div className="flex flex-col ">
      <h1 className="flex flex-row justify-start items-center h-[20vh] bg-lightgreen text-white text-7xl font-extrabold pl-[5vh]">
        Projects
      </h1>

      <div className="flex flex-row justify-start gap-4 w-full h-full">
        <ProjectCard
          title={"MyLuna"}
          madeWith={"React Native, Express, Node.js"}
          description={
            "Make tracking your macros fun by raising your virtual pet with the food you log! Share your progress with friends and keep each other in check!"
          }
          imageUrl="/assets/MyLunaPicCrop.png"
          githubLink={
            "https://github.com/Homestuck126/Luna-Avocado?tab=readme-ov-file"
          }
        ></ProjectCard>
        <ProjectCard
          title={"WaveFront Solutions"}
          madeWith={"Python"}
          description={
            "Class project to help a mock ship dock handle manifests optimally. Uses A* Search with different heuristics to calculate steps to move shipment containers to and from the ship and dock."
          }
          imageUrl="/assets/WaveFrontPic.png"
          githubLink={"https://github.com/minsooerickim/wavefrontsolutions"}
        ></ProjectCard>
      </div>
    </div>
  );
};

export default ProjectsPage;
