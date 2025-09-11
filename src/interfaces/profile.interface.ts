import type { IconType } from "react-icons";

export interface IProject {
    id: number;
    title: string;
    description: string;
    image: string;
    technologies: string[];
    demoUrl?: string;
    githubUrl?: string;
}

export interface IExperience {
    id: number;
    position: string;
    company: string;
    period: string;
    description: string;
    achievements?: string[];
}

export interface IEducation {
    id: number;
    degree: string;
    institution: string;
    period: string;
    description: string;
}

export interface ISkill {
    name: string;
    level: number;
    category: string;
}

export interface ISocialLink {
    name: string;
    url: string;
    icon: IconType;
}

export interface IContact {
    email: string;
    phone?: string;
    address?: string;
    contactFormEnabled: boolean;
}

export interface IProfile {
    name: string;
    title: string;
    bio: string;
    avatar: string;
    coverImage?: string;
}
export interface ProfileData {
    profile: IProfile;
    socialLinks: ISocialLink[];
    skills: ISkill[];
    projects: IProject[];
    experiences: IExperience[];
    education: IEducation[];
    contact: IContact;
}