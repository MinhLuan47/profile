import { motion } from 'framer-motion';
import React from 'react';
import type { ISkill } from '../interfaces/profile.interface';


interface SkillsProps {
    skills: ISkill[];
}

const Skills: React.FC<SkillsProps> = ({ skills }) => {
    const skillsByCategory: Record<string, ISkill[]> = {};
    skills.forEach(skill => {
        if (!skillsByCategory[skill.category]) {
            skillsByCategory[skill.category] = [];
        }
        skillsByCategory[skill.category].push(skill);
    });


    return (
        <section id="skills" className="py-20">
            <div className="max-w-6xl mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                        Skills
                    </h2>
                    <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-500 mx-auto"></div>
                </motion.div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {['Frontend', 'Backend', 'Design', 'DevOps'].map((category) => (
                        <motion.div
                            key={category}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50"
                        >
                            <h3 className="text-xl font-semibold mb-4 text-center text-gray-200">
                                {category}
                            </h3>
                            <div className="space-y-4">
                                {skills
                                    .filter(skill => skill.category === category)
                                    .map((skill, index) => (
                                        <div key={skill.name}>
                                            <div className="flex justify-between mb-2">
                                                <span className="text-gray-300">{skill.name}</span>
                                                <span className="text-gray-400">{skill.level}%</span>
                                            </div>
                                            <div className="bg-gray-700 rounded-full h-2 overflow-hidden">
                                                <motion.div
                                                    initial={{ width: 0 }}
                                                    whileInView={{ width: `${skill.level}%` }}
                                                    viewport={{ once: true }}
                                                    transition={{ delay: index * 0.1, duration: 0.8 }}
                                                    className="bg-gradient-to-r from-blue-400 to-purple-500 h-full rounded-full"
                                                />
                                            </div>
                                        </div>
                                    ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;