
import { motion } from 'framer-motion';
import React from 'react';
import type { IProfile } from '../interfaces/profile.interface';

interface ProfileHeaderProps {
    data: IProfile
}

const ProfileHeader: React.FC<ProfileHeaderProps> = ({ data }) => {
    return (
        <section id="home" className="relative">
            {data.coverImage && (
                <div className="h-64 md:h-96 w-full overflow-hidden">
                    <motion.img
                        src={data.coverImage}
                        alt="Cover"
                        className="w-full h-full object-cover"
                        initial={{ opacity: 0, scale: 1.1 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.7 }}
                    />
                </div>
            )}

            <div className="container mx-auto px-4 py-8 md:py-12">
                <div className="flex flex-col items-center text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2, duration: 0.7 }}
                        className="relative -mt-24 md:-mt-32 mb-6"
                    >
                        <div className="relative">
                            <div className="w-32 h-32 md:w-40 md:h-40 rounded-full border-4 border-white shadow-lg overflow-hidden">
                                <img
                                    src={data.avatar}
                                    alt={data.name}
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <div className="absolute inset-0 rounded-full border-2 border-blue-500 animate-ping opacity-20"></div>
                        </div>
                    </motion.div>

                    <motion.h1
                        className="text-3xl md:text-4xl font-bold mb-2"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3, duration: 0.7 }}
                    >
                        {data.name}
                    </motion.h1>

                    <motion.h2
                        className="text-xl md:text-2xl text-blue-600 mb-4"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4, duration: 0.7 }}
                    >
                        {data.title}
                    </motion.h2>

                    <motion.p
                        className="text-lg text-gray-600 max-w-2xl leading-relaxed"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5, duration: 0.7 }}
                    >
                        {data.bio}
                    </motion.p>
                </div>
            </div>
        </section>
    );
};

export default ProfileHeader;