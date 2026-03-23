import { z } from "zod";

export const parserSchema = z.object({
  prompt: z.string().min(3, "Prompt must be at least 3 characters").max(1000, "Prompt is too long"),
});

export type ParserSchema = z.infer<typeof parserSchema>;
