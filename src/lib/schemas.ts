import { z } from "zod";

export const parserSchema = z.object({
  prompt: z.string().min(3, "Prompt must be at least 3 characters").max(1000, "Prompt is too long"),
});

export const basicsSchema = z.object({
  fullName: z.string().min(2, "Full name is required"),
  targetRole: z.string().min(2, "Target role is required"),
  yearsOfExperience: z.number().min(0, "Years of experience must be at least 0"),
  country: z.string().min(2, "Country is required"),
  city: z.string().min(2, "City is required"),
});

export const skillsSchema = z.record(z.string(), z.string().max(600, "Description is too long"));

export type BasicsSchema = z.infer<typeof basicsSchema>;
export type SkillsSchema = z.infer<typeof skillsSchema>;

export const experienceSchema = z.object({
  experience: z.array(z.object({
    id: z.string(),
    company: z.string().min(2, "Company is required"),
    roleTag: z.string().min(2, "Title is required"),
    startDate: z.string().min(2, "Start date is required"),
    endDate: z.string().optional(),
    isCurrent: z.boolean(),
    description: z.string().max(600, "Description is too long"),
  }))
});

export type ExperienceSchema = z.infer<typeof experienceSchema>;

export const educationSchema = z.object({
  education: z.array(z.object({
    institution: z.string().min(2, "Institution is required"),
    degree: z.string().min(2, "Degree is required"),
    startDate: z.string().min(2, "Start date is required"),
    endDate: z.string().optional(),
    isOngoing: z.boolean(),
    description: z.string().max(600, "Description is too long"),
  }))
});

export type EducationSchema = z.infer<typeof educationSchema>;

export const personaSchema = z.object({
  style: z.array(z.string()).min(1, "Select at least one work style"),
  strengths: z.array(z.string()).min(1, "Select at least one strength").max(3, "Select up to 3 strengths"),
  story: z.string().max(600, "Story is too long"),
});

export type PersonaSchema = z.infer<typeof personaSchema>;
