// import React from "react";

// const ProjectCard = ({ project }: { project: (typeof projects)[0] }) => {
//   return (
//     <motion.div
//       initial={{ opacity: 0, y: 20 }}
//       whileInView={{ opacity: 1, y: 0 }}
//       viewport={{ once: true, margin: "-50px" }}
//       transition={{ duration: 0.5 }}
//       className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 flex flex-col h-full"
//     >
//       <div className="h-48 overflow-hidden">
//         <img
//           src={`../../public/img/${project.image}`}
//           alt={project.title}
//           className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
//         />
//       </div>
//       <div className="p-6 flex-1 flex flex-col">
//         <h3 className="text-xl font-bold mb-2 text-gray-900">
//           {project.title}
//         </h3>
//         <p className="text-gray-600 mb-4 flex-1">{project.description}</p>

//         <div className="flex flex-wrap gap-2 mb-4">
//           {project.tags.map((tag, index) => (
//             <span
//               key={index}
//               className="px-2 py-1 bg-green-50 text-green-700 text-xs font-medium rounded-full"
//             >
//               {tag}
//             </span>
//           ))}
//         </div>

//         <div className="flex space-x-4 mt-auto pt-4 border-t border-gray-100">
//           {project.github && (
//             <a
//               href={project.github}
//               target="_blank"
//               rel="noopener noreferrer"
//               className="text-gray-700 hover:text-green-600 transition-colors flex items-center"
//               aria-label="View on GitHub"
//             >
//               <FiGithub className="mr-1" /> Code
//             </a>
//           )}
//           {project.demo && (
//             <a
//               href={project.demo}
//               target="_blank"
//               rel="noopener noreferrer"
//               className="text-gray-700 hover:text-green-600 transition-colors flex items-center"
//               aria-label="View live demo"
//             >
//               <FiExternalLink className="mr-1" /> Live Demo
//             </a>
//           )}
//         </div>
//       </div>
//     </motion.div>
//   );
// };

// export default ProjectCard;
