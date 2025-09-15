import { motion } from 'framer-motion';
import React, { useState } from 'react';
import { FaMailBulk, FaMapPin, FaPhone } from 'react-icons/fa';
import type { IContact } from '../interfaces/profile.interface';


interface ContactProps {
    contact: IContact;
}

const Contact: React.FC<ContactProps> = ({ contact }) => {
    const [contactForm, setContactForm] = useState({ name: '', email: '', message: '' });


    const handleContactSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log('Form submitted:', contactForm);
        alert('Thank you for your message! I will get back to you soon.');

        setContactForm({ name: '', email: '', message: '' });
    };

    return (
        <section id="contact" className="py-20 bg-gray-800/50">
            <div className="max-w-6xl mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                        Get In Touch
                    </h2>
                    <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-500 mx-auto mb-6"></div>
                    <p className="text-gray-400 max-w-2xl mx-auto">
                        I'm always interested in hearing about new opportunities and exciting projects.
                        Let's create something amazing together!
                    </p>
                </motion.div>

                <div className="grid lg:grid-cols-2 gap-12">
                    {/* Contact Info */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="space-y-8"
                    >
                        <div className="flex items-center space-x-4 p-4 bg-gray-800/50 backdrop-blur-sm rounded-lg border border-gray-700/50">
                            <div className="p-3 bg-blue-500/10 rounded-full">
                                <FaMailBulk className="text-blue-400" size={24} />
                            </div>
                            <div>
                                <h4 className="font-semibold text-gray-200">Email</h4>
                                <p className="text-gray-400">{contact.email}</p>
                            </div>
                        </div>

                        {contact.phone && (
                            <div className="flex items-center space-x-4 p-4 bg-gray-800/50 backdrop-blur-sm rounded-lg border border-gray-700/50">
                                <div className="p-3 bg-green-500/10 rounded-full">
                                    <FaPhone className="text-green-400" size={24} />
                                </div>
                                <div>
                                    <h4 className="font-semibold text-gray-200">Phone</h4>
                                    <p className="text-gray-400">{contact.phone}</p>
                                </div>
                            </div>
                        )}

                        {contact.address && (
                            <div className="flex items-center space-x-4 p-4 bg-gray-800/50 backdrop-blur-sm rounded-lg border border-gray-700/50">
                                <div className="p-3 bg-purple-500/10 rounded-full">
                                    <FaMapPin className="text-purple-400" size={24} />
                                </div>
                                <div>
                                    <h4 className="font-semibold text-gray-200">Location</h4>
                                    <p className="text-gray-400">{contact.address}</p>
                                </div>
                            </div>
                        )}
                    </motion.div>

                    {/* Contact Form */}
                    {contact.contactFormEnabled && (
                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            <form onSubmit={handleContactSubmit} className="space-y-6">
                                <div>
                                    <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                                        Name
                                    </label>
                                    <input
                                        type="text"
                                        id="name"
                                        value={contactForm.name}
                                        onChange={(e) => setContactForm({ ...contactForm, name: e.target.value })}
                                        required
                                        className="w-full px-4 py-3 bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent text-white placeholder-gray-400"
                                        placeholder="Your name"
                                    />
                                </div>

                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                                        Email
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        value={contactForm.email}
                                        onChange={(e) => setContactForm({ ...contactForm, email: e.target.value })}
                                        required
                                        className="w-full px-4 py-3 bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent text-white placeholder-gray-400"
                                        placeholder="your.email@example.com"
                                    />
                                </div>

                                <div>
                                    <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                                        Message
                                    </label>
                                    <textarea
                                        id="message"
                                        value={contactForm.message}
                                        onChange={(e) => setContactForm({ ...contactForm, message: e.target.value })}
                                        required
                                        rows={6}
                                        className="w-full px-4 py-3 bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent text-white placeholder-gray-400 resize-none"
                                        placeholder="Tell me about your project..."
                                    />
                                </div>

                                <motion.button
                                    type="submit"
                                    whileHover={{ scale: 1.02, y: -2 }}
                                    whileTap={{ scale: 0.98 }}
                                    className="w-full py-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg font-semibold text-white shadow-lg hover:shadow-xl transition-all duration-300"
                                >
                                    Send Message
                                </motion.button>
                            </form>
                        </motion.div>
                    )}
                </div>
            </div>
        </section>
    );
};

export default Contact;