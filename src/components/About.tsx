import { motion } from 'framer-motion'
import React from 'react'

interface AboutProps {
    avatar: string
}

const About: React.FC<AboutProps> = ({ avatar }) => {
    return (
        <section id="about" className="py-20 bg-gray-800/50">
            <div className="max-w-6xl mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                        About Me
                    </h2>
                    <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-500 mx-auto"></div>
                </motion.div>

                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <img
                            src={avatar}
                            alt="About"
                            className="rounded-2xl shadow-2xl w-full max-w-md mx-auto"
                        />
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="space-y-6"
                    >
                        <h3 className="text-2xl font-semibold text-gray-200">
                            Crafting Digital Experiences
                        </h3>
                        <p className="text-gray-300 leading-relaxed">
                            I'm a passionate full-stack developer with a keen eye for design and a love for creating
                            seamless digital experiences. With over 5 years in the industry, I've had the privilege
                            of working with diverse teams and building solutions that make a real impact.
                        </p>
                        <p className="text-gray-300 leading-relaxed">
                            When I'm not coding, you can find me exploring new technologies, contributing to open-source
                            projects, or sharing knowledge through blog posts and community talks.
                        </p>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}

export default About