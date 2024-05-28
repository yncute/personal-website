import React from "react";

const ProjectCard = ({
  title,
  madeWith,
  description,
  imageUrl,
  githubLink,
}) => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white">
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{title}</div>
        <div className="text-gray-700 text-base mb-4">
          <strong>Made with: </strong>
          {madeWith}
        </div>
        <p className="text-gray-700 text-base">{description}</p>
      </div>
      <img
        className="w-full h-[33vh] object-contain"
        src={imageUrl}
        alt={title}
      />
      <div className="m-2">
        <a
          href={githubLink}
          target="blank"
          className="inline-block bg-blue-500 hover:bg-blue-700 text-gray font-bold py-2 px-4 rounded"
        >
          View on GitHub
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;
