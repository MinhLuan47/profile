import React, { useEffect, useState } from 'react';
import { FaBriefcase, FaCode, FaCommentDots, FaFolderOpen, FaUser } from 'react-icons/fa';
import About from './components/About';
import Contact from './components/Contact';
import Experiences from './components/Experiences';
import Navigation from './components/Navigation';
import ProfileHeader from './components/ProfileHeader';
import Projects from './components/Projects';
import Skills from './components/Skills';
import { profileData } from './constants/data';

const App: React.FC = () => {
    const [activeSection, setActiveSection] = useState('home');
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const navigationItems = [
        { id: 'home', label: 'Home', icon: FaUser },
        { id: 'about', label: 'About', icon: FaUser },
        { id: 'skills', label: 'Skills', icon: FaCode },
        { id: 'projects', label: 'Projects', icon: FaFolderOpen },
        { id: 'experience', label: 'Experience', icon: FaBriefcase },
        { id: 'contact', label: 'Contact', icon: FaCommentDots }
    ];

    useEffect(() => {
        const handleScroll = () => {
            const sections = navigationItems.map(item => item.id);
            const scrollPosition = window.scrollY + 100;

            for (let i = sections.length - 1; i >= 0; i--) {
                const section = document.getElementById(sections[i]);
                if (section && section.offsetTop <= scrollPosition) {
                    setActiveSection(sections[i]);
                    break;
                }
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);
    return (
        <div className="min-h-screen bg-slate-900 text-white ">
            <Navigation
                isMobileMenuOpen={isMobileMenuOpen}
                profile={profileData.profile}
                activeSection={activeSection}
                setIsMobileMenuOpen={setIsMobileMenuOpen}
            />
            <main className="">
                <ProfileHeader
                    profile={profileData.profile}
                    links={profileData.socialLinks}
                    setIsMobileMenuOpen={setIsMobileMenuOpen}
                />
                <About avatar={profileData.profile.avatar} />
                <Skills skills={profileData.skills} />
                <Projects projects={profileData.projects} />
                <Experiences
                    experiences={profileData.experiences}
                    education={profileData.education}
                />
                <Contact contact={profileData.contact} />
            </main>
        </div>
    )
}

export default App
