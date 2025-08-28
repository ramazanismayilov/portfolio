import { AnimatePresence, motion } from 'framer-motion';
import SkillCard from '../components/common/SkillCard';
import { FaAward, FaChevronRight } from 'react-icons/fa';
import { useState } from 'react';
import { additionalSkills, technicalSkills } from '../data/skill';

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState('Frontend');
  return (
    <section id="skills" className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.div
            className="inline-flex items-center gap-2 bg-green-100 text-green-600 px-4 py-2 rounded-full text-sm font-medium mb-6"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <FaAward size={16} />
            Technical Skills
          </motion.div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4"> My <span className="text-green-500">Skills</span></h2>
        </motion.div>
        <div className="flex justify-center mb-12">
          <div className="bg-white rounded-2xl p-2 shadow-lg border border-gray-200 w-full sm:w-auto">
            <div className="flex flex-col sm:flex-row sm:space-x-2 space-y-2 sm:space-y-0">
              {technicalSkills.map((category) => {
                const Icon = category.icon;
                return (
                  <motion.button
                    key={category.category}
                    onClick={() => setActiveCategory(category.category)}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.98 }}
                    className={`flex items-center space-x-2 cursor-pointer px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${activeCategory === category.category
                      ? `bg-gradient-to-r ${category.color} text-white shadow-lg`
                      : 'text-gray-600 hover:text-gray-800 hover:bg-gray-50'
                      }`}
                  >
                    <span className="text-lg"><Icon size={20} /></span>
                    <span>{category.category}</span>
                  </motion.button>
                );
              })}
            </div>
          </div>
        </div>
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="mb-16"
          >
            {technicalSkills
              .filter(cat => cat.category === activeCategory)
              .map((category) => (
                <div key={category.category}>
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
                  >
                    {category.items.map((skill, skillIndex) => (
                      <motion.div
                        key={skill.name}
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3, delay: skillIndex * 0.1 }}
                      >
                        <SkillCard
                          name={skill.name}
                          icon={skill.icon}
                        />
                      </motion.div>
                    ))}
                  </motion.div>
                </div>
              ))}
          </motion.div>
        </AnimatePresence>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100"
        >
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-3 flex items-center justify-center gap-2">
              <FaChevronRight className="text-green-500" size={20} />
              Soft Skills
            </h3>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {additionalSkills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                whileHover={{ y: -5, scale: 1.05 }}
                className="bg-gradient-to-br from-gray-50 to-white border-2 border-gray-100 hover:border-green-300 rounded-xl p-4 text-center cursor-pointer group hover:shadow-lg transition-all duration-300"
              >
                <div className="text-2xl mb-2 group-hover:scale-110 transition-transform duration-300">
                  {skill.icon}
                </div>
                <span className="text-[12px] sm:text-sm font-medium text-gray-700 group-hover:text-green-600 transition-colors duration-300">
                  {skill.name}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;