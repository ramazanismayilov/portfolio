import { motion } from 'framer-motion';
import { FiGithub, FiExternalLink } from 'react-icons/fi';

const projects = [
  {
    id: 1,
    title: 'E-commerce Platform',
    description: 'A full-featured e-commerce platform with user authentication, product catalog, shopping cart, and payment integration.',
    tags: ['React', 'Node.js', 'MongoDB', 'Stripe', 'Redux'],
    image: 'https://via.placeholder.com/600x400/4ade80/ffffff?text=E-commerce+Platform',
    github: 'https://github.com/username/ecommerce-platform',
    demo: 'https://ecommerce-demo.example.com',
  },
  {
    id: 2,
    title: 'Task Management App',
    description: 'A collaborative task management application with real-time updates, drag-and-drop interface, and team collaboration features.',
    tags: ['React', 'TypeScript', 'Firebase', 'Tailwind CSS'],
    image: 'https://via.placeholder.com/600x400/60a5fa/ffffff?text=Task+Management',
    github: 'https://github.com/username/task-manager',
    demo: 'https://task-manager-demo.example.com',
  },
  {
    id: 3,
    title: 'Weather Dashboard',
    description: 'A weather application that displays current weather and forecast using a weather API with location detection.',
    tags: ['JavaScript', 'OpenWeather API', 'CSS3', 'HTML5'],
    image: 'https://via.placeholder.com/600x400/60a5fa/ffffff?text=Weather+Dashboard',
    github: 'https://github.com/username/weather-app',
    demo: 'https://weather-demo.example.com',
  },
  {
    id: 4,
    title: 'Recipe Finder',
    description: 'A web application to search for recipes based on ingredients with filtering options and favorite recipes functionality.',
    tags: ['React', 'Spoonacular API', 'Context API', 'CSS Modules'],
    image: 'https://via.placeholder.com/600x400/f59e0b/ffffff?text=Recipe+Finder',
    github: 'https://github.com/username/recipe-finder',
    demo: 'https://recipe-finder-demo.example.com',
  },
  {
    id: 5,
    title: 'Portfolio Website',
    description: 'A personal portfolio website to showcase projects, skills, and experience with a clean and modern design.',
    tags: ['React', 'Tailwind CSS', 'Framer Motion', 'Responsive Design'],
    image: 'https://via.placeholder.com/600x400/8b5cf6/ffffff?text=Portfolio',
    github: 'https://github.com/username/portfolio',
    demo: 'https://portfolio-demo.example.com',
  },
  {
    id: 6,
    title: 'Chat Application',
    description: 'A real-time chat application with private messaging, group chats, and online status indicators.',
    tags: ['React', 'Node.js', 'Socket.io', 'MongoDB'],
    image: 'https://via.placeholder.com/600x400/ec4899/ffffff?text=Chat+App',
    github: 'https://github.com/username/chat-app',
    demo: 'https://chat-demo.example.com',
  },
];

const ProjectCard = ({ project }: { project: typeof projects[0] }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5 }}
      className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 flex flex-col h-full"
    >
      <div className="h-48 overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
        />
      </div>
      <div className="p-6 flex-1 flex flex-col">
        <h3 className="text-xl font-bold mb-2 text-gray-900">{project.title}</h3>
        <p className="text-gray-600 mb-4 flex-1">{project.description}</p>

        <div className="flex flex-wrap gap-2 mb-4">
          {project.tags.map((tag, index) => (
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
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-700 hover:text-green-600 transition-colors flex items-center"
              aria-label="View on GitHub"
            >
              <FiGithub className="mr-1" /> Code
            </a>
          )}
          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-700 hover:text-green-600 transition-colors flex items-center"
              aria-label="View live demo"
            >
              <FiExternalLink className="mr-1" /> Live Demo
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
};

const Projects = () => {
  return (
    <section id="projects" className="py-16 md:py-24 bg-gray-50">
      <div className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="max-w-7xl mx-auto"
        >
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              My <span className="bg-clip-text text-transparent bg-gradient-to-r from-green-500 to-green-600">Projects</span>
            </h2>
            <div className="w-16 h-1 bg-gradient-to-r from-green-400 to-green-600 mx-auto"></div>
            <p className="mt-6 text-gray-600 max-w-2xl mx-auto">
              Here are some of my recent projects. Each project was built to solve a specific problem or explore new technologies.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>

          <div className="mt-12 text-center">
            <motion.a
              href="https://github.com/username"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-green-600 hover:bg-green-700 transition-colors duration-200"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <FiGithub className="mr-2" />
              View More on GitHub
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
