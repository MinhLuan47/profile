import { motion } from 'framer-motion';
import React from 'react';
import type { ISocialLink } from '../interfaces/profile.interface';

interface SocialLinksProps {
    links: ISocialLink[]
}

const SocialLinks: React.FC<SocialLinksProps> = ({ links }) => {

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
        <section className="py-12 bg-white">
            <div className="container mx-auto px-4">
                <motion.div
                    className="flex justify-center space-x-6"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                >
                    {links.map((link, index) => (
                        <motion.a
                            key={index}
                            href={link.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center text-gray-700 hover:bg-blue-600 hover:text-white transition-colors duration-300 shadow-sm"
                            variants={itemVariants}
                            whileHover={{ y: -5, scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <span className='text-xl'><link.icon /></span>
                        </motion.a>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default SocialLinks;