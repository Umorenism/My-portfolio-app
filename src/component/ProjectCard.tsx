import React from "react";

interface ProjectCardProps {
  img: string;
  title: string;
  content: string;
  onReadMore: () => void;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  img,
  title,
  content,
  onReadMore,
}) => {
  return (
    <div className="bg-gray-800 p-4 rounded-lg shadow-lg">
      <img
        src={img}
        alt={title}
        className="w-full h-40 object-cover rounded-t-lg"
      />
      <h2 className="text-xl font-bold mt-4">{title}</h2>
      <p className="mt-2">{content}</p>
      <button
        onClick={onReadMore}
        className="mt-4 bg-blue-500 text-white py-2 px-4 rounded"
      >
        GitHub
      </button>
    </div>
  );
};

export default ProjectCard;
