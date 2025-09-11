import { motion } from 'framer-motion';
import React from 'react';
import type { ISkill } from '../interfaces/profile.interface';


interface SkillsProps {
    skills: ISkill[];
}

const Skills: React.FC<SkillsProps> = ({ skills }) => {
    // Group skills by category
    const skillsByCategory: Record<string, ISkill[]> = {};
    skills.forEach(skill => {
        if (!skillsByCategory[skill.category]) {
            skillsByCategory[skill.category] = [];
        }
        skillsByCategory[skill.category].push(skill);
    });

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1
        }
    };

    return (
        <section id="skills" className="py-16 bg-gray-50">
            <div className="container mx-auto px-4">
                <motion.h2
                    className="text-3xl font-bold text-center mb-12"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                >
                    Skills & Expertise
                </motion.h2>

                <motion.div
                    className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                >
                    {Object.entries(skillsByCategory).map(([category, categorySkills]) => (
                        <motion.div
                            key={category}
                            className="bg-white p-6 rounded-xl shadow-sm"
                            variants={itemVariants}
                        >
                            <h3 className="text-xl font-semibold mb-4 text-blue-600">{category}</h3>
                            <div className="space-y-4">
                                {categorySkills.map((skill, index) => (
                                    <div key={index}>
                                        <div className="flex justify-between mb-1">
                                            <span className="font-medium">{skill.name}</span>
                                            <span className="text-gray-500">{skill.level}%</span>
                                        </div>
                                        <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                                            <motion.div
                                                className="h-full bg-blue-500 rounded-full"
                                                initial={{ width: 0 }}
                                                whileInView={{ width: `${skill.level}%` }}
                                                viewport={{ once: true }}
                                                transition={{ duration: 1, delay: 0.2 }}
                                            />
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default Skills;