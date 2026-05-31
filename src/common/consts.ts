export const PROFILE_SECTIONS = {
    BASICS: "basics",
    SKILLS: "skills",
    EXPERIENCE: "experience",
    EDUCATION: "education",
    PERSONA: "persona",
    CONTACT: "contact",
    ANYTHING_ELSE: "anythingElse",
} as const;

export const INITIAL_SKILLS_SUGGESTIONS = [
    "React", "Project Management", "Data Analysis", "Figma", "Python",
    "SQL", "Digital Marketing", "Product Management", "Excel", "Node.js",
    "Content Writing", "Sales", "AWS", "UI/UX Design", "Customer Success"
];

export const UNIVERSAL_AUTOCOMPLETE_SKILLS = [
    ...INITIAL_SKILLS_SUGGESTIONS,
    // --- Software Engineering & Architecture ---
    "React Native", "TypeScript", "JavaScript", "Java", "C#", ".NET", "C++",
    "Go (Golang)", "Ruby on Rails", "PHP", "HTML5", "CSS3", "Angular", "Vue.js",
    "Next.js", "NestJS", "Express.js", "Spring Boot", "Docker", "Kubernetes",
    "Azure", "Google Cloud Platform (GCP)", "CI/CD Pipelines", "Git", "GitHub",
    "Microservices", "REST APIs", "GraphQL",

    // --- Data & Analytics ---
    "PostgreSQL", "MongoDB", "MySQL", "Data Science", "Machine Learning",
    "Tableau", "Power BI", "Google Analytics", "Excel (Advanced)", "Pandas", "R", "Big Data",

    // --- Product, Design & Creative ---
    "Adobe Photoshop", "Adobe Illustrator", "Agile Methodologies", "Scrum",
    "Wireframing", "Prototyping", "User Research", "Graphic Design",
    "Video Editing", "Adobe Premiere", "Motion Graphics",

    // --- Marketing & Content ---
    "SEO (Search Engine Optimization)", "SEM", "Google Ads", "Social Media Management",
    "Copywriting", "Email Marketing", "Growth Hacking", "Brand Strategy", "HubSpot",

    // --- Business, Sales & Operations ---
    "Sales", "Business Development", "Sales Strategy", "CRM Systems", "Salesforce",
    "Account Management", "Financial Modeling", "Negotiation",
    "Operations Management", "Strategic Planning", "Data Entry",

    // --- General & Soft Skills (Highly Valued by ATS) ---
    "Team Leadership", "Cross-functional Collaboration", "Problem Solving",
    "Public Speaking", "Technical Writing", "Agile Project Management"
];