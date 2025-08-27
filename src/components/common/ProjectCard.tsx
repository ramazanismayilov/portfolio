import { motion } from 'framer-motion';
import { FiExternalLink, FiGithub } from 'react-icons/fi';
import { Link } from "react-router-dom";
import { ProjectCardProps } from '../../types/project';
import { useState } from 'react';
import ProjectModal from './ProjectModal';

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  const [openModal, setOpenModal] = useState(false);

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.5 }}
        className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 flex flex-col h-full"
      >
        <div onClick={() => setOpenModal(true)} className="h-48 overflow-hidden mt-3 cursor-pointer">
          <img
            src={`img/${project.image}`}
            alt={project.title}
            className="w-full h-full object-contain hover:scale-105 transition-transform duration-500"
          />
        </div>
        <div className="p-6 flex-1 flex flex-col">
          <h3 className="text-xl font-bold mb-2 text-gray-900">{project.title}</h3>
          <p className="text-gray-600 mb-4 flex-1">
            {project.description.length > 120
              ? `${project.description.slice(0, 120)}...`
              : project.description
            }
          </p>
          <div className="flex flex-wrap gap-2 mb-4">
            {project.tags.slice(0, 5).map((tag, index) => (
              <span
                key={index}
                className="px-2 py-1 bg-green-50 text-green-700 text-xs font-medium rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>
          <div className="flex space-x-4 mt-auto pt-4 border-t border-gray-100">
            {project.github && (
              <Link
                to={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-700 hover:text-green-600 transition-colors flex items-center"
                aria-label="View on GitHub"
              >
                <FiGithub className="mr-1" /> Code
              </Link>
            )}
            {project.demo && (
              <Link
                to={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-700 hover:text-green-600 transition-colors flex items-center"
                aria-label="View live demo"
              >
                <FiExternalLink className="mr-1" /> Live Demo
              </Link>
            )}
          </div>
        </div>
      </motion.div>

      {openModal && (
        <ProjectModal
          size="5xl"
          title={project.title}
          description={project.description}
          skills={project.tags}
          detailedFeatures={project.detailedFeatures}
          openModal={openModal}
          setOpenModal={setOpenModal}
        />
      )}
    </>
  );
};

export default ProjectCard;