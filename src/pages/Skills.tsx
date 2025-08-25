import { motion } from 'framer-motion';

const skills = [
  {
    category: 'Frontend',
    items: [
      { name: 'HTML5', icon: '🎨' },
      { name: 'CSS3', icon: '🎨' },
      { name: 'Sass/Scss', icon: '🎨' },
      { name: 'Tailwind css', icon: '🎨' },
      { name: 'JavaScript', icon: '💛' },
      { name: 'TypeScript', icon: '📘' },
      { name: 'React', icon: '⚛️' },
      { name: 'Angular', icon: '⚛️' },
      { name: 'Redux', icon: '🔄' },
    ],
  },
  {
    category: 'Backend',
    items: [
      { name: 'Node.js', icon: '🟢' },
      { name: 'ExpressJs', icon: '🚀' },
      { name: 'NestJs', icon: '🚀' },
      { name: 'Typeorm', icon: '🐍' },
      { name: 'PostgreSQL', icon: '📊' },
      { name: 'MongoDB', icon: '🍃' },
    ],
  },
  {
    category: 'Tools & Other',
    items: [
      { name: 'Git & GitHub', icon: '📝' },
      { name: 'Docker', icon: '🐳' },
      { name: 'AWS', icon: '☁️' },
      { name: 'CI/CD', icon: '🔧' },
      { name: 'Jest', icon: '🧪' },
      { name: 'Figma', icon: '🎯' },
    ],
  },
];

const SkillCard = ({ name, icon }: { name: string; icon: string }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.05, y: -2 }}
      whileTap={{ scale: 0.98 }}
      className="bg-gradient-to-br from-white to-gray-50 border border-gray-100 rounded-lg p-4 hover:shadow-md transition-all duration-200 cursor-pointer group"
    >
      <div className="flex items-center space-x-3">
        <div className="text-2xl group-hover:scale-110 transition-transform duration-200">
          {icon}
        </div>
        <span className="text-sm font-medium text-gray-700 group-hover:text-green-600 transition-colors duration-200">
          {name}
        </span>
      </div>
    </motion.div>
  );
};

const Skills = () => {
  return (
    <section id="skills" className="section bg-white py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="max-w-6xl mx-auto"
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              My <span className="gradient-text">Skills</span>
            </h2>
            <div className="w-16 h-1 bg-gradient-to-r from-green-400 to-green-600 mx-auto"></div>
            <p className="mt-6 text-gray-600 max-w-2xl mx-auto">
              Here are the technologies and tools I've been working with. I'm always eager to learn new technologies to stay current with industry trends.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {skills.map((skillCategory, categoryIndex) => (
              <motion.div
                key={skillCategory.category}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
                className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden"
              >
                <div className="bg-gradient-to-r from-green-400 to-green-600 p-4">
                  <h3 className="text-xl font-bold text-center text-white">
                    {skillCategory.category}
                  </h3>
                </div>
                <div className="p-6">
                  <div className="grid grid-cols-1 gap-3">
                    {skillCategory.items.map((skill, skillIndex) => (
                      <motion.div
                        key={skill.name}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{ 
                          duration: 0.3, 
                          delay: categoryIndex * 0.1 + skillIndex * 0.05 
                        }}
                      >
                        <SkillCard name={skill.name} icon={skill.icon} />
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="bg-gray-50 rounded-2xl p-8"
          >
            <h3 className="text-2xl font-bold text-center mb-8 text-gray-800">Additional Skills</h3>
            <div className="flex flex-wrap justify-center gap-3">
              {[
                'Responsive Design', 'Agile Methodologies', 'Test-Driven Development',
                'Web Accessibility', 'Performance Optimization', 'UI/UX Principles',
                'Cross-browser Compatibility', 'RESTful API Design', 'Version Control',
                'Problem Solving', 'Team Collaboration', 'Code Review', 'Technical Writing'
              ].map((skill, index) => (
                <motion.span
                  key={skill}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.3, delay: index * 0.03 }}
                  whileHover={{ scale: 1.05 }}
                  className="inline-block bg-white text-gray-700 px-4 py-2 rounded-full text-sm font-medium shadow-sm hover:shadow-md hover:bg-green-50 hover:text-green-600 transition-all duration-200 cursor-pointer border border-gray-100"
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </motion.div>

          {/* Optional: Experience Level Indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="mt-12 text-center"
          >
            <div className="flex items-center justify-center space-x-8 text-sm text-gray-500">
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-green-600 rounded-full"></div>
                <span>Expert</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                <span>Proficient</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-green-200 rounded-full"></div>
                <span>Learning</span>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;