import { motion } from 'framer-motion';
import React from 'react';
import { FaBriefcase, FaGraduationCap } from 'react-icons/fa';
import type { IEducation, IExperience } from '../interfaces/profile.interface';


interface ExperiencesProps {
    experiences: IExperience[];
    education: IEducation[];
}

const Experiences: React.FC<ExperiencesProps> = ({ experiences, education }) => {


    return (
        <section id="experience" className="py-20">
            <div className="max-w-6xl mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                        Experience & Education
                    </h2>
                    <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-500 mx-auto"></div>
                </motion.div>

                <div className="grid lg:grid-cols-2 gap-12">
                    {/* Experience */}
                    <div>
                        <h3 className="text-2xl font-semibold mb-8 flex items-center text-gray-200">
                            <FaBriefcase className="mr-3 text-blue-400" />
                            Work Experience
                        </h3>
                        <div className="space-y-8">
                            {experiences.map((exp, index) => (
                                <motion.div
                                    key={exp.id}
                                    initial={{ opacity: 0, x: -50 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.2 }}
                                    className="relative pl-8 border-l-2 border-blue-400/30"
                                >
                                    <div className="absolute w-4 h-4 bg-blue-400 rounded-full -left-2 top-0"></div>
                                    <div className="bg-gray-800/50 backdrop-blur-sm rounded-lg p-6 border border-gray-700/50">
                                        <h4 className="text-xl font-semibold text-gray-200 mb-2">
                                            {exp.position}
                                        </h4>
                                        <div className="flex items-center text-blue-400 mb-2">
                                            <span className="font-medium">{exp.company}</span>
                                            <span className="mx-2">•</span>
                                            <span>{exp.period}</span>
                                        </div>
                                        <p className="text-gray-400 mb-4">{exp.description}</p>
                                        {exp.achievements && (
                                            <ul className="list-disc list-inside space-y-1 text-gray-300">
                                                {exp.achievements.map((achievement, i) => (
                                                    <li key={i} className="text-sm">{achievement}</li>
                                                ))}
                                            </ul>
                                        )}
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    {/* Education */}
                    <div>
                        <h3 className="text-2xl font-semibold mb-8 flex items-center text-gray-200">
                            <FaGraduationCap className="mr-3 text-blue-400" />
                            Education
                        </h3>
                        <div className="space-y-8">
                            {education.map((edu, index) => (
                                <motion.div
                                    key={edu.id}
                                    initial={{ opacity: 0, x: 50 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.2 }}
                                    className="relative pl-8 border-l-2 border-purple-400/30"
                                >
                                    <div className="absolute w-4 h-4 bg-purple-400 rounded-full -left-2 top-0"></div>
                                    <div className="bg-gray-800/50 backdrop-blur-sm rounded-lg p-6 border border-gray-700/50">
                                        <h4 className="text-xl font-semibold text-gray-200 mb-2">
                                            {edu.degree}
                                        </h4>
                                        <div className="flex items-center text-purple-400 mb-2">
                                            <span className="font-medium">{edu.institution}</span>
                                            <span className="mx-2">•</span>
                                            <span>{edu.period}</span>
                                        </div>
                                        <p className="text-gray-400">{edu.description}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Experiences;