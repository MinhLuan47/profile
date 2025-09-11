import { FaGithub, FaLinkedin } from "react-icons/fa";
import type { ProfileData } from "../interfaces/profile.interface";

export const profileData: ProfileData = {
    profile: {
        name: "",
        title: "",
        bio: "",
        avatar: "",
        coverImage: "",
    },
    socialLinks: [
        {
            name: "GitHub",
            url: "",
            icon: FaGithub,
        },
        {
            name: "LinkedIn",
            url: "",
            icon: FaLinkedin,
        },
    ],
    skills: [
        {
            name: "",
            level: 0,
            category: "",
        },
    ],
    projects: [
        {
            id: 1,
            title: "",
            description: "",
            image: "",
            technologies: [],
            demoUrl: "",
            githubUrl: "",
        },
    ],
    experiences: [
        {
            id: 1,
            position: "",
            company: "",
            period: "",
            description: "",
            achievements: [],
        },
    ],
    education: [
        {
            id: 1,
            degree: "",
            institution: "",
            period: "",
            description: "",
        },
    ],
    contact: {
        email: "",
        phone: "",
        address: "",
        contactFormEnabled: false,
    },
};