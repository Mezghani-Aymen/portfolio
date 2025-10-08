import { z } from "zod";

export const contactSchema = z.object({
  name: z.string().min(2, "Full name is required"),
  email: z.string().email("Invalid email address"),
  subject: z.string().min(3, "Subject is required"),
  description: z.string().min(10, "Description must be at least 10 characters"),
});

export type ContactFormData = z.infer<typeof contactSchema>;