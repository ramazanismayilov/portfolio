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
        className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col h-full border border-gray-100 group"
        whileHover={{ y: -8 }}
      >
        <div onClick={() => setOpenModal(true)} className="h-56 overflow-hidden cursor-pointer relative bg-gradient-to-br from-gray-50 to-gray-100">
          <img
            src={`img/${project.image}`}
            alt={project.title}
            className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-700 p-4"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        </div>
        <div className="p-6 flex-1 flex flex-col">
          <h3 className="text-xl font-bold mb-3 text-gray-800 group-hover:text-emerald-600 transition-colors duration-300">
            {project.title}
          </h3>
          <p className="text-gray-600 mb-6 flex-1 leading-relaxed text-sm">
            {project.description.length > 120
              ? `${project.description.slice(0, 120)}...`
              : project.description
            }
          </p>
          <div className="flex flex-wrap gap-2 mb-6">
            {project.tags.slice(0, 4).map((tag, index) => (
              <span
                key={index}
                className="px-3 py-1.5 bg-gradient-to-r from-emerald-50 to-green-50 text-emerald-700 text-xs font-medium rounded-full border border-emerald-100 hover:border-emerald-200 transition-colors duration-200"
              >
                {tag}
              </span>
            ))}
            {project.tags.length > 4 && (
              <span className="px-3 py-1.5 bg-gray-100 text-gray-600 text-xs font-medium rounded-full">
                +{project.tags.length - 4} more
              </span>
            )}
          </div>
          <div className="flex space-x-4 mt-auto pt-4 border-t border-gray-100">
            {project.github && (
              <Link
                to={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center px-4 py-2 text-gray-700 hover:text-emerald-600 hover:bg-emerald-50 rounded-lg transition-all duration-200 text-sm font-medium"
                aria-label="View on GitHub"
              >
                <FiGithub className="mr-2" /> Code
              </Link>
            )}
            {project.demo && (
              <Link
                to={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center px-4 py-2 bg-gradient-to-r from-emerald-500 to-green-500 text-white rounded-lg hover:from-emerald-600 hover:to-green-600 transition-all duration-200 text-sm font-medium shadow-sm hover:shadow-md"
                aria-label="View live demo"
              >
                <FiExternalLink className="mr-2" /> Live Demo
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