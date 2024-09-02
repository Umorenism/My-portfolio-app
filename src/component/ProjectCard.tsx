import React from "react";
import { motion } from "framer-motion";

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
    <motion.div
      className="bg-gray-600 p-4 rounded-lg shadow-lg"
      whileHover={{
        scale: 1.05,
        boxShadow: "0px 10px 30px rgba(0, 0, 0, 0.2)",
      }}
      transition={{ type: "spring", stiffness: 300 }}
    >
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
    </motion.div>
  );
};

export default ProjectCard;
