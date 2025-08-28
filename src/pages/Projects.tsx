import { motion } from 'framer-motion';
import { FiGithub, FiLayers } from 'react-icons/fi';
import { FaCode } from 'react-icons/fa';
import { projectData } from '../data/project';
import ProjectCard from '../components/common/ProjectCard';

const Projects = () => {
  return (
    <section id="projects" className="py-20 md:py-28 bg-gradient-to-br from-gray-50 via-white to-emerald-50/20">
      <div className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="max-w-7xl mx-auto"
        >
          <div className="text-center mb-20">
            <motion.div
              className="inline-flex items-center gap-2 bg-green-100 text-green-600 px-4 py-2 rounded-full text-sm font-medium mb-6"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <FaCode size={16} />
              Professional Projects
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-4xl md:text-5xl font-bold mb-6 text-gray-900"
            >
              My{' '}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-emerald-500 via-green-500 to-emerald-600">
                Projects
              </span>
            </motion.h2>
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: 80 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="h-1.5 bg-gradient-to-r from-emerald-400 via-green-500 to-emerald-600 mx-auto rounded-full"
            ></motion.div>
          </div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16"
          >
            {projectData.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <ProjectCard project={item} />
              </motion.div>
            ))}
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-center"
          >
            <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8 max-w-md mx-auto">
              <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-r from-emerald-100 to-green-100 rounded-full mx-auto mb-4">
                <FiLayers className="text-emerald-600 text-xl" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3"> Want to see more?</h3>
              <p className="text-gray-600 mb-6 text-sm">  Check out my GitHub for more projects and contributions </p>
              <motion.a
                href="https://github.com/ramazanismayilov"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-emerald-500 to-green-500 text-white font-semibold rounded-xl hover:from-emerald-600 hover:to-green-600 transition-all duration-300 shadow-lg hover:shadow-xl"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <FiGithub className="mr-2 text-lg" />
                View More on GitHub
              </motion.a>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;