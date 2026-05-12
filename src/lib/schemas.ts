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
