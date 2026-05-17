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
    id?: string;
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
    linkedin?: string;
    portfolio?: string;
    anythingElse?: string;
}

export type SmartProfile = {
    [PROFILE_SECTIONS.BASICS]: Basics;
    [PROFILE_SECTIONS.SKILLS]: Skills;
    [PROFILE_SECTIONS.EXPERIENCE]: JobExperience[];
    [PROFILE_SECTIONS.EDUCATION]: Education[];
    [PROFILE_SECTIONS.PERSONA]: Persona;
    [PROFILE_SECTIONS.CONTACT]: Contact;
}

export type SmartProfileSectionKey = (typeof PROFILE_SECTIONS)[keyof typeof PROFILE_SECTIONS];
export type SmartProfileSection = SmartProfile[keyof SmartProfile];

type OtherProfile = {
    profileId: string;
    profileName: string;
}

export type ProfileExtras = {
    profileId: string | null;
    currentStep: number;
    isMaster: boolean;
    otherProfiles: OtherProfile[];
}

export type FullSmartProfile = SmartProfile & ProfileExtras;

export type BackendSmartProfile = {
    profileId: string;
    email: string | null;
    createdAt: Date;
    updatedAt: Date;
    candidateId: string;
    fullName: string | null;
    targetRole: string | null;
    yearsOfExperience: number | null;
    country: string | null;
    city: string | null;
    skills: Record<string, string> | null;
    persona: {
        style: string[];
        strengths: string[];
        story: string;
    } | null;
    phone: string | null;
    linkedin: string | null;
    github: string | null;
    portfolio: string | null;
    anythingElse: string | null;
    currentStep: number | null;
    isMaster: boolean | null;
    education: Education[];
    experiences: JobExperience[];
    otherProfiles?: OtherProfile[];
}

export type SmartProfilePayload = {
    key: SmartProfileSectionKey;
    value: SmartProfile[keyof SmartProfile];
};

export type UpsertSmartProfilePayload = {
    stepData: SmartProfileSection | SmartProfileSection[];
    section: SmartProfileSectionKey;
}