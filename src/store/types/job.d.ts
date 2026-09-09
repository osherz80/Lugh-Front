export type PostMethod = "auto" | "manual";

export type EmploymentType = "full-time" | "part-time" | "contract" | "internship";

export type ExperienceLevel = "junior" | "mid" | "senior" | "lead";

export type WorkModel = "on-site" | "hybrid" | "remote";

export type ManualJobPost = {
    title: string;
    description: string;
    location: string;
    department: string;
    employmentType: EmploymentType;
    experienceLevel: ExperienceLevel;
    workModel: WorkModel;
    responsibilities?: string[];
    requirements?: string[];
    niceToHave?: string[];
    benefits?: string[];
    aboutCompany?: string;
}

export type AutoJobPost = {
    description: string;
    sourceUrl?: string;
}

export type PostJob = {
    method: PostMethod;
    manual?: ManualJobPost;
    auto?: AutoJobPost;
}

