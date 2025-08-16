import { BlogItemSchema } from "@/schema/blog";
import { glob } from "astro/loaders";
import { defineCollection } from "astro:content";

const blogCollection = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/blog" }),
  schema: BlogItemSchema,
});

export const collections = {
  blog: blogCollection,
};
