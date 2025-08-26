import { motion } from 'framer-motion';

const experiences = [
  {
    id: 1,
    role: 'Frontend (Angular) Developer',
    company: 'Uniser Group MMC',
    location: 'Baku, Azerbaijan',
    duration: '12/2024 to present',
    description: [
      'Development of multi-role and multi-level access systems with advanced user permission management',
      'Integration of SİMA electronic signature system for secure authentication and document signing',
      'Implementation of online payment systems and integration with government payment services',
      'Creation of management dashboards, analytical reports, and data visualizations',
      'Optimization of RESTful API communication between frontend and backend services'
    ],
  },
  {
    id: 2,
    role: 'Frontend (React) Developer',
    company: 'Smart Business LLC',
    location: 'Baku, Azerbaijan',
    duration: '04/2024 to 08/2024',
    description: [
      'I worked as part of a team on developing a POS and inventory management system for stores and restaurants',
      'I implemented the frontend using React.js, creating a responsive and user-friendly interface',
      'I collaborated closely with backend developers and team members to deliver a fully functional and efficient system.'
    ],
  },
  {
    id: 3,
    role: 'Frontend (Angular) Developer(intern)',
    company: 'Invawe',
    location: 'Baku, Azerbaijan',
    duration: '07/2024 to 09/2024',
    description: [
      'Developing and maintaining an internal company system using Angular to streamline internal processes and enhance productivity',
      'Collaborating closely with backend developers and UI/UX designers to create a cohesive, scalable, and efficient system tailored to the company’s needs'
    ],
  },
];

const Experience = () => {
  return (
    <section id="experience" className="py-16 md:py-24 bg-gray-50">
      <div className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="max-w-6xl mx-auto"
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Work <span className="bg-clip-text text-transparent bg-gradient-to-r from-green-500 to-green-600">Experience</span>
            </h2>
            <div className="w-16 h-1 bg-gradient-to-r from-green-400 to-green-600 mx-auto"></div>
          </div>

          <div className="relative">
            <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gray-300 transform md:-translate-x-px"></div>

            {experiences.map((exp, index) => (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`relative flex items-center mb-8 ${index % 2 === 0 ? 'md:flex-row-reverse' : ''
                  }`}
              >
                <div className="absolute left-8 md:left-1/2 w-4 h-4 bg-green-500 rounded-full border-4 border-white shadow-lg transform -translate-x-2 md:-translate-x-2 z-10"></div>
                <div className={`w-full md:w-1/2 ml-16 md:ml-0 ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'
                  }`}>
                  <div className="bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 p-6 border border-gray-100">
                    <div className="mb-3">
                      <h3 className="text-xl font-bold text-gray-900 mb-1">{exp.role}</h3>
                      <div className="flex flex-wrap items-center gap-2 text-sm">
                        <span className="text-green-600 font-semibold">{exp.company}</span>
                        <span className="text-gray-400">•</span>
                        <span className="text-gray-500 italic">{exp.location}</span>
                        <span className="text-gray-400">•</span>
                        <span className="text-gray-500">{exp.duration}</span>
                      </div>
                    </div>

                    <ul className="space-y-2">
                      {exp.description.map((item, i) => (
                        <li key={i} className="flex items-start text-sm">
                          <span className="text-green-500 mr-2 mt-1 text-xs">▸</span>
                          <span className="text-gray-600 leading-relaxed">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div className="hidden md:block w-1/2"></div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;