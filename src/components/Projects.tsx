import { motion } from 'framer-motion';
import React from 'react';
import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa';
import type { IProject } from '../interfaces/profile.interface';

interface ProjectsProps {
    projects: IProject[];
}

const Projects: React.FC<ProjectsProps> = ({ projects }) => {

    return (
        <section id="projects" className="py-20 bg-gray-800/50">
            <div className="max-w-6xl mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                        Featured Projects
                    </h2>
                    <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-500 mx-auto"></div>
                </motion.div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <motion.div
                            key={project.id}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2 }}
                            whileHover={{ y: -5 }}
                            className="bg-gray-800/50 backdrop-blur-sm rounded-xl overflow-hidden border border-gray-700/50 group"
                        >
                            <div className="relative overflow-hidden">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-4">
                                    <div className="flex space-x-3">
                                        {project.demoUrl && (
                                            <motion.a
                                                href={project.demoUrl}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                whileHover={{ scale: 1.1 }}
                                                whileTap={{ scale: 0.9 }}
                                                className="p-2 bg-blue-500 rounded-full text-white hover:bg-blue-600 transition-colors"
                                            >
                                                <FaExternalLinkAlt size={20} />
                                            </motion.a>
                                        )}
                                        {project.githubUrl && (
                                            <motion.a
                                                href={project.githubUrl}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                whileHover={{ scale: 1.1 }}
                                                whileTap={{ scale: 0.9 }}
                                                className="p-2 bg-gray-700 rounded-full text-white hover:bg-gray-600 transition-colors"
                                            >
                                                <FaGithub size={20} />
                                            </motion.a>
                                        )}
                                    </div>
                                </div>
                            </div>
                            <div className="p-6">
                                <h3 className="text-xl font-semibold mb-3 text-gray-200">
                                    {project.title}
                                </h3>
                                <p className="text-gray-400 mb-4 leading-relaxed">
                                    {project.description}
                                </p>
                                <div className="flex flex-wrap gap-2">
                                    {project.technologies.map((tech) => (
                                        <span
                                            key={tech}
                                            className="px-3 py-1 bg-blue-500/10 text-blue-400 rounded-full text-sm border border-blue-500/20"
                                        >
                                            {tech}
                                        </span>
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

export default Projects;