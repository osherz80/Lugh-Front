export type CVTip = {
    category: string;
    title: string;
    tip: string;
    gain: number;
}

export type SkillItem = {
    category: string;
    skills: string[];
}

export type CV = {
    id: string;
    candidateId: string;
    roleTag: string;
    fileName: string;
    fileUrl?: string;
    isMaster: boolean;
    overallScore: number;
    atsScore: number;
    keywordsScore: number;
    impactScore: number;
    layoutScore: number;
    embedding?: number[];
    content?: string;
    summary?: string;
    structuredSkills: SkillItem[]
    tips: CVTip[];
    createdAt: Date;
    updatedAt: Date;
}

export type CVRes = {
    cvs: CV[];
}