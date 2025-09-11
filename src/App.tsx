import React, { useState } from 'react';
import Contact from './components/Contact';
import Education from './components/Education';
import Experiences from './components/Experiences';
import Navigation from './components/Navigation';
import ProfileHeader from './components/ProfileHeader';
import Projects from './components/Projects';
import Skills from './components/Skills';
import SocialLinks from './components/SocialLinks';
import { profileData } from './constants/data';


const App: React.FC = () => {
    const [activeSection, setActiveSection] = useState('home');
    return (
        <div className="min-h-screen bg-gray-50 text-gray-800">
            <Navigation activeSection={activeSection} setActiveSection={setActiveSection} />

            <main className="pb-20">
                <ProfileHeader data={profileData.profile} />
                <SocialLinks links={profileData.socialLinks} />
                <Skills skills={profileData.skills} />
                <Projects projects={profileData.projects} />
                <Experiences experiences={profileData.experiences} />
                <Education education={profileData.education} />
                <Contact contact={profileData.contact} />
            </main>
        </div>
    )
}

export default App
