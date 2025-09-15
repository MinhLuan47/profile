import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import type { ProfileData } from "../interfaces/profile.interface";

export const profileData: ProfileData = {
    profile: {
        name: "",
        title: "",
        bio: "",
        avatar: "",
        coverImage: ""
    },
    socialLinks: [
        { name: "GitHub", url: "", icon: FaGithub },
        { name: "LinkedIn", url: "", icon: FaLinkedin },
        { name: "Twitter", url: "", icon: FaTwitter },
    ],
    skills: [
        { name: "", level: 0, category: "Frontend" },
        { name: "", level: 0, category: "Frontend" },
        { name: "", level: 0, category: "Backend" },
        { name: "", level: 0, category: "Backend" },
        { name: "", level: 0, category: "Design" },
        { name: "", level: 0, category: "DevOps" },
        { name: "", level: 0, category: "Database" },
        { name: "", level: 0, category: "Database" }
    ],
    projects: [
        {
            id: 1,
            title: "",
            description: "",
            image: "",
            technologies: [],
            demoUrl: "",
            githubUrl: ""
        },
        {
            id: 2,
            title: "",
            description: "",
            image: "",
            technologies: [],
            demoUrl: "",
            githubUrl: ""
        },
        {
            id: 3,
            title: "",
            description: "",
            image: "",
            technologies: [],
            demoUrl: "",
            githubUrl: ""
        }
    ],
    experiences: [
        {
            id: 1,
            position: "",
            company: "",
            period: "",
            description: "",
            achievements: ["", "", ""]
        },
        {
            id: 2,
            position: "",
            company: "",
            period: "",
            description: "",
            achievements: ["", "", ""]
        }
    ],
    education: [
        {
            id: 1,
            degree: "",
            institution: "",
            period: "",
            description: ""
        }
    ],
    contact: {
        email: "",
        phone: "",
        address: "",
        contactFormEnabled: false
    }
};
