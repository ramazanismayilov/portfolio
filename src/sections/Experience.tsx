import { motion } from 'framer-motion';

const experiences = [
  {
    id: 1,
    role: 'Senior Frontend Developer',
    company: 'Tech Innovations Inc.',
    duration: '2021 - Present',
    description: [
      'Led a team of 5 developers in building a scalable e-commerce platform using React, TypeScript, and Node.js',
      'Improved application performance by 40% through code optimization and implementing lazy loading',
      'Mentored junior developers and conducted code reviews to maintain code quality',
      'Collaborated with UX/UI designers to implement responsive and accessible components',
    ],
  },
  {
    id: 2,
    role: 'Full Stack Developer',
    company: 'Digital Solutions LLC',
    duration: '2019 - 2021',
    description: [
      'Developed and maintained multiple client websites using React, Node.js, and MongoDB',
      'Implemented RESTful APIs and integrated third-party services',
      'Reduced server response time by 30% through database optimization',
      'Worked closely with clients to gather requirements and provide technical solutions',
    ],
  },
  {
    id: 3,
    role: 'Junior Web Developer',
    company: 'WebCraft Studio',
    duration: '2017 - 2019',
    description: [
      'Built responsive websites using HTML, CSS, and JavaScript',
      'Assisted in the development of WordPress themes and plugins',
      'Collaborated with the design team to implement UI/UX designs',
      'Performed website maintenance and updates for clients',
    ],
  },
];

const Experience = () => {
  return (
    <section id="experience" className="section bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Work <span className="gradient-text">Experience</span>
            </h2>
            <div className="w-16 h-1 bg-gradient-to-r from-green-400 to-green-600 mx-auto"></div>
          </div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-4 md:left-1/2 h-full w-0.5 bg-gray-200 -translate-x-1/2"></div>
            
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`relative mb-12 ${index % 2 === 0 ? 'md:pr-8 md:text-right' : 'md:pl-8 md:text-left'}`}
              >
                <div className={`md:w-1/2 ${index % 2 === 0 ? 'md:mr-auto' : 'md:ml-auto'}`}>
                  <div className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                    <div className="flex items-center mb-2">
                      <div className={`w-4 h-4 rounded-full bg-green-500 absolute ${index % 2 === 0 ? 'md:right-0' : 'md:left-0'} left-0 top-1/2 transform -translate-y-1/2 md:translate-x-1/2 z-10`}></div>
                      <h3 className="text-xl font-bold text-gray-900">{exp.role}</h3>
                    </div>
                    <p className="text-green-600 font-medium mb-3">{exp.company} • {exp.duration}</p>
                    <ul className="space-y-2">
                      {exp.description.map((item, i) => (
                        <li key={i} className="flex items-start">
                          <span className="text-green-500 mr-2">▹</span>
                          <span className="text-gray-600">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
