
import { motion, useScroll, useTransform } from 'framer-motion';
import React from 'react';
import { FaDownload } from 'react-icons/fa';
import type { IProfile, ISocialLink } from '../interfaces/profile.interface';

interface ProfileHeaderProps {
    profile: IProfile,
    links: ISocialLink[],
    setIsMobileMenuOpen: React.Dispatch<React.SetStateAction<boolean>>
}

const ProfileHeader: React.FC<ProfileHeaderProps> = ({ profile, links, setIsMobileMenuOpen }) => {

    const { scrollYProgress } = useScroll();
    const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

    const scrollToSection = (sectionId: string) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
        setIsMobileMenuOpen(false);
    };

    return (
        <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
            <motion.div
                className="absolute inset-0 z-0"
                style={{ y: backgroundY }}
            >
                <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 to-purple-900/20 z-10" />
                <img
                    src={profile.coverImage}
                    alt="Background"
                    className="w-full h-full object-cover opacity-30"
                />
            </motion.div>

            <div className="relative z-20 text-center max-w-4xl mx-auto px-4">
                <motion.div
                    initial={{ scale: 0, rotate: 180 }}
                    animate={{ scale: 1, rotate: 0 }}
                    transition={{ type: "spring", stiffness: 260, damping: 20 }}
                    className="mb-8"
                >
                    <img
                        src={profile.avatar}
                        alt={profile.name}
                        className="w-32 h-32 rounded-full mx-auto shadow-2xl ring-4 ring-blue-400/30"
                    />
                </motion.div>

                <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent"
                >
                    {profile.name}
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                    className="text-xl md:text-2xl text-gray-300 mb-8 font-light"
                >
                    {profile.title}
                </motion.p>

                <motion.p
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 }}
                    className="text-lg text-gray-400 mb-12 max-w-2xl mx-auto leading-relaxed"
                >
                    {profile.bio}
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8 }}
                    className="flex flex-wrap justify-center gap-4 mb-12"
                >
                    <motion.button
                        whileHover={{ scale: 1.05, y: -2 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => scrollToSection('contact')}
                        className="px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
                    >
                        Get In Touch
                    </motion.button>
                    <motion.button
                        whileHover={{ scale: 1.05, y: -2 }}
                        whileTap={{ scale: 0.95 }}
                        className="px-8 py-3 border border-gray-600 rounded-full font-semibold hover:bg-gray-800 transition-all duration-300 flex items-center space-x-2"
                    >
                        <FaDownload size={20} />
                        <span>Download CV</span>
                    </motion.button>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1 }}
                    className="flex justify-center space-x-6"
                >
                    {links.map((link, index) => (
                        <motion.a
                            key={link.name}
                            href={link.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{ scale: 1.2, y: -3 }}
                            whileTap={{ scale: 0.9 }}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 1 + index * 0.1 }}
                            className="p-3 bg-gray-800/50 backdrop-blur-sm rounded-full hover:bg-gradient-to-r hover:from-blue-500 hover:to-purple-600 transition-all duration-300"
                        >
                            <link.icon size={24} />
                        </motion.a>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default ProfileHeader;