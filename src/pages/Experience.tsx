import React from 'react';
import { motion } from 'framer-motion';
import { FaBriefcase, FaMapMarkerAlt, FaCalendarAlt, FaBuilding, FaChevronRight } from 'react-icons/fa';
import { experienceData } from '../data/experience';

const Experience = () => {
  return (
    <section id="experience" className="py-20 bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
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
            <FaBriefcase size={16} />
            Professional Experience
          </motion.div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            My Professional <span className="text-green-500">Journey</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            A timeline of my career growth, key achievements, and the impact I've made in various organizations.
          </p>
        </motion.div>

        {/* Experience Cards */}
        <div className="relative max-w-6xl mx-auto">
          {/* Timeline line for desktop */}
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-green-400 via-green-500 to-green-600 transform -translate-x-1/2 rounded-full"></div>
          
          {experienceData.map((exp, index) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className={`relative mb-16 lg:mb-20 ${
                index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
              } flex flex-col lg:flex`}
            >
              {/* Timeline dot */}
              <div className="hidden lg:block absolute left-1/2 top-8 w-6 h-6 bg-white border-4 border-green-500 rounded-full transform -translate-x-1/2 z-10 shadow-lg">
                <div className="absolute inset-1 bg-green-500 rounded-full"></div>
              </div>

              {/* Content */}
              <div className={`lg:w-1/2 ${index % 2 === 0 ? 'lg:pr-16' : 'lg:pl-16'}`}>
                <motion.div
                  className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 relative"
                  whileHover={{ y: -5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  {/* Card header */}
                  <div className="flex items-start justify-between mb-6">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <motion.span 
                          className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs font-semibold"
                          whileHover={{ scale: 1.05 }}
                        >
                          {exp.type}
                        </motion.span>
                        <span className="text-gray-400">•</span>
                        <span className="text-sm text-gray-500 flex items-center gap-1">
                          <FaCalendarAlt size={12} />
                          {exp.duration}
                        </span>
                      </div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">{exp.role}</h3>
                      <div className="flex flex-col sm:flex-row sm:items-center gap-2 text-gray-600">
                        <div className="flex items-center gap-2">
                          <FaBuilding size={14} className="text-green-500" />
                          <span className="font-semibold">{exp.company}</span>
                        </div>
                        <span className="hidden sm:block text-gray-400">•</span>
                        <div className="flex items-center gap-2">
                          <FaMapMarkerAlt size={14} className="text-green-500" />
                          <span>{exp.location}</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Description */}
                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 mb-4 flex items-center gap-2">
                      <FaChevronRight size={12} className="text-green-500" />
                      Key Responsibilities
                    </h4>
                    <ul className="space-y-3">
                      {exp.description.map((item, i) => (
                        <motion.li
                          key={i}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: i * 0.1 }}
                          className="flex items-start gap-3 text-gray-700"
                        >
                          <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                          <span className="leading-relaxed">{item}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </div>

                  {/* Technologies */}
                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 mb-3">Technologies Used</h4>
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech, i) => (
                        <motion.span
                          key={i}
                          initial={{ opacity: 0, scale: 0.8 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          viewport={{ once: true }}
                          transition={{ delay: i * 0.05 }}
                          className="bg-gray-100 hover:bg-green-100 text-gray-700 hover:text-green-700 px-3 py-1 rounded-lg text-sm font-medium transition-colors cursor-default"
                          whileHover={{ scale: 1.05 }}
                        >
                          {tech}
                        </motion.span>
                      ))}
                    </div>
                  </div>
                  {/* Decorative element */}
                  <div className="absolute top-4 right-4 w-12 h-12 bg-gradient-to-br from-green-100 to-green-200 rounded-full opacity-20"></div>
                </motion.div>
              </div>

              {/* Empty space for alternating layout */}
              <div className="hidden lg:block lg:w-1/2"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;