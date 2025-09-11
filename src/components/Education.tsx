import { motion } from 'framer-motion';
import React from 'react';
import type { IEducation } from '../interfaces/profile.interface';


interface EducationProps {
    education: IEducation[];
}

const Education: React.FC<EducationProps> = ({ education }) => {
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
        hidden: { x: 50, opacity: 0 },
        visible: {
            x: 0,
            opacity: 1,
            transition: {
                duration: 0.5
            }
        }
    };

    return (
        <section id="education" className="py-16 bg-white">
            <div className="container mx-auto px-4">
                <motion.h2
                    className="text-3xl font-bold text-center mb-12"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                >
                    Education
                </motion.h2>

                <motion.div
                    className="max-w-3xl mx-auto"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                >
                    {education.map((edu) => (
                        <motion.div
                            key={edu.id}
                            className="mb-8 p-6 bg-gray-50 rounded-xl shadow-sm"
                            variants={itemVariants}
                        >
                            <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                                <div>
                                    <h3 className="text-xl font-semibold">{edu.degree}</h3>
                                    <p className="text-blue-600 font-medium">{edu.institution}</p>
                                </div>
                                <span className="text-gray-500 mt-2 md:mt-0">{edu.period}</span>
                            </div>

                            <p className="text-gray-600">{edu.description}</p>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default Education;