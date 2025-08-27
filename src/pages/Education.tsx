import React from 'react';
import { motion } from 'framer-motion';
import { FaGraduationCap, FaMapMarkerAlt } from 'react-icons/fa';
import { educationData } from '../data/education';

const Education: React.FC = () => {
    return (
        <section id='education' className="py-20 bg-gray-50">
            <div className="max-w-6xl mx-auto px-6">
                <motion.div
                    className="text-center mb-16"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <motion.div
                        className="inline-flex items-center gap-2 bg-green-100 text-green-600 px-4 py-2 rounded-full text-sm font-medium mb-4"
                        whileHover={{ scale: 1.05 }}
                    >
                        <FaGraduationCap size={16} />
                        Education
                    </motion.div>
                    <h2 className="text-4xl font-bold text-gray-900 mb-4">
                        My Educational <span className="text-green-500">Journey</span>
                    </h2>
                </motion.div>
                <div className="grid md:grid-cols-2 gap-8">
                    {educationData.map((edu, idx) => (
                        <motion.div
                            key={edu.id}
                            className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300"
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.1, delay: idx * 0.3 }}
                            whileHover={{ y: -5 }}
                        >
                            <div className="flex flex-wrap items-center gap-3 mb-4">
                                <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-medium">
                                    {edu.period}
                                </span>
                                {edu.gpa && (
                                    <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-medium">
                                        GPA: {edu.gpa}
                                    </span>
                                )}
                            </div>
                            <h3 className="text-2xl font-bold text-gray-900 mb-2">{edu.degree}</h3>
                            <div className="flex items-center gap-4 text-gray-600 mb-4">
                                <div className="flex items-center gap-1">
                                    <FaGraduationCap size={16} />
                                    <span className="font-medium">{edu.institution}</span>
                                </div>
                                <div className="flex items-center gap-1">
                                    <FaMapMarkerAlt size={16} />
                                    <span>{edu.location}</span>
                                </div>
                            </div>
                            {/* <p className="text-gray-700 mb-6 leading-relaxed">{edu.description}</p> */}
                            <div>
                                <h4 className="font-semibold text-gray-900 mb-3">Technologies Learned</h4>
                                <div className="flex flex-wrap gap-2">
                                    {edu.skills.map((skill, i) => (
                                        <motion.span
                                            key={i}
                                            className="bg-gray-100 text-gray-700 px-3 py-1 rounded-lg text-sm font-medium hover:bg-green-100 hover:text-green-700 transition-colors cursor-default"
                                            initial={{ opacity: 0, scale: 0.8 }}
                                            whileInView={{ opacity: 1, scale: 1 }}
                                            viewport={{ once: true }}
                                            transition={{ delay: i * 0.05 }}
                                            whileHover={{ scale: 1.05 }}
                                        >
                                            {skill}
                                        </motion.span>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};
export default Education;