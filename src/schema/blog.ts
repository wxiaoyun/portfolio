import { z } from "astro:content";

export const BlogItemSchema = z.object({
  title: z.string(),
  pubDate: z.coerce.date(),
  link: z.string().optional(),
  thumbnail: z.string().optional(),
  description: z.string(),
  preview: z.string(),
  categories: z.array(z.string()),
});

export type BlogItem = z.infer<typeof BlogItemSchema>;
