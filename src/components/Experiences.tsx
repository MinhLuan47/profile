import { motion } from 'framer-motion';
import React from 'react';
import type { IExperience } from '../interfaces/profile.interface';


interface ExperiencesProps {
    experiences: IExperience[];
}

const Experiences: React.FC<ExperiencesProps> = ({ experiences }) => {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2
            }
        }
    };

    const itemVariants = {
        hidden: { x: -50, opacity: 0 },
        visible: {
            x: 0,
            opacity: 1,
            transition: {
                duration: 0.5
            }
        }
    };

    return (
        <section id="experience" className="py-16 bg-gray-50">
            <div className="container mx-auto px-4">
                <motion.h2
                    className="text-3xl font-bold text-center mb-12"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                >
                    Work Experience
                </motion.h2>

                <motion.div
                    className="max-w-3xl mx-auto"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                >
                    {experiences.map((exp) => (
                        <motion.div
                            key={exp.id}
                            className="mb-12 relative"
                            variants={itemVariants}
                        >
                            {/* Timeline dot */}
                            <div className="absolute left-0 h-4 w-4 rounded-full bg-blue-500 border-4 border-white shadow-md -translate-x-1/2"></div>

                            <div className="ml-10">
                                <div className="bg-white p-6 rounded-xl shadow-sm">
                                    <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                                        <div>
                                            <h3 className="text-xl font-semibold">{exp.position}</h3>
                                            <p className="text-blue-600 font-medium">{exp.company}</p>
                                        </div>
                                        <span className="text-gray-500 mt-2 md:mt-0">{exp.period}</span>
                                    </div>

                                    <p className="text-gray-600 mb-4">{exp.description}</p>

                                    {exp.achievements && exp.achievements.length > 0 && (
                                        <div>
                                            <h4 className="font-medium mb-2">Key Achievements:</h4>
                                            <ul className="list-disc list-inside space-y-1 text-gray-600">
                                                {exp.achievements.map((achievement, i) => (
                                                    <li key={i}>{achievement}</li>
                                                ))}
                                            </ul>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default Experiences;