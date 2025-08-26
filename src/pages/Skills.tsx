import { motion } from 'framer-motion';
import SkillCard from '../components/common/SkillCard';

const technicialSkills = [
  {
    category: 'Frontend',
    items: [
      { name: 'HTML5', icon: 'html.svg' },
      { name: 'CSS3', icon: 'css.svg' },
      { name: 'Sass/Scss', icon: 'sass.svg' },
      { name: 'Tailwind css', icon: 'tailwindcss.svg' },
      { name: 'Bootstrap', icon: 'bootstrap.svg' },
      { name: 'JavaScript', icon: 'javascript.svg' },
      { name: 'TypeScript', icon: 'typescript.svg' },
      { name: 'React', icon: 'react.svg' },
      { name: 'Angular', icon: 'angular.svg' },
      { name: 'Redux', icon: 'redux.svg' },
    ],
  },
  {
    category: 'Backend',
    items: [
      { name: 'Node.js', icon: 'nodejs.svg' },
      { name: 'Express.js', icon: 'expressjs.svg' },
      { name: 'Nest.js', icon: 'nestjs.svg' },
      { name: 'TypeORM', icon: 'typeorm.svg' },
      { name: 'Sequelize', icon: 'sequelize.svg' },
      { name: 'PostgreSQL', icon: 'postgresql.svg' },
      { name: 'MongoDB', icon: 'mongodb.svg' },
      { name: 'Redis', icon: 'redis.svg' },
      { name: 'Socket.io', icon: 'socketio.svg' },
    ],
  },
  {
    category: 'Tools & Other',
    items: [
      { name: 'Git & GitHub', icon: 'git.svg' },
      // { name: 'Docker', icon: 'docker.svg' },
      { name: 'Figma', icon: 'figma.svg' },
      { name: 'VS Code', icon: 'vscode.svg' },
      { name: 'Postman', icon: 'postman.svg' },
      { name: 'Webpack', icon: 'webpack.svg' },
      { name: 'Vite', icon: 'vite.svg' },
      { name: 'Npm', icon: 'npm.svg' },
    ],
  },
];

const additionalSkills = [
  'Agile Methodologies',
  'Team Collaboration',
  'Problem Solving',
  'Code Review',
  'Technical Writing',
  'Time Management',
  'Adaptability',
  'Effective Communication',
  'Leadership',
  'Continuous Learning'
];

const Skills = () => {
  return (
    <section id="skills" className="py-16 md:py-24 bg-white">
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
              My <span className="bg-clip-text text-transparent bg-gradient-to-r from-green-500 to-green-600">Skills</span>
            </h2>
            <div className="w-16 h-1 bg-gradient-to-r from-green-400 to-green-600 mx-auto"></div>
            <p className="mt-6 text-gray-600 max-w-2xl mx-auto">
              Here are the technologies and tools I've been working with. I'm always eager to learn new technologies to stay current with industry trends.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {technicialSkills.map((skillCategory, categoryIndex) => (
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
                  <div className="grid grid-cols-1 gap-3 max-h-96 overflow-y-auto pr-2 custom-scroll">
                    {skillCategory.items.map((skill, skillIndex) => (
                      <motion.div
                        key={skill.name}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{ duration: 0.1, delay: categoryIndex * 0.1 + skillIndex * 0.05 }}
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
              {additionalSkills.map((skill, index) => (
                <motion.span
                  key={skill}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.1, delay: index * 0.03 }}
                  whileHover={{ scale: 1.05 }}
                  className="inline-block bg-white text-gray-700 px-4 py-2 rounded-full text-sm font-medium shadow-sm hover:shadow-md hover:bg-green-50 hover:text-green-600 transition-all duration-200 cursor-pointer border border-gray-100"
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;