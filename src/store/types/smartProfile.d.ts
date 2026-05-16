import SmartProfilePage from "@/app/candidate/smart-profile/page";
import { PROFILE_SECTIONS } from "@/common/consts";

export type Basics = {
    fullName: string;
    targetRole: string;
    yearsOfExperience: number;
    country: string;
    city: string;
}

export type Skills = Record<string, string>;

export type JobExperience = {
    id: string;
    company: string;
    roleTag: string;
    startDate: string;
    endDate?: string;
    isCurrent: boolean;
    description: string;
}

export type Education = {
    institution: string;
    degree: string;
    startDate: string;
    endDate?: string;
    isOngoing: boolean;
    description: string;
}

export type Persona = {
    style: string[];
    strengths: string[];
    story: string;
}

export type Contact = {
    phone: string;
    email: string;
    linkedin: string;
    github: string;
    portfolio: string;
    anythingElse: string;
}

export type SmartProfile = {
    [PROFILE_SECTIONS.BASICS]: Basics;
    [PROFILE_SECTIONS.SKILLS]: Skills;
    [PROFILE_SECTIONS.EXPERIENCE]: JobExperience[];
    [PROFILE_SECTIONS.EDUCATION]: Education[];
    [PROFILE_SECTIONS.PERSONA]: Persona;
    [PROFILE_SECTIONS.CONTACT]: Contact;
}

export type SmartProfileSection = (typeof PROFILE_SECTIONS)[keyof typeof PROFILE_SECTIONS];

type OtherProfile = {
    profileId: string;
    profileName: string;
}

export type ProfileExtras = {
    smartProfileId: string | null;
    currentStep: number;
    isMaster: boolean;
    otherProfiles: OtherProfile[];
}

export type SmartProfileState = SmartProfile & ProfileExtras;

export type SmartProfilePayload = {
    key: SmartProfileSection;
    value: SmartProfile[keyof SmartProfile];
};