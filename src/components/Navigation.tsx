// components/Navigation.tsx
import { motion } from 'framer-motion';
import React, { useEffect, useState } from 'react';
import { FaBriefcase, FaCode, FaCommentDots, FaFileContract, FaFolderOpen, FaList, FaUser } from 'react-icons/fa';
import { FaX } from "react-icons/fa6";
import type { IProfile } from '../interfaces/profile.interface';
interface NavigationProps {
    isMobileMenuOpen: boolean;
    profile: IProfile;
    activeSection: string;
    setIsMobileMenuOpen: React.Dispatch<React.SetStateAction<boolean>>
}

const Navigation: React.FC<NavigationProps> = ({ isMobileMenuOpen, profile, activeSection, setIsMobileMenuOpen }) => {
    const [_, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToSection = (sectionId: string) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
        setIsMobileMenuOpen(false);
    };

    const navigationItems = [
        { id: 'home', label: 'Home', icon: FaUser },
        { id: 'about', label: 'About', icon: FaFileContract },
        { id: 'skills', label: 'Skills', icon: FaCode },
        { id: 'projects', label: 'Projects', icon: FaFolderOpen },
        { id: 'experience', label: 'Experience', icon: FaBriefcase },
        { id: 'contact', label: 'Contact', icon: FaCommentDots }
    ];

    return (
        <motion.nav
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            className="fixed top-0 left-0 right-0 z-50 bg-gray-900/95 backdrop-blur-sm border-b border-gray-800"
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    <motion.div
                        whileHover={{ scale: 1.05 }}
                        className="font-bold text-xl bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent"
                    >
                        {profile.name}
                    </motion.div>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex space-x-8">
                        {navigationItems.map((item) => (
                            <motion.button
                                key={item.id}
                                onClick={() => scrollToSection(item.id)}
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${activeSection === item.id
                                    ? 'text-blue-400 bg-blue-400/10'
                                    : 'text-gray-300 hover:text-white hover:bg-gray-800'
                                    }`}
                            >
                                {item.label}
                            </motion.button>
                        ))}
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden">
                        <motion.button
                            whileTap={{ scale: 0.95 }}
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            className="p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-800"
                        >
                            {isMobileMenuOpen ? <FaX size={24} /> : <FaList size={24} />}
                        </motion.button>
                    </div>
                </div>
            </div>

            {/* Mobile Navigation */}
            {isMobileMenuOpen && (
                <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    className="md:hidden bg-gray-800 border-t border-gray-700"
                >
                    <div className="px-2 pt-2 pb-3 space-y-1">
                        {navigationItems.map((item, index) => (
                            <motion.button
                                key={item.id}
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: index * 0.1 }}
                                onClick={() => scrollToSection(item.id)}
                                className="flex items-center space-x-2 w-full text-left px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-gray-700"
                            >
                                <item.icon size={20} />
                                <span>{item.label}</span>
                            </motion.button>
                        ))}
                    </div>
                </motion.div>
            )}
        </motion.nav>
    );
};

export default Navigation;